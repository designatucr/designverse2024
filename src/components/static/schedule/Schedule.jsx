import { api } from "@/utils/api";
import Events from "./Events";

const Schedule = async () => {
  const { items } = await api({
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    method: "GET",
  });

  items.forEach((event) => {
    event.start = new Date(event.start.dateTime).toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });

    event.end = new Date(event.end.dateTime).toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });
  });

  console.log(items);

  const totalDays = [
    ...new Set(items.map(({ start }) => new Date(start).getDay())),
  ];

  return <Events events={items} totalDays={totalDays} />;
};

export default Schedule;
