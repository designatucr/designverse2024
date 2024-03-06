import React from "react";
import Resource from "./Resource";
import resource1 from "@/public/svgs/support/figma.webp";
import resource2 from "@/public/svgs/support/dribble.webp";
import resource3 from "@/public/svgs/support/miro.webp";
import Image from "next/image";
import river from "@/public/svgs/river.svg";

const Resources = () => {
  return (
    <div className="flex font-workSans flex-col bg-newdesign-blue-100 relative">
      <Image src={river} alt="river" className=" w-full" />
      <div className="flex flex-col items-center justify-center absolute bottom-0">
        <div className="flex font-bold text-2xl lg:text-5xl text-white lg:mb-8 justify-end items-end">
          RESOURCES
        </div>
        <div className="grid grid-cols-3 justify-center gap-x-1 lg:gap-x-4 w-9/12 text-white">
          <Resource
            title="Figma"
            description="A tool for designing and building prototypes for user interfaces."
            image={resource1}
          />
          <Resource
            title="Dribble"
            description="An online platform for designers to find and share inspirations!"
            image={resource2}
          />
          <Resource
            title="Mico"
            description="A remote collaboration tool to build large scale design projects."
            image={resource3}
          />
        </div>
      </div>
    </div>
  );
};

export default Resources;
