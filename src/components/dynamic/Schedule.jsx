"use client";

// DO NOT REMOVE COMMENTED CODE IN THIS FILE

import { useState, useEffect } from "react";
import MockSchedule from "@/data/MockSchedule";
import Image from "next/image";
import LOGEND from "@/public/svgs/schedule/logEnd.svg";
import LOGSTART from "@/public/svgs/schedule/logStart.svg";
import WAVES from "@/public/svgs/schedule/wave.svg";
import LILYPAD from "@/public/svgs/landing/lillypad.svg";
import LOTUS from "@/public/svgs/landing/lotus.svg";
import twiggy1 from "@/public/svgs/schedule/twiggy1.svg";
import twiggy2 from "@/public/svgs/schedule/twiggy2.svg";
// import temp from "@/public/svgs/schedule/temp.svg";
// import pads from "../../../public/svgs/landing/aboutPads.svg";
const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState("Monday");

  useEffect(() => {
    if (selectedDay && selectedDay in MockSchedule) {
      const selectedDayEvents = MockSchedule[selectedDay].events;
      setEvents(selectedDayEvents);
    } else {
      setEvents([]);
    }
  }, [selectedDay]);
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
          {/* <div className="text-xl lg:text-2xl font-semibold inline-block mt-4 mb-2">
            Coming Soon . . .
          </div>
          <div className="text-xl lg:text-2xl font-semibold inline-block">
            Check Back Spring 2024!
          </div> */}
          <p className="text-base md:text-lg mt-2 font-extralight">
            Pacific Standard Time (PST)
          </p>
          <div className="mt-4 flex flex-col justify-center items-center w-full">
            <div className="text-sm md:text-base z-30 lg:w-6/12 justify-between items-center mx-auto flex bg-[#0B5E5E] rounded">
              {days.map((day) => (
                <button
                  key={day}
                  className={`flex py-2 px-3 justify-between rounded focus:outline-none text-white ${
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
                {/* <div
                  className={`absolute w-2 h-full bg-[#695546] rounded-lg left-24 z-[-1]`}
                />
                <div
                  className={`absolute w-2 h-full bg-[#695546] rounded-lg right-24 z-[-1]`}
                /> */}
                {events &&
                  events.map((event, index) => {
                    const randomX1 = getRandomFromArray(randomXPositions);
                    const randomX2 = getRandomFromArray(randomXPositions2);
                    return (
                      <div key={index}>
                        <Image
                          src={twiggy2}
                          className="w-6 h-6 relative top-2"
                          style={{ left: `${randomX1}%` }}
                        />
                        <div className="flex ">
                          <Image src={LOGSTART} className="" alt="Log" />
                          <div
                            key={event.name}
                            className="w-full lg:pt-3 flex justify-between text-xs lg:text-lg items-center font-semibold font-workSans bg-gradient-to-b lg:px-4 from-[#695546_50%] to-[#5b4739_50%] "
                          >
                            <p>{`${event.TIME}`}</p>
                            <p>{`${event.EVENT}`}</p>
                            <p>{`${event.TYPE}`}</p>
                            <p c>{`${event.LOCATION}`}</p>
                          </div>
                          <Image src={LOGEND} className=" flex " alt="Log" />
                        </div>
                        <Image
                          src={twiggy1}
                          className="w-6 h-6 relative bottom-2 rotate-180"
                          style={{ left: `${randomX2}%` }}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* <Image src={temp} className="z-0 top-16 " alt="Waves" /> */}
          <Image
            src={WAVES}
            className="absolute w-screen  -z-20 left-0 animate-wave scale-[200%]"
            alt="Waves"
          />
        </div>
      </div>
      {/* <Image
        src={WAVES}
        className="absolute w-90 margin-auto z-0 top-16 flex-none"
        alt="Waves"
      />
      <Image
        src={WAVES}
        className="absolute min-w-96 z-0 bottom-32 md:bottom-16 rotate-180"
        alt="Waves"
      />
      <Image
        src={LILYPAD}
        className="absolute w-screen flex z-0 h-16 top-[30%] left-[47%] transform -scale-x-100"
        alt=""
      /> */}
      {/* <Image
        src={FROG}
        className="absolute w-screen flex z-0 h-24 bottom-4 left-[42%]"
        alt="Frog on lilypad"
      /> */}
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

export default Schedule;
