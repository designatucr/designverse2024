"use client";
import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top" className="w-full ">
      <Navbar.Brand className="p-2">
        <Link lassName="p-0 no-underline flex items-center gap-2" href="/">
          <FaBars className="text-design-green-200 bg-design-green-300 rounded-2xl text-4xl" />
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
