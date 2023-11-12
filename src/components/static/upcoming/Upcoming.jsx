"use client";
import CountDown from "../Countdown";
import Image from "next/image";
import Apply from "../Apply";
import Animals from "../../../../public/svgs/animals.svg";
import Mushrooms1 from "../../../../public/svgs/mushrooms1.svg";
import Mushrooms2 from "../../../../public/svgs/mushrooms2.svg";
import Waterline from "../../../../public/svgs/waterline.svg";
import Frog from "../../../../public/svgs/frog.svg";
import Lily from "../../../../public/svgs/lilly.svg";
import Logo from "../../../../public/svgs/logo.svg";
import { IoPin } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";

const Upcoming = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="flex h-[72%] flex-row overflow-hidden justify-between bg-gradient-to-b from-design-green-100 via-design-green-100 to-design-green-400">
        <Image className="md:w-3/12 -ml-56 mt-52" src={Mushrooms2} />
        <div className="absolute w-[55%] flex flex-col left-[7.5%]">
          <div className="flex rounded-3xl h-[60%] mt-8 md:justify-start bg-design-green-500/70 p-10 flex-col">
            <p className="text-design-green-100 font-extrabold text-4xl">
              Design<span className="text-design-orange">@</span>UCR
            </p>
            <div className="text-design-white font-extrabold text-6xl mb-3">
              DESIGN VERSE 2024
              <div className="mt-3" /> COMING SOON
            </div>

            <div className="flex flex-row items-center text-design-white text-3xl font-medium gap-3">
              <IoPin /> University of California Riverside
            </div>
            <div className="flex flex-row items-center mt-2 text-design-white text-3xl font-medium gap-3">
              <BsCalendar3 /> May 11 - 12, 2024
            </div>

            <div className="mt-8 flex flex-row w-full 2xl:w-2/3 justify-center md:justify-start md:gap-4 gap-8">
              <Apply text="Interested" link="/form/interest" />
              <Apply text="Mentor" link="/form/mentor" />
              <Apply text="Volunteer" link="/form/volunteer" />
              <Apply text="Sponsor Us" link="/form/" />
            </div>
          </div>
          <CountDown />
        </div>
        <div className="md:w-5/12 flex flex-col h-full">
          <div className="flex flex-row w-full justify-end">
            <Image className="mr-4 mt-2" src={Logo} />
          </div>
          <Image className="ml-40 md:w-11/12" src={Mushrooms1} />
          <Image className="absolute mt-96" src={Animals} />
        </div>
      </div>
      <Image
        className="bg-design-green-400 w-screen border-0"
        src={Waterline}
      />
      <div className="bg-design-blue h-[28%] flex flex-row w-full">
        <Image className="w-5/12 -mt-40" src={Frog} />
        <Image className="w-7/12 p-24 ml-96 -mr-64 -mt-32" src={Lily} />
      </div>
    </div>
  );
};

export default Upcoming;
