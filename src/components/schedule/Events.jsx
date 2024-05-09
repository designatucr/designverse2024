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

const getRandomFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const Events = ({ events, totalDays }) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0].start)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Monday"
  );

  const randomXPositions = [10, 16, 20, 28, 36, 44, 52, 60, 72, 90];
  const randomXPositions2 = [10, 14, 24, 32, 40, 48, 56, 64, 80];

  return (
    <div
      id="schedule"
      className="bg-newdesign-cyan-200 py-24 flex flex-col justify-center items-center "
    >
      <div className="w-full lg:w-9/12 flex  text-white font-workSans justify-center items-center">
        <div className="w-full text-center z-1 flex flex-col">
          <div className="text-3xl lg:text-5xl font-bold inline-block">
            SCHEDULE
          </div>
          <p className="text-base md:text-lg mt-2 font-extralight">
            Pacific Standard Time (PST)
          </p>
          {/* <p className="text-sm lg:text-xl">DESIGN WEEK MAY 6th - 9th</p> */}
          <div className="mt-4 flex flex-col justify-center items-center ">
            {/* <div className="text-sm md:text-base z-30 lg:w-7/12 justify-between items-center mx-auto flex bg-[#0B5E5E] rounded"> */}
            <div className="text-sm md:text-base z-30 lg:w-7/12 justify-between items-center mx-auto grid grid-cols-3 lg:grid-cols-6 bg-[#0B5E5E] rounded">
              {totalDays.map((day) => (
                <button
                  key={day}
                  className={`flex justify-center p-2 rounded focus:outline-none text-white ${
                    selectedDay === day ? "bg-[#15929A]" : "bg-transparent"
                  }`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>
            <div className="mt-6 h-full relative w-11/12 z-10">
              <div className="relative">
                {events
                  .filter(({ day }) => day === selectedDay)
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
                          {/* <div className="w-full lg:pt-3 flex justify-between gap-20 text-xs lg:text-lg items-center font-semibold font-workSans bg-gradient-to-b lg:px-4 from-[#695546_50%] to-[#5b4739_50%] "> */}
                          <div className="text-xs lg:text-lg w-full lg:pt-3 font-semibold font-workSans bg-gradient-to-b lg:px-4 from-[#695546_50%] to-[#5b4739_50%] grid grid-cols-4 justify-center items-center">
                            <p className="">
                              {new Date(start).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZone: "America/Los_Angeles",
                              })}
                            </p>
                            <p className="w-full flex justify-center ">
                              {summary}
                            </p>
                            <p className=" flex justify-center ">
                              {description.split("\n")[0].substr(1)}
                            </p>
                            {/* <p className="w-1/6 flex justify-start">
                              {description.split(" ")[0]}
                            </p> */}
                            <p className="flex justify-center ">{location}</p>
                          </div>
                          <Image src={LOGEND} className="flex" alt="Log" />
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
