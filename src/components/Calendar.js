import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React from 'react';
import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { ComposeEvent } from './ComposeEvent.js';
import { getDatabase, ref, onValue, set as firebaseSet, push as firebasePush, child } from 'firebase/database' // realtime

export function PlantCalendarPage(props) {
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
    const [allEvents, setAllEvents] = useState();

    useEffect(() => {
        const db = getDatabase(); //"the database"
        const allEventsRef = ref(db, 'allUsers/' + currentUser.userId + '/allEvents');

        const dummyEventRef = ref(db, 'allUsers/' + currentUser.userId + '/allEvents');

        if (child(dummyEventRef, "dummy")) {
            firebasePush(dummyEventRef, {
                "title": "",
                "start": "",
                "end": "",
                "key": "dummy"
            });
        }

        //returns the instructions how to turn it off
        const offFunction = onValue(allEventsRef, (snapshot) => {
            const valueObj = snapshot.val();
            const objKeys = Object.keys(valueObj);

            const objArray = objKeys.map((keyString) => {
                const theEventObject = valueObj[keyString];
                theEventObject.key = keyString;
                theEventObject.start = new Date(theEventObject.start);
                theEventObject.end = new Date(theEventObject.end);
                return theEventObject;
            })

            setAllEvents(objArray); //needs to be an array
        })

        //when the component goes away, we turn off the listener
        //the useEffect callback returns...
        function cleanup() {
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
        const db = getDatabase();
        const eventToDeleteRef = ref(db, 'allUsers/' + currentUser.userId + '/allEvents/' + event.key);
        window.alert("Warning! You are about to delete your calendar event!");
        firebaseSet(eventToDeleteRef, null);
    }

    return (
        <div className="App">
            <h1 className="calendar-title">Plant Calendar</h1>
            <p className="calendar-explanation"> Track your plant watering schedule by adding events below! </p>
            <div className="compose-calendar">
                <ComposeEvent addEventCallback={addEvent} />
                <Calendar
                    role="calendar"
                    className="calendar"
                    localizer={localizer}
                    events={allEvents}
                    startAccessor="start"
                    endAccessor="end"
                    onSelectEvent={handleClickDeleteEvent}
                    defaultView="day"
                    views={["month", "week", "day"]}
                    style={{ height: 550 }} // Including inline styling to support 3rd party react-big-calendar library + Professor approved this
                />
            </div>
        </div>
    )
}