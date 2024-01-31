"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
// import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
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
    <div className="w-full ml-3 py-2">
      <div className="fixed group z-20">
        <button
          onClick={toggleDropdown}
          className="bg-design-green-300 rounded-xl w-1/4 pl-4 py-2.5 drop-shadow-xl"
        >
          <FaBars className="text-white text-lg drop-shadow-md" />
        </button>
        <div
          className={`${
            isDropdownOpen
              ? "transition-all duration-300 ease-out transform translate-y-0 opacity-100"
              : "transition-all duration-300 ease-in transform -translate-x-96 opacity-100"
          } bg-design-green-300 p-2 ml-3 mt-2 grid grid-col rounded-xl drop-shadow-lg `}
        >
          <button onClick={closeNavbar}>
            <FaChevronLeft className="flex text-white text-xl items-center justify-start my-1 ml-1" />
          </button>

          {items.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.link}
              href={item.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex px-2 py-1.5 text-white text-lg flex-cols gap-3 justify-start items-center no-underline"
            >
              {item.icon}
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
