import React from "react";
import { BOARD } from "@/data/static/Board";
import Profile from "./Profile";
import Image from "next/image";
import leadVine1 from "../../../public/svgs/team/leadVine1.svg";
import leadVine2 from "../../../public/svgs/team/leadVine2.svg";
import leadMushroom from "../../../public/svgs/team/leadMushroom.svg";
import leadLeafR from "../../../public/svgs/team/leadLeafR.svg";
import leadLeafL from "../../../public/svgs/team/leadLeafL.svg";
import leadBear from "../../../public/svgs/team/leadBear.svg";

function Leads() {
  return (
    <section id="team" className="bg-design-green-100 relative">
      <div className="h-1/6 bg-design-green-100 md:h-2/6 flex flex-col items-center w-10/12 mx-auto">
        <div className="text-white flex-col font-workSans flex w-full h-2/6">
          <p className="text-center justify-center md:justify-start md:items-start font-bold text-3xl md:text-5xl lg:text-5xl mb-0">
            MEET THE TEAM
          </p>
          <br />
          <div className="space-x-4 text-center text-design-brown-400 font-bold text-2xl lg:text-4xl">
            <Image
              src={leadVine1}
              className="inline w-4/12 md:w-4/12 lg:w-4/12"
              alt="leadVine1"
            />
            <p className="inline">Leads</p>
            <Image
              src={leadVine2}
              className="inline w-4/12 md:w-4/12 lg:w-4/12"
              alt="leadVine2"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          {BOARD[0].map((item, index) => (
            <Profile
              key={index}
              image={item.pic}
              name={item.name}
              position={item.position}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {BOARD[1].map((item, index) => (
            <Profile
              key={index}
              image={item.pic}
              name={item.name}
              position={item.position}
            />
          ))}
        </div>
      </div>

      {/* Absolute images and pics */}
      <Image
        src={leadMushroom}
        className="absolute hidden md:block left-0 top-[15%] w-2/12"
        alt="leadMushroom"
      />
      <Image
        src={leadLeafR}
        className="absolute hidden md:block right-0 top-[20%] w-1/12"
        alt="leadLeafR"
      />
      <Image
        src={leadLeafL}
        className="absolute hidden md:block left-0 bottom-0 w-1/12"
        alt="leadLeafL"
      />
      <Image
        src={leadBear}
        className="absolute hidden md:block right-0 bottom-0 w-4/12 md:w-2/12"
        alt="leadBear"
      />
    </section>
  );
}

export default Leads;
