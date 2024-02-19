import React from "react";
import Image from "next/image";

const Resource = ({ title, description, image }) => {
  return (
    <div className=" flex flex-col items-center justify-center justify-self-center text-white font-workSans ">
      <Image src={image} />
      <div className="text-center text-design-brown-400 text-md md:text-3xl font-bold whitespace-nowrap my-3">
        {title}
      </div>
      <div className="text-center text-design-brown-400 text-xs lg:text-lg mb-4">
        {description}
      </div>
    </div>
  );
};

export default Resource;
