"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
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
      <Navbar.Toggle
        className="list-unstyled !text-transparent border-1 mr-0"
        aria-controls="basic-navbar-nav"
      ></Navbar.Toggle>
      <Navbar.Collapse className="items-center justify-end">
        <Nav className="mb-2 w-2/7 no-underline text-2xl flex items-center"></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
