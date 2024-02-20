import React from "react";
import Image from "next/image";

const Resource = ({ title, description, image }) => {
  return (
    <div
      id="resource"
      className=" flex flex-col items-center justify-center  text-white font-workSans "
    >
      <Image src={image} className="w-2/5 lg:w-1/2" />
      <div className="text-center text-design-brown-400 text-sm md:text-3xl font-bold whitespace-nowrap lg:my-3">
        {title}
      </div>
      <div className="text-center text-design-brown-400 leading-3 text-[10px] lg:text-lg lg:mb-4">
        {description}
      </div>
    </div>
  );
};

export default Resource;
