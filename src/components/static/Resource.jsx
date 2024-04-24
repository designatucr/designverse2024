import React from "react";
import Image from "next/image";
import Link from "next/link";
const Resource = ({ link, title, description, image }) => {
  return (
    <div className=" flex flex-col  items-center justify-center  text-white font-workSans ">
      <Link
        href={link}
        className="w-2/5 lg:w-1/2 hover:cursor-pointer hover:scale-105"
      >
        <Image src={image} className=" rounded-full " alt="Resource" />
      </Link>

      <div className="text-center text-xl md:text-3xl font-bold whitespace-nowrap my-6">
        {title}
      </div>
      <div className="text-center text-base lg:text-lg lg:mb-4">
        {description}
      </div>
    </div>
  );
};

export default Resource;
