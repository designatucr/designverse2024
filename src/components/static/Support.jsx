import React from "react";
import Link from "./Link";

const Support = ({ title, description, form, formLink }) => {
  return (
    <div className="grid lg:grid-rows-4 lg:w-full gap-4">
      <div className=" justify-center font-bold text-sm lg:text-3xl text-white whitespace-nowrap grid row-span-1">
        {title}
      </div>
      <div className="grid text-[10px] leading-3 lg:text-base md:text-sm text-center text-white row-span-2 lg:mb-0 mb-1">
        {description}
      </div>
      <div className=" mt-2 lg:mt-0 items-end justify-center grid row-span-1">
        <Link text={form} link={`/form/${formLink}`} />
      </div>
    </div>
  );
};

export default Support;
