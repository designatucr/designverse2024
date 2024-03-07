import React from "react";
import { BOARD } from "@/data/static/Board";
import Profile from "./Profile";
import Image from "next/image";
import leadVine1 from "../../../public/svgs/team/leadVine1.svg";
import leadVine2 from "../../../public/svgs/team/leadVine2.svg";
import leadLeafR from "../../../public/svgs/team/leadLeafR.svg";
import leadLeafL from "../../../public/svgs/team/leadLeafL.svg";
import cloud from "../../../public/svgs/sponsors/cloud.svg";

function Leads() {
  return (
    <section id="team" className="bg-newdesign-blue-100 relative pt-24">
      <Image
        src={cloud}
        className="w-1/6 absolute left-0 -translate-x-1/2 bottom-2/3"
        alt="cloud"
      />
      <Image
        src={cloud}
        className="w-1/6 absolute right-0 translate-x-1/2 bottom-2/3"
        alt="cloud"
      />
      <div className="h-1/6 bg-newdesign-blue-100 md:h-2/6 flex flex-col items-center w-10/12 mx-auto">
        <div className=" text-newdesign-cyan-200 flex-col font-workSans flex w-full h-2/6">
          <p className="text-center justify-center md:justify-start md:items-start font-bold text-3xl md:text-5xl lg:text-5xl mb-0">
            MEET THE TEAM
          </p>
          <br />
          <div className="space-x-4 text-center text-newdesign-cyan-200 font-bold text-2xl lg:text-4xl">
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

        <div className="flex flex-wrap items-center justify-center w-full">
          {BOARD[0].map((item, index) => (
            <Profile
              key={index}
              image={item.pic}
              name={item.name}
              position={item.position}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center w-full">
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
        src={leadLeafR}
        className="absolute hidden md:block right-0 bottom-0 w-1/12"
        alt="leadLeafR"
      />
      <Image
        src={leadLeafL}
        className="absolute hidden md:block left-0 bottom-0 w-1/12"
        alt="leadLeafL"
      />
    </section>
  );
}

export default Leads;
