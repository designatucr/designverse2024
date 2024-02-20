import React from "react";
import Image from "next/image";
import top from "@/public/svgs/sponsorTop.svg";
import bottom from "../../../public/svgs/tracks/track.svg";
import { SPONSORS } from "@/data/static/Sponsors";
import Waves from "@/public/svgs/wave2.svg";
import Lilly1 from "@/public/svgs/sponsors/lillypad1.svg";
import Lilly2 from "@/public/svgs/sponsors/lillypad2.svg";
const Sponsors = () => {
  return (
    <div className="bg-[#4AB9A4] flex flex-col justify-between mb-20 relative">
      <Image src={top} className="bg-design-green-100" alt="top" />
      <div className="flex justify-center items-center flex-col w-full">
        <div className="text-3xl md:text-5xl font-bold text-white mt-8">
          SPONSORSHIPS
        </div>
      </div>
      <div className="absolute left-0 w-full h-full z-0 ">
        <Image src={Waves} alt="Waves" className="w-full h-full object-cover" />
      </div>
      <div className="absolute hidden md:block left-0 z-0 top-0">
        <Image
          src={Lilly1}
          alt="Waves"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute hidden md:block right-0 z-0 bottom-32">
        <Image
          src={Lilly2}
          alt="Waves"
          className="w-full h-full object-cover"
        />
      </div>
      {/* <div className="relative flex overflow-hidden">
      <div className="flex animate-marquee">
        {SPONSORS.map((image, index) => (
          <div key={index} className="flex-grow items-stretch w-2/4 mx-4">
            <Image
              src={image}
              alt="carousel"
              className="object-cover min-w-80 h-full"
            />
          </div>
        ))}
      </div>
      <div className="flex absolute animate-marquee-continuation">
        {SPONSORS.map((image, index) => (
          <div key={index} className="flex-grow items-stretch w-2/4 mx-4">
            <Image
              src={image}
              alt="carousel"
              className="object-cover min-w-80 h-full"
            />
          </div>
        ))}
      </div>
    </div> */}
      <div className="my-10">
        {SPONSORS.map((row, rowIndex) => (
          <div key={rowIndex} className="relative flex overflow-hidden my-2">
            <div
              className={`flex ${
                rowIndex === 1 ? "animate-reverse-marquee" : "animate-marquee"
              }`}
            >
              {row.map((image, index) => (
                <div key={index} className="flex-grow items-stretch lg:mx-4">
                  <Image src={image} alt="carousel" className="w-10/12" />
                </div>
              ))}
            </div>
            <div
              className={`flex absolute ${
                rowIndex === 1
                  ? "animate-reverse-marquee-continuation"
                  : "animate-marquee-continuation"
              }`}
            >
              {row.map((image, index) => (
                <div key={index} className="flex-grow items-stretch lg:mx-4">
                  <Image src={image} alt="carousel" className="w-10/12" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Image src={bottom} className="bg-design-blue-200" />
    </div>
  );
};

export default Sponsors;
