"use client";
import { api } from "@/utils/api";
import Events from "./Events";
import { useEffect, useState } from "react";

const Schedule = () => {
  const [events, setEvents] = useState([
    {
      start: new Date(),
      description: "",
    },
  ]);

  useEffect(() => {
    const load = async () => {
      const { items } = await api({
        url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
        method: "GET",
      });

      items.forEach((event) => {
        event.start = new Date(event.start.dateTime);
        event.end = new Date(event.end.dateTime);
      });

      setEvents(items);
    };

    load();
  }, []);

  const totalDays = [...new Set(events.map(({ start }) => start.getDay()))];

  return <Events events={events} totalDays={totalDays} />;
};

export default Schedule;
