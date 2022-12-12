import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";

// db import
import { getDatabase, ref, onValue, set as firebaseSet, push as firebasePush } from 'firebase/database' // realtime

export function PlantCalendar(props) {

    const locales = {
        "en-US": require("date-fns/locale/en-US"),
    };

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    });

    const currentUser = props.currentUser;
    console.log(currentUser);

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState([]);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
        addEvent();
    }

    useEffect(() => {

        const db = getDatabase(); //"the database"
        const allEventsRef = ref(db, "allEvents");

        //returns the instructions how to turn it off
        const offFunction = onValue(allEventsRef, (snapshot) => {
          const valueObj = snapshot.val();
          console.log(valueObj);
    
          const objKeys = Object.keys(valueObj);
          console.log(objKeys);
    
          const objArray = objKeys.map((keyString) => {
            const theMessageObj = valueObj[keyString];
            theMessageObj.key = keyString;
            return theMessageObj;
          })
          console.log(objArray);
    
         setAllEvents(objArray); //needs to be an array
        })
    
        //when the component goes away, we turn off the listener
    
        //the useEffect callback returns...
        function cleanup() {
          console.log("component is being removed");
          console.log("turn out the lights");
          offFunction();
        }
    
        return cleanup; //return instructions on how to turn off lights
      }, [])

      const addEvent = (eventText) => {
        const userObj = currentUser;
        const newEventDB = {
          "userId": userObj.userId,
          "text": newEvent.title,
          "start": newEvent.start.toString(),
          "end": newEvent.end.toString()
        } 
    
        const updateEvents = [...allEvents, newEvent];
        //setChatMessages(updateChatMessages); //update state and re-render
    
        //play with the database
        console.log("databasing");
    
        const db = getDatabase(); //"the database"
        const eventRef = ref(db, "exEvent");
        console.log(eventRef);

        //          where to change,
        //firebaseSet(messageRef, newMessage );
    
        const allEventsRef = ref(db, 'allEvents');
        firebasePush(allEventsRef, newEventDB);
    }

    return (
        <div className="App">
            <h1 className="calendar-title">Plant Calendar</h1>
            <h2 className="calendar-title">Add New Event</h2>
            <div className="add-event">
                <input className="event-add-title" type="text" placeholder="Add Title"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <DatePicker placeholderText="Start Date"
                    style={{ marginRight: "10px" }} selected={newEvent.start}
                    value={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start})}
                />
                <DatePicker placeholderText="End Date" selected={newEvent.end}
                    value={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })}
                />
                <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    )
}