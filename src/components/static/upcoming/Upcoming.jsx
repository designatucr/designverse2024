import CountDown from "../Countdown";
import Image from "next/image";
import Apply from "../Apply";
import Animals from "../../../../public/svgs/animals.svg";
import Mushrooms1 from "../../../../public/svgs/mushrooms1.svg";
import Mushrooms2 from "../../../../public/svgs/mushrooms2.svg";
import Waterline from "../../../../public/svgs/waterline.svg";
import Frog from "../../../../public/svgs/frog.svg";
import Lily from "../../../../public/svgs/lilly.svg";
import { IoPin } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import Logo from "../../../../public/svgs/Logo1.svg";

const Upcoming = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative font-workSans">
      <div className="flex h-[72%] flex-row overflow-hidden justify-between bg-gradient-to-b from-design-green-100 via-design-green-100 to-design-green-300">
        <Image className="w-5/6 md:w-3/12 -ml-56 mt-52" src={Mushrooms2} />
        <div className="absolute w-5/6 md:w-[55%] flex flex-col left-[8%] md:left-[7%] object-contain">
          <div className="flex rounded-3xl md:h-[60%] mt-28 md:mt-12 items-center md:items-start bg-design-green-400/70 p-10 flex-col">
            <div className="text-design-green-100 font-extrabold text-2xl md:text-4xl mb-3">
              <Image className="h-12 md:h-16 w-auto" src={Logo} />
            </div>
            <div className="text-design-white font-extrabold text-2xl flex whitespace-nowrap md:text-4xl lg:text-5xl">
              DESIGN VERSE 2024
            </div>
            <div className="text-design-white font-extrabold text-2xl md:text-4xl mb-3 mt-1 md:mb-6 md:mt-3 lg:text-5xl">
              COMING SOON
            </div>
            <div className="flex flex-row text-design-white text-sm md:text-3xl font-medium whitespace-normal">
              <IoPin className="mr-0 md:mr-2 text-lg md:text-3xl" /> University
              of California Riverside
            </div>
            <div className="flex flex-row mt-2 text-design-white text-sm md:text-3xl font-medium whitespace-nowrap">
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
        <div className="w-11/12 md:w-5/12 flex flex-col h-full">
          <div className="flex flex-row md:w-full justify-end">
            <Image
              className="hidden md:block mr-4 mt-2 h-12 w-auto"
              src={Logo}
            />
          </div>
          <Image className="ml-40 mt-48 md:mt-0 md:w-11/12" src={Mushrooms1} />
          <Image className="hidden md:block absolute mt-96" src={Animals} />
        </div>
      </div>

      <Image
        className="bg-design-green-300 w-screen border-0"
        src={Waterline}
      />
      <div className="bg-design-blue-200 h-[28%] flex flex-row w-full">
        <Image
          className="w-11/12 md:w-5/12 -mt-20 md:-mt-40 animate-wiggle delay-1000"
          src={Frog}
        />
        <Image
          className="hidden md:block md:w-7/12 p-24 ml-96 -mr-64 -mt-32 animate-wiggle"
          src={Lily}
        />
      </div>
    </div>
  );
};

export default Upcoming;
