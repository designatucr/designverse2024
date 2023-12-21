import React from "react";
import Image from "next/image";
import Logo from "../../../public/svgs/BigLogo.svg";

const Error = ({ code, error, message }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed bg-design-green-100">
      <Image className="flex w-3/6 md:w-3/12 2xl:w-2/12" src={Logo} />

      <p className="text-center text-6xl font-extrabold text-hackathon-blue-100 m-0">
        {code}
      </p>
      <p className="text-center text-lg md:text-2xl font-bold text-black m-0">
        {error}
      </p>
      <p className="text-center text-sm md:text-lg  text-hackathon-blue-200 m-0">
        {message}
      </p>
    </div>
  );
};

export default Error;
