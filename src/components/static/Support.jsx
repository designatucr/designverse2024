import React from "react";
import Link from "./Link";

const Support = ({ title, description, form }) => {
  return (
    <div className="grid grid-rows-4 h-full w-full gap-4 ">
      <div className=" justify-center font-bold text-xl lg:text-3xl text-design-brown-500 whitespace-nowrap grid row-span-1">
        {title}
      </div>
      <div className="lg:text-lg md:text-sm text-center text-design-brown-500 grid row-span-2">
        {description}
      </div>
      <div className=" items-end justify-center grid row-span-1">
        <Link text={form} link={`/form/${form}`} />
      </div>
    </div>
  );
};

export default Support;
