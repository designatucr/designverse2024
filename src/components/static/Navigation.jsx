"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { items } from "@/data/static/Nav.js";
import { FaChevronLeft } from "react-icons/fa";

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeNavbar = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="w-full">
      <div className="fixed group z-50">
        <button
          onClick={toggleDropdown}
          className={`m-3 ${
            isDropdownOpen
              ? "opacity-0 duration-300"
              : "opacity-100 bg-design-green-200 duration-300"
          }bg-design-green-200 rounded-xl w-1/4 pl-4 py-2.5 drop-shadow-xl`}
        >
          <FaBars className="text-white text-lg drop-shadow-md" />
        </button>
        <div
          className={`${
            isDropdownOpen
              ? "transition-all duration-300 ease-out transform translate-y-0 opacity-100"
              : "transition-all duration-300 ease-in  transform -translate-x-96 opacity-0"
          } bg-design-green-200 p-2 ml-0 -mt-10 grid grid-col rounded-xl drop-shadow-lg `}
        >
          <button onClick={closeNavbar}>
            <FaChevronLeft className=" text-white text-xl my-1 ml-1" />
          </button>

          {items.map((item, index) => (
            <Link
              key={index}
              onClick={() => console.log(`Clicked on ${item.name}`)}
              href={item.link}
              className="flex px-2 py-1.5 text-white text-lg flex-cols gap-3 justify-start items-center no-underline hover:cursor-pointer hover:bg-design-green-300 duration-500"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
