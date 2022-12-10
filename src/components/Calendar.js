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

    const events = [
        {
            title: "Big Meeting",
            allDay: true,
            start: new Date(2021, 6, 0),
            end: new Date(2021, 6, 0),
        },
        {
            title: "Vacation",
            start: new Date(2021, 6, 7),
            end: new Date(2021, 6, 10),
        },
        {
            title: "Conference",
            start: new Date(2021, 6, 20),
            end: new Date(2021, 6, 23),
        },
    ];

    return (
        <Calendar className = "calendar" localizer={localizer} events={events}
         startAccessor="start" 
         endAccessor="end" style={{ height: 500, margin: "50px" }} /> //do style in
    )
}