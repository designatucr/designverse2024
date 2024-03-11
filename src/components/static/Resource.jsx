import React from "react";
import Image from "next/image";

const Resource = ({ title, description, image }) => {
  return (
    <div
      id="resources"
      className=" flex flex-col items-center justify-center  text-white font-workSans "
    >
      <Image
        src={image}
        className="w-2/5 lg:w-1/2 rounded-full"
        alt="Resource"
      />
      <div className="text-center text-sm md:text-3xl font-bold whitespace-nowrap my-8">
        {title}
      </div>
      <div className="text-center leading-3 text-[10px] lg:text-lg lg:mb-4">
        {description}
      </div>
    </div>
  );
};

export default Resource;
