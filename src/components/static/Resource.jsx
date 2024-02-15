import React from "react";
import Image from "next/image";

const Resource = ({ title, description, image }) => {
  return (
    <div className=" flex flex-col items-center justify-center justify-self-center text-white font-workSans self-start basis-[20%] p-4">
      <div className="w-11/12 relative  mb-3  ">
        <Image src={image} />
      </div>
      <div className="text-center text-design-brown-400 text-md md:text-xl font-semibold whitespace-nowrap mb-3">
        {title}
      </div>
      <div className="text-center text-design-brown-400 text-xs lg:text-base mb-4">
        {description}
      </div>
    </div>
  );
};

export default Resource;
