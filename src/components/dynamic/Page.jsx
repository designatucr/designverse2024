"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Page = ({ children }) => {
  const color = RegExp(/\/form\//).test(usePathname())
    ? "bg-newdesign-blue-50"
    : "bg-[#78bfce]";

  return (
    <body className={`flex flex-col ${color} lg:flex-row h-full w-full`}>
      {children}
    </body>
  );
};

export default Page;
