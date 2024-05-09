import { IoPin } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import Logo from "@/public/svgs/logos/BigLogo.svg";
import CountDown from "./Countdown";
import Apply from "./Apply";
import Animals from "@/public/svgs/landing/animals.svg";
import Mushrooms2 from "@/public/svgs/landing/mushrooms2.svg";
import Waterline from "@/public/svgs/landing/waterline.svg";
import Image from "next/image";
import OnlyFrog from "@/public/svgs/landing/onlyFrog.svg";
// import Lillypad from "@/public/svgs/landing/lillypad.svg";
import Lotus from "@/public/svgs/landing/lotus.svg";
import LillypadwithLotus from "@/public/svgs/landing/lotuswithpad.svg";

const Landing = () => {
  return (
    <>
      <section
        id="home"
        className="flex h-[50%] md:h-[68%] justify-between relative"
        style={{
          background:
            "linear-gradient(to bottom, #78bfce 0%, #b2d8e3 17%, #e9f2f5 40.85%, #bce0eb 45.27%, #336c18 80.14%, #2a4c19 95%)",
        }}
      >
        <div className="absolute w-full flex flex-col justify-start items-center md:justify-start md:items-center mt-14">
          <Image
            className="absolute flex w-6/12 sm:w-3/12 md:w-3/12 lg:w-3/12 2xl:w-2/12 z-20"
            src={Logo}
            alt="Logo"
          />
          <div className="flex w-5/6 md:w-3/5 rounded-3xl items-center md:items-center bg-newdesign-blue-300/70 mt-16 md:mt-24 2xl:mt-32 flex-col z-10">
            <div className="flex text-white text-base md:text-2xl font-medium whitespace-normal mt-8 sm:mt-16 md:mt-20 ">
              <IoPin className="mr-0 md:mr-2 text-lg md:text-2xl" /> University
              of California Riverside
            </div>
            <div className="flex mt-2 text-white text-base md:text-2xl font-medium whitespace-nowrap">
              <BsCalendar3 className="mr-1 md:mr-2 md:mt-1 text-lg md:text-xl" />
              May 11 - 12, 2024
            </div>
            <div className="flex justify-center md:justify-start m-8">
              <CountDown />
            </div>
          </div>
          <div className="mt-4 md:mt-8 flex justify-center items-center w-4/12 lg:w-2/12 z-20">
            <Apply text="Apply Now" link="/form/participant" />
          </div>
          {/* Change Buttons the morning of */}
          {/* <div className="mt-4 md:mt-8 flex justify-center items-center w-4/12 lg:w-2/12 z-20">
          <Apply text="Participant Portal" link="/user" />
          </div> */}
        </div>
        <Image
          className="left-0 hidden absolute md:block w-7/12 md:w-[25%] 2xl:w-1/4 md:z-20 top-1/2 -translate-y-1/3 z-10"
          src={Mushrooms2}
          alt="Mushrooms2"
        />
        <Image
          className="hidden absolute md:block w-[26%] 2xl:w-3/12 right-0 top-1/2 -translate-y-1/3 z-10"
          src={Animals}
          alt="Animals"
        />
      </section>
      <Image
        className="bg-newdesign-green-200 w-screen border-0 -mb-1"
        src={Waterline}
        alt="Waterline"
      />
      <div className="h-[20%] flex w-full bg-newdesign-cyan-100 relative">
        <Image
          className="w-4/12 md:w-1/6 2xl:w-2/12 justify-start absolute animate-wiggle3"
          src={OnlyFrog}
          alt="OnlyFrog"
        />
        {/* <Image
          className="hidden md:block w-6/12 md:w-3/12 xl:w-2/12 absolute bottom-12 2xl:bottom-20 right-1/2 animate-wiggle2"
          src={Lillypad}
          alt="Lillypad"
        /> */}
        <Image
          className="hidden md:block w-2/12 absolute bottom-0 2xl:bottom-28 right-1/2 animate-wiggle2"
          src={Lotus}
          alt="Lotus"
        />
        <Image
          className="md:w-1/12 2xl:w-1/12 absolute top-0 -right-2 hidden md:block w-full animate-wiggle2"
          src={LillypadwithLotus}
          alt="LillypadwithLotus"
        />
      </div>
    </>
  );
};

export default Landing;
