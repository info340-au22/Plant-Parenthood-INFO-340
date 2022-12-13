import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState, useCallback } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { ComposeEvent } from './ComposeEvent.js';
import { getDatabase, ref, onValue, set as firebaseSet, push as firebasePush} from 'firebase/database' // realtime

export function PlantCalendar(props) {
    // calendar locale
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
    const [allEvents, setAllEvents] = useState([]);

    useEffect(() => {
        const db = getDatabase(); //"the database"
        const allEventsRef = ref(db, 'allUsers/' + currentUser.userId + '/allEvents');

        //returns the instructions how to turn it off
        const offFunction = onValue(allEventsRef, (snapshot) => {
            const valueObj = snapshot.val();
            const objKeys = Object.keys(valueObj);

            const objArray = objKeys.map((keyString) => {
                const theEventObject = valueObj[keyString];
                theEventObject.key = keyString;
                theEventObject.start = new Date (theEventObject.start);
                theEventObject.end = new Date(theEventObject.end);
                return theEventObject;
            })

            // console.log(objArray);
            setAllEvents(objArray); //needs to be an array
        })

        //when the component goes away, we turn off the listener
        //the useEffect callback returns...
        function cleanup() {
            console.log("component is being removed");
            console.log("turn out the lights");
            offFunction();
        }
        return cleanup;
    }, [])

    const addEvent = (title, start, end) => {
        const newEventDB = {
            "title": title,
            "start": start.toString(),
            "end": end.toString()
        }

        const db = getDatabase(); 
        const allEventsRef = ref(db, 'allUsers/' + currentUser.userId + '/allEvents');
        firebasePush(allEventsRef, newEventDB);
    }
    
    const handleClickDeleteEvent = (event) => {
        console.log(event.key);
        console.log(event.title);
        // window.alert("Do you want to delete " + event.title + "?");
        const db = getDatabase();
        console.log(currentUser);
        const eventToDeleteRef = ref(db, 'allUsers/' + currentUser.userId + '/allEvents/' + event.key);
        console.log('allUsers/' + currentUser.userID + '/allEvents' + event.key);
        firebaseSet(eventToDeleteRef, null);
    }
    

    return (
        <div className="App">
            <h1 className="calendar-title">Plant Calendar</h1>
            {/* <h2 className="event-title">Add New Event</h2> */}
            <ComposeEvent addEventCallback={addEvent} />
            <Calendar
                className="calendar"
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                onSelectEvent={handleClickDeleteEvent}
                defaultView="day" 
                style={{ height: 500 }} // Including inline styling to support 3rd party react-big-calendar library + Professor approved this
            />
        </div>
    )
}