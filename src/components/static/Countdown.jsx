"use client";
import { useState, useEffect } from "react";
import { CONFIG } from "@/data/Config";

const Digits = ({ value, text }) => {
  return (
    <div className="flex flex-col items-center mr-3 md:mr-5 gap-2 text-white mt-4">
      <div className="flex items-center">
        {value >= 100 && (
          <p className="bg-design-green-100/80 mb-0 h-10 md:h-20 text-lg md:text-3xl font-bold w-8 md:w-16 flex items-center justify-center rounded-lg drop-shadow-md mr-1 md:mr-2">
            {Math.floor(value / 100)}
          </p>
        )}
        <p className="bg-design-green-100/80 mb-0 h-10 md:h-20 text-lg md:text-3xl font-bold w-8 md:w-16 flex items-center justify-center rounded-lg drop-shadow-md mr-1 md:mr-2">
          {Math.floor(value / 10) % 10}
        </p>
        <p className="bg-design-green-100/80 mb-0 h-10 md:h-20 text-lg md:text-3xl font-bold w-8 md:w-16 flex items-center justify-center rounded-lg drop-shadow-md">
          {value % 10}
        </p>
      </div>
      <p className="text-sm font-medium md:text-lg">{text}</p>
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
    <div className="flex">
      {Object.entries(time).map(([text, value], index) => (
        <Digits key={index} text={text} value={value} />
      ))}
    </div>
  );
};

export default Countdown;
