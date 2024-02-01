"use client";
import { useState, useEffect } from "react";
import MockSchedule from "@/data/MockSchedule";
import Image from "next/image";
import LOGEND from "@/public/svgs/schedule/logEnd.svg";
import LOGSTART from "@/public/svgs/schedule/logStart.svg";
import WAVES from "@/public/svgs/wave.svg";
import LILYPAD from "@/public/svgs/landing/lillypad.svg";
import LOTUSLILY from "@/public/svgs/landing/lotuswithpad.svg";
import FROG from "@/public/svgs/landing/onlyFrog.svg";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState("SUN");

  useEffect(() => {
    if (selectedDay && selectedDay in MockSchedule) {
      const selectedDayEvents = MockSchedule[selectedDay].events;
      setEvents(selectedDayEvents);
    } else {
      setEvents([]);
    }
  }, [selectedDay]);

  console.log("EVENTS:", events);
  return (
    <div className="bg-design-blue-200 pt-10 relative">
      <div className="w-9/12 mx-auto text-white font-workSans flex items-center">
        <div className="w-full text-center z-1">
          <p className="text-3xl lg:text-5xl font-bold inline-block">
            SCHEDULE
          </p>
          <p className="text-sm md:text-base font-light">
            Pacific Standard Time (PST)
          </p>
          <div className="mt-4">
            <div className="w-fit mx-auto flex justify-center bg-design-blue-100 rounded">
              {days.map((day) => (
                <button
                  key={day}
                  className={`flex py-2 px-3 md:px-4 justify-between rounded focus:outline-none text-white ${
                    selectedDay === day
                      ? "bg-design-blue-400"
                      : "bg-transparent"
                  }`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>
            <div className="mt-6 h-[1200px] relative">
              {events &&
                events.map((event, index) => (
                  <div key={index} className="flex">
                    <Image
                      src={LOGSTART}
                      className="w-[16.6px] flex relative"
                      alt="Log"
                    />
                    <div
                      key={event.name}
                      className="my-4 w-full flex justify-between bg-[#695546]"
                    >
                      <p className="text-lg m-0 py-3 pl-6 lg:pl-16">{`${event.TIME}`}</p>
                      <p className="text-lg m-0 py-3">{`${event.EVENT}`}</p>
                      <p className="text-lg m-0 py-3">{`${event.TYPE}`}</p>
                      <p className="text-lg m-0 py-3 pr-6 lg:pr-16">{`${event.LOCATION}`}</p>
                    </div>
                    <Image
                      src={LOGEND}
                      className="w-[8.15px] flex relative"
                      alt="Log"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={WAVES}
        className="absolute w-screen flex z-0 top-16"
        alt="Waves"
      />
      <Image
        src={WAVES}
        className="absolute w-screen flex z-0 top-[60%] transform -scale-x-100 -scale-y-100"
        alt="Waves"
      />
      <Image
        src={LILYPAD}
        className="absolute w-screen flex z-0 h-16 top-[30%] left-[47%] transform -scale-x-100"
        alt=""
      />
      <Image
        src={LOTUSLILY}
        className="absolute w-screen flex z-0 w-24 bottom-96  left-[-2%]"
        alt="Lotus on lilypad"
      />
      <Image
        src={FROG}
        className="absolute w-screen flex z-0 h-24 bottom-4 left-[42%]"
        alt="Frog on lilypad"
      />
    </div>
  );
};

export default Schedule;
