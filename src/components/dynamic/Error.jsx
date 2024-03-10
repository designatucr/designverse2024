import React from "react";
import LillypadwithLotus from "../../../public/svgs/landing/lotuswithpad.svg";
import Image from "next/image";
const Error = ({ code, error, message, dev }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed bg-design-green-100">
      <div className="flex flex-row">
        <Image className="hidden md:block" src={LillypadwithLotus} />
        <div className="text-center text-8xl font-extrabold text-hackathon-blue-100 m-0">
          {code}
        </div>
        <Image className="hidden md:block" src={LillypadwithLotus} />
      </div>
      <p className="text-center text-lg md:text-2xl font-bold text-black m-0">
        {error}
      </p>
      <p className="text-center text-sm md:text-lg  text-hackathon-blue-200 m-0">
        {message}
      </p>
      {/* <p className="text-center text-sm md:text-lg text-hackathon-blue-200 m-0">
        Developer Notes: {dev}
      </p> */}
    </div>
  );
};

export default Error;
