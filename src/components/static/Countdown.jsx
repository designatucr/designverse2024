"use client";
import { useState, useEffect } from "react";
import { CONFIG } from "@/data/Config";

const Digits = ({ value, text }) => {
  return (
    <div
      className={`${
        text === "seconds" ? "hidden md:flex" : ""
      } flex flex-col items-center w-full  mx-3 gap-2 text-white`}
    >
      <div className="flex justify-center w-full ">
        {value >= 100 && (
          <div className="bg-design-green-100/80 mb-0 h-10 md:h-16 text-lg md:text-4xl font-bold w-8 md:w-12 flex items-center justify-center rounded-lg drop-shadow-md mr-1 md:mr-2">
            {Math.floor(value / 100)}
          </div>
        )}
        <div className="bg-design-green-100/80 mb-0 h-10 md:h-16 text-lg md:text-4xl font-bold w-8 md:w-12 flex items-center justify-center rounded-lg drop-shadow-md mr-1 md:mr-2">
          {Math.floor(value / 10) % 10}
        </div>
        <div className="bg-design-green-100/80 mb-0 h-10 md:h-16 text-lg md:text-4xl font-bold w-8 md:w-12 flex items-center justify-center rounded-lg drop-shadow-md">
          {value % 10}
        </div>
      </div>
      <div className="text-sm font-medium md:text-lg">{text}</div>
    </div>
  );
};

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = CONFIG.date - new Date();
      setTime({
        days: Math.ceil(diff / (1000 * 60 * 60 * 24)),
        hours: Math.ceil((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.ceil((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.ceil((diff % (1000 * 60 * 60)) / 1000) % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full">
      {Object.entries(time).map(([text, value], index) => (
        <Digits key={index} text={text} value={value} />
      ))}
    </div>
  );
};

export default Countdown;
