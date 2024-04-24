import React from "react";
import Image from "next/image";
import { SPONSORS } from "@/data/static/Sponsors";
import bear from "@/public/svgs/sponsors/bear.svg";
import chicken from "@/public/svgs/sponsors/chicken.svg";
import cloud from "@/public/svgs/sponsors/cloud.svg";
import Link from "next/link";
const Sponsors = () => {
  return (
    <div
      id="sponsor"
      className="bg-gradient-to-b from-newdesign-blue-200 to-newdesign-blue-100 flex flex-col relative items-center justify-center"
    >
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
      <Image
        src={bear}
        className="w-1/6 absolute  left-2/3 bottom-2/3 lg:bottom-1/2"
        alt="bear"
      />
      <Image
        src={chicken}
        className="w-1/6 absolute right-2/3 bottom-2/3 lg:bottom-1/2"
        alt="chicken"
      />
      <div className="text-3xl lg:text-5xl font-bold text-newdesign-cyan-200 mb-10">
        SPONSORS
      </div>
      {Array(3)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center space-x-4 lg:space-x-24 w-full mb-12"
          >
            {Array(index === 2 ? 4 : index + 1)
              .fill()
              .map((_, idx) => (
                <Link
                  key={idx}
                  href={SPONSORS[index].link}
                  className="bg-newdesign-cyan-200 w-[25%] lg:w-[10%] aspect-square rounded-full flex items-center justify-center p-3 hover:cursor-pointer hover:scale-105"
                >
                  <Image
                    src={
                      SPONSORS[Math.floor(((index + 1) / 2) * index) + idx].pic
                    }
                    alt="carousel"
                    className="w-full"
                  />
                </Link>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Sponsors;
