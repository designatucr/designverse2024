import React from "react";
import Image from "next/image";
import { SPONSORS } from "@/data/static/Sponsors";

const Sponsors = () => {
  return (
    <div
      id="sponsor"
      className="bg-gradient-to-b from-newdesign-blue-200 to-newdesign-blue-100 flex flex-col justify-between relative items-center justify-center"
    >
      <div className="text-3xl lg:text-5xl font-bold text-newdesign-cyan-200 lg:mb-10">
        SPONSORS
      </div>
      {Array(3)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-12 w-full"
          >
            {Array(index + 1)
              .fill()
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-newdesign-cyan-200 w-[10%] aspect-square rounded-full flex items-center justify-center"
                >
                  <Image
                    src={SPONSORS[Math.floor(((index + 1) / 2) * index) + idx]}
                    alt="carousel"
                    className="w-full"
                  />
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Sponsors;
