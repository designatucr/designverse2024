"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
const Navigation = () => {
  return (
    <div className="">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="font-medium rounded-xl text-sm px-2 py-1.5  bg-design-green-300 text-center inline-flex items-center"
        type="button"
      >
        <FaBars className="text-design-green-200 text-4xl" />
      </button>
      <div id="dropdown" className="bg-design-green-200 rounded-lg shadow w-14">
        <div
          className="py-2 text-sm flex flex-col gap-3"
          aria-labelledby="dropdownDefaultButton"
        >
          <Link href="#"> Tracks</Link>
          <Link href="#"> About </Link>
          <Link href="#"> FAQ</Link>
        </div>
      </div>
    </div>
    // <div>
    /* <Navbar collapseOnSelect expand="md" fixed="top" className="w-full ">
      <Navbar.Brand className="p-2">
        <Link lassName="p-0 no-underline flex items-center gap-2" href="/">
          <FaBars className="text-design-green-200 bg-design-green-300 rounded-2xl text-4xl" />
        </Link>
      </Navbar.Brand>
    </Navbar> */
    // </div>
  );
};

export default Navigation;
