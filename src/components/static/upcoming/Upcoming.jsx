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
import BearTurtle from "../../../../public/svgs/bearTurtle.svg";
import { IoPin } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";

const Upcoming = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="flex h-[72%] flex-row overflow-hidden justify-between bg-gradient-to-b from-design-green-100 via-design-green-100 to-design-green-400">
        <Image className="w-5/6 md:w-3/12 -ml-56 mt-52" src={Mushrooms2} />
        <div className="absolute w-5/6 md:w-[55%] flex flex-col left-[8%] md:left-[7%] object-contain">
          <div className="flex rounded-3xl md:h-[60%] mt-8 items-center md:items-start bg-design-green-500/70 p-10 flex-col">
            <p className="text-design-green-100 font-extrabold text-2xl md:text-4xl">
              Design<span className="text-design-orange">@</span>UCR
            </p>
            <div className="text-design-white font-extrabold text-2xl md:text-6xl">
              DESIGN VERSE 2024
            </div>
            <p className="text-design-white font-extrabold text-2xl md:text-6xl md:mt-3">
              {" "}
              COMING SOON
            </p>
            <div className="flex flex-row text-design-white text-sm md:text-3xl font-medium">
              <IoPin className="mr-1 md:mr-2" /> University of California
              Riverside
            </div>
            <div className="flex flex-row mt-2 text-design-white text-sm md:text-3xl font-medium">
              <BsCalendar3 className="mr-1 md:mr-2" /> May 11 - 12, 2024
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 w-full gap-2 md:gap-4">
              <Apply text="Interested" link="/form/interest" />
              <Apply text="Mentor" link="/form/mentor" />
              <Apply text="Volunteer" link="/form/volunteer" />
              <Apply text="Sponsor Us" link="/form/" />
            </div>
          </div>
          <CountDown />
          <div className="flex items-center justify-center">
            <Image className="md:hidden flex w-7/12" src={BearTurtle} />
          </div>
        </div>
        <div className="w-11/12 md:w-5/12 flex flex-col h-full">
          <div className="flex flex-row md:w-full justify-end">
            <Image className="hidden md:block mr-4 mt-2" src={Logo} />
          </div>
          <Image className="ml-40 mt-48 md:mt-0 md:w-11/12" src={Mushrooms1} />
          <Image className="hidden md:block absolute mt-96" src={Animals} />
        </div>
      </div>

      <Image
        className="bg-design-green-400 w-screen border-0"
        src={Waterline}
      />
      <div className="bg-design-blue h-[28%] flex flex-row w-full">
        <Image className="w-11/12 md:w-5/12 -mt-40" src={Frog} />
        <Image
          className="hidden md:block md:w-7/12 p-24 ml-96 -mr-64 -mt-32"
          src={Lily}
        />
      </div>
    </div>
  );
};

export default Upcoming;
