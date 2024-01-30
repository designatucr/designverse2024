import CountDown from "../Countdown";
import Image from "next/image";
import Apply from "../Apply";
import Animals from "../../../../public/svgs/landing/animals.svg";
import Mushrooms2 from "../../../../public/svgs/landing/mushrooms2.svg";
import Waterline from "../../../../public/svgs/landing/waterline.svg";
import OnlyFrog from "../../../../public/svgs/landing/onlyFrog.svg";
import Lillypad from "../../../../public/svgs/landing/lillypad.svg";
import Lotus from "../../../../public/svgs/landing/lotus.svg";
import LillypadwithLotus from "../../../../public/svgs/landing/lotuswithpad.svg";
import { IoPin } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import Logo from "../../../../public/svgs/logos/BigLogo.svg";
import Footer from "../Footer";
import About from "../About";
import Leads from "../Leads";
import FAQ from "../FAQ";
import Tracks from "../Tracks";

const Upcoming = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden relative font-workSans">
      <div className="flex h-[68%] justify-between bg-gradient-to-b from-design-green-100 via-design-green-100 to-design-green-300">
        <div className="flex md:-mb-12 -mb-8 items-end md:items-end">
          <Image
            className="flex absolute w-7/12 -ml-24 md:-ml-8 md:w-[28%] 2xl:w-1/4 md:z-20"
            src={Mushrooms2}
          />
        </div>
        <div className="absolute w-full flex flex-col justify-start items-center md:justify-start md:items-center mt-14">
          <Image
            className="absolute flex w-6/12 sm:w-3/12 md:w-3/12 lg:w-3/12 2xl:w-2/12 z-20"
            src={Logo}
          />
          <div className="flex w-5/6 md:w-3/5 rounded-3xl items-center md:items-center bg-design-green-400/70 mt-16 md:mt-24 2xl:mt-32 flex-col z-10">
            <div className="flex text-white text-base md:text-2xl font-medium whitespace-normal mt-8 sm:mt-16 md:mt-20 ">
              <IoPin className="mr-0 md:mr-2 text-lg md:text-2xl" /> University
              of California Riverside
            </div>
            <div className="flex mt-2 text-white text-base md:text-2xl font-medium whitespace-nowrap">
              <BsCalendar3 className="mr-1 md:mr-2 md:mt-1 text-lg md:text-xl" />{" "}
              May 11 - 12, 2024
            </div>

            <div className="flex justify-center md:justify-start m-8">
              <CountDown />
            </div>
          </div>
          <div className="mt-4 md:mt-8 grid grid-cols-2 lg:grid-cols-4 w-6/12 gap-2 md:gap-3 z-20">
            <Apply text="Interested" link="/form/interest" />
            <Apply text="Mentor" link="/form/mentor" />
            <Apply text="Volunteer" link="/form/volunteer" />
            <Apply text="Sponsor Us" link="/form/sponsor" />
          </div>
        </div>
        <div className="flex flex-col justify-end md:justify-right items-end md:items-right z-20 md:-mr-8">
          <Image
            className="hidden absolute md:block w-[27%] 2xl:w-3/12"
            src={Animals}
          />
        </div>
      </div>
      <Image className="bg-design-green-300 w-full border-0" src={Waterline} />
      <div className=" h-[32%] flex w-full bg-design-blue-200 relative">
        <div className="w-4/12 md:w-1/6 2xl:w-2/12 justify-start absolute">
          <Image
            className="md:w-full -mt-2 md:-mt-10 md:ml-0 ml-16 2xl:-mt-32 animate-wiggle3"
            src={OnlyFrog}
          />
        </div>
        <div className="w-11/12 md:w-4/12 2xl:w-3/12 absolute bottom-2 2xl:bottom-20">
          <Image
            className="w-full ml-40 md:ml-80 2xl:ml-96 p-24 animate-wiggle2"
            src={Lillypad}
          />
        </div>
        <div className="md:w-1/4 2xl:w-2/12 absolute -bottom-2 2xl:bottom-4">
          <Image
            className="hidden md:block w-full ml-60 2xl:ml-96 p-24 animate-wiggle2"
            src={Lotus}
          />
        </div>

        {/* <div className="md:w-3/12 absolute -bottom-5 -right-2">
          <Image
            className="hidden md:block w-full p-24 animate-wiggle2"
            src={Lotus}
          />
        </div> */}
        <div className="md:w-3/12 2xl:w-2/12 absolute bottom-24 -right-2">
          <Image
            className="hidden md:block w-full p-24 ml-32 animate-wiggle2"
            src={LillypadwithLotus}
          />
        </div>
      </div>

      <About />
      <Tracks />
      <FAQ />
      <Leads />
      <Footer />
    </div>
  );
};

export default Upcoming;
