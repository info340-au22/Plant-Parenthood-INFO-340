import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";

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

    const events = [];

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {

        for (let i = 0; i < allEvents.length; i++) {

            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);

            if (
                ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
                    (d4 <= d3))
            ) {
                // alert("CLASH"); 
                // break;
            }

        }


        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App">
            <h1 className="calendar-title">Plant Calendar</h1>
            <h2 className="calendar-title">Add New Event</h2>
            <div className="add-event">
                <input className="event-add-title" type="text" placeholder="Add Title"
                    value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <DatePicker className="event-date" placeholderText="Start Date"
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })}
                />
                <DatePicker className="event-date" placeholderText="End Date"
                    selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })}
                />
                <button className="event-btn"
                    onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar
            className="calendar"
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            defaultView="day"
            style={{ height: 500}}
            />
        </div>
    )
}