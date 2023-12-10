import CountDown from "../Countdown";
import Image from "next/image";
import Apply from "../Apply";
import Animals from "../../../../public/svgs/animals.svg";
import Mushrooms1 from "../../../../public/svgs/mushrooms1.svg";
import Mushrooms2 from "../../../../public/svgs/mushrooms2.svg";
import Waterline from "../../../../public/svgs/waterline.svg";
import Lily from "../../../../public/svgs/lilly.svg";
import OnlyFrog from "../../../../public/svgs/onlyFrog.svg";
import Lillypad from "../../../../public/svgs/lillypad.svg";
import Lotus from "../../../../public/svgs/lotus.svg";
import { IoPin } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
// import Logo from "../../../../public/svgs/Logo1.svg";

const Upcoming = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative font-workSans">
      <div className="flex h-[72%] flex-row overflow-hidden justify-between bg-gradient-to-b from-design-green-100 via-design-green-100 to-design-green-300">
        <Image
          className="w-5/6 md:w-1/4 flex -ml-56 items-end justify-end"
          src={Mushrooms2}
        />
        <div className="absolute w-5/6 md:w-[55%] flex flex-col left-[8%] md:left-[7%] object-contain">
          <div className="flex rounded-3xl md:h-[60%] mt-28 md:mt-12 items-center md:items-start bg-design-green-400/70 p-10 flex-col">
            <div className="text-white font-extrabold text-2xl flex whitespace-nowrap md:text-4xl lg:text-5xl">
              DESIGN VERSE 2024
            </div>
            <div className="text-white font-extrabold text-2xl md:text-4xl mb-3 mt-1 md:mb-6 md:mt-3 lg:text-5xl">
              COMING SOON
            </div>
            <div className="flex flex-row text-white text-sm md:text-3xl font-medium whitespace-normal">
              <IoPin className="mr-0 md:mr-2 text-lg md:text-3xl" /> University
              of California Riverside
            </div>
            <div className="flex flex-row mt-2 text-white text-sm md:text-3xl font-medium whitespace-nowrap">
              <BsCalendar3 className="mr-1 md:mr-2 text-lg md:text-3xl" /> May
              11 - 12, 2024
            </div>

            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 w-full gap-2 md:gap-4">
              <Apply text="Interested" link="/form/interest" />
              <Apply text="Mentor" link="/form/mentor" />
              <Apply text="Volunteer" link="/form/volunteer" />
              <Apply text="Sponsor Us" link="/form/sponsor" />
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <CountDown />
          </div>
        </div>
        <div className="w-11/12 md:w-5/12 flex flex-col h-full justify-center md:justify-end">
          <Image className=" ml-40 w-full" src={Mushrooms1} />
          <Image
            className="hidden md:block absolute w-5/12 -mb-20"
            src={Animals}
          />
        </div>
      </div>

      <Image
        className="bg-design-green-300 w-screen border-0"
        src={Waterline}
      />
      <div className=" h-[28%] flex flex-row w-full bg-design-blue-200 relative">
        <div className="md:w-7/12 flex justify-start absolute">
          <Image
            className="md:w-3/12 -mt-24 ml-10 animate-wiggle3"
            src={OnlyFrog}
          />
        </div>

        <div className="md:w-5/12 flex absolute">
          <Image
            className="hidden md:block w-10/12 ml-80 p-24 -mt-24 animate-wiggle2"
            src={Lillypad}
          />
        </div>
        <div className="md:w-5/12 absolute">
          <Image
            className="hidden md:block w-7/12 ml-60 p-24 -mt-16 animate-wiggle2"
            src={Lotus}
          />
        </div>

        <div className="md:w-5/12 flex-none absolute float-right -right-20">
          <Image
            className="hidden md:block w-10/12 ml-40 p-24 -mt-32 animate-wiggle1"
            src={Lily}
          />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
