"use client";
import { useState } from "react";
import Image from "next/image";
import LOGEND from "@/public/svgs/schedule/logEnd.svg";
import LOGSTART from "@/public/svgs/schedule/logStart.svg";
import WAVES from "@/public/svgs/schedule/wave.svg";
import LILYPAD from "@/public/svgs/landing/lillypad.svg";
import LOTUS from "@/public/svgs/landing/lotus.svg";
import twiggy1 from "@/public/svgs/schedule/twiggy1.svg";
import twiggy2 from "@/public/svgs/schedule/twiggy2.svg";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getRandomFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const Events = ({ events, totalDays }) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > events[0].start ? new Date().getDay() : 1
  );

  const randomXPositions = [10, 16, 20, 28, 36, 44, 52, 60, 72, 90];
  const randomXPositions2 = [10, 14, 24, 32, 40, 48, 56, 64, 80];

  return (
    <div
      id="schedule"
      className="bg-newdesign-cyan-200 py-24 flex flex-col justify-center items-center "
    >
      <div className="lg:w-9/12 flex  text-white font-workSans justify-center items-center">
        <div className="w-full text-center z-1 flex flex-col">
          <div className="text-3xl lg:text-5xl font-bold inline-block">
            SCHEDULE
          </div>
          <p className="text-base md:text-lg mt-2 font-extralight">
            Pacific Standard Time (PST)
          </p>
          <div className="mt-4 flex flex-col justify-center items-center w-full">
            <div className="text-sm md:text-base z-30 lg:w-6/12 justify-between items-center mx-auto flex bg-[#0B5E5E] rounded">
              {totalDays.map((day) => (
                <button
                  key={day}
                  className={`flex py-2 px-3 justify-between rounded focus:outline-none text-white ${
                    selectedDay === day ? "bg-[#15929A]" : "bg-transparent"
                  }`}
                  onClick={() => setSelectedDay(day)}
                >
                  {DAYS[day]}
                </button>
              ))}
            </div>
            <div className="mt-6 h-full relative w-11/12 z-10">
              <div className="relative">
                {events
                  .filter(
                    ({ start }) =>
                      new Date(
                        new Date(start).toLocaleString("en-US", {
                          timeZone: "America/Los_Angeles",
                        })
                      ).getDay() === selectedDay
                  )
                  .map((event, index) => {
                    const randomX1 = getRandomFromArray(randomXPositions);
                    const randomX2 = getRandomFromArray(randomXPositions2);
                    const { start, summary, description, location } = event;

                    return (
                      <div key={index}>
                        <Image
                          src={twiggy2}
                          className="w-6 h-6 relative top-2"
                          style={{ left: `${randomX1}%` }}
                          alt="Log Asset"
                        />
                        <div className="flex">
                          <Image src={LOGSTART} alt="Log" />
                          <div className="w-full lg:pt-3 flex justify-between text-xs lg:text-lg items-center font-semibold font-workSans bg-gradient-to-b lg:px-4 from-[#695546_50%] to-[#5b4739_50%] ">
                            <p>
                              {start.toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZone: "America/Los_Angeles",
                              })}
                            </p>
                            <p>{summary}</p>
                            <p>{description.split("\n")[0].substr(1)}</p>
                            <p>{location}</p>
                          </div>
                          <Image src={LOGEND} className=" flex " alt="Log" />
                        </div>
                        <Image
                          src={twiggy1}
                          className="w-6 h-6 relative bottom-2 rotate-180"
                          style={{ left: `${randomX2}%` }}
                          alt="Log Asset"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <Image
            src={WAVES}
            className="absolute w-screen  -z-20 left-0 animate-wave scale-[200%]"
            alt="Waves"
          />
        </div>
      </div>
      <div className=" w-full flex justify-between">
        <Image
          src={LILYPAD}
          className=" flex z-0 lg:-ml-10 w-3/12 mt-20 lg:w-2/12 animate-wiggle3"
          alt="Lotus on lilypad"
        />
        <Image
          src={LOTUS}
          className=" flex  w-3/12 lg:w-2/12 lg:-mr-10 z-0 animate-wiggle2 "
          alt="Lotus on lilypad"
        />
      </div>
    </div>
  );
};

export default Events;
