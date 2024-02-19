// "use client";
// import { useState, useEffect } from "react";
// import MockSchedule from "@/data/MockSchedule";
import Image from "next/image";
// import LOGEND from "@/public/svgs/schedule/logEnd.svg";
// import LOGSTART from "@/public/svgs/schedule/logStart.svg";
import WAVES from "@/public/svgs/schedule/wave.svg";
// import LILYPAD from "@/public/svgs/landing/lillypad.svg";
// import FROG from "@/public/svgs/landing/onlyFrog.svg";
// import twiggy1 from "@/public/svgs/schedule/twiggy1.svg";
// import twiggy2 from "@/public/svgs/schedule/twiggy2.svg";
import temp from "@/public/svgs/schedule/temp.svg";
// const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// function getRandomFromArray(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }

const Schedule = () => {
  // const [events, setEvents] = useState([]);
  // const [selectedDay, setSelectedDay] = useState("SUN");

  // useEffect(() => {
  //   if (selectedDay && selectedDay in MockSchedule) {
  //     const selectedDayEvents = MockSchedule[selectedDay].events;
  //     setEvents(selectedDayEvents);
  //   } else {
  //     setEvents([]);
  //   }
  // }, [selectedDay]);
  // const randomXPositions = [10, 16, 20, 28, 36, 44, 52, 60, 72, 90];
  // const randomXPositions2 = [10, 14, 24, 32, 40, 48, 56, 64, 80];
  return (
    <div className="bg-design-blue-200 pt-10 py-4 flex justify-center items-center lg:py-10">
      <div className="w-9/12 flex  text-white font-workSans justify-center items-center">
        <div className="w-full text-center z-1 flex flex-col">
          <p className="text-3xl lg:text-5xl font-bold inline-block">
            SCHEDULE
          </p>
          <p className="text-xl lg:text-2xl font-semibold inline-block">
            Coming Soon
          </p>
          <p className="text-xl lg:text-2xl font-semibold inline-block">
            Check Back Spring 2024!
          </p>
          {/* <p className="text-sm md:text-base font-light">
            Pacific Standard Time (PST)
          </p>
          <div className="mt-4">
            <div className="text-sm md:text-base w-fit mx-auto flex bg-design-blue-100 rounded">
              {days.map((day) => (
                <button
                  key={day}
                  className={`flex py-2 px-3 justify-between rounded focus:outline-none text-white ${
                    selectedDay === day
                      ? "bg-design-blue-500"
                      : "bg-transparent"
                  }`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>
            <div className="mt-6 h-[1200px] relative">
              <div className="relative">
                <div
                  className={`absolute w-2 h-full bg-design-brown-400 rounded-lg left-24 z-[-1]`}
                />
                <div
                  className={`absolute w-2 h-full bg-design-brown-400 rounded-lg right-24 z-[-1]`}
                />
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
                        <div className="flex w-full">
                          <Image
                            src={LOGSTART}
                            className="w-[13.3px] md:w-[16.6px] flex relative"
                            alt="Log"
                          />
                          <div
                            key={event.name}
                            className="w-full flex justify-between bg-[#695546]"
                          >
                            <p className="text-xs md:text-lg m-0 py-3 pl-6 lg:pl-16">{`${event.TIME}`}</p>
                            <p className="text-xs md:text-lg m-0 py-3">{`${event.EVENT}`}</p>
                            <p className="text-xs md:text-lg m-0 py-3">{`${event.TYPE}`}</p>
                            <p className="text-xs md:text-lg m-0 py-3 pr-6 lg:pr-16">{`${event.LOCATION}`}</p>
                          </div>
                          <Image
                            src={LOGEND}
                            className="w-[6.53px] md:w-[8.15px] flex relative"
                            alt="Log"
                          />
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
          </div> */}
          <Image src={temp} className=" z-0 top-16 " alt="Waves" />
          <Image
            src={WAVES}
            className="absolute w-screen -z-10 left-0"
            alt="Waves"
          />
        </div>
      </div>
      {/* <Image
        src={WAVES}
        className="absolute w-90 margin-auto z-0 top-16 flex-none"
        alt="Waves"
      /> */}
      {/* <Image
        src={WAVES}
        className="absolute min-w-96 z-0 bottom-32 md:bottom-16 rotate-180"
        alt="Waves"
      /> */}
      {/* <Image
        src={LILYPAD}
        className="absolute w-screen flex z-0 h-16 top-[30%] left-[47%] transform -scale-x-100"
        alt=""
      /> */}
      {/* <Image
        src={LOTUSLILY}
        className="absolute w-screen flex z-0 w-32 bottom-96  left-[-2%]"
        alt="Lotus on lilypad"
      /> */}
      {/* <Image
        src={FROG}
        className="absolute w-screen flex z-0 h-24 bottom-4 left-[42%]"
        alt="Frog on lilypad"
      /> */}
    </div>
  );
};

export default Schedule;
