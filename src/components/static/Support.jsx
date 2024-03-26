import React from "react";
import Link from "./Link";

const Support = ({ icon, title, description, form, formLink }) => {
  return (
    <div className="grid lg:grid-rows-4 lg:w-full gap-4">
      <div className=" justify-center font-bold text-3xl lg:text-5xl text-white whitespace-nowrap grid row-span-1">
        {icon}
      </div>
      <div className="  justify-center font-bold text-xl lg:text-3xl text-white whitespace-nowrap grid row-span-1">
        {title}
      </div>
      <div className="grid text-sm lg:text-base text-center text-white row-span-2 lg:mb-0 mb-1">
        {description}
      </div>
      <div className=" mt-2 lg:mt-0 items-end justify-center grid row-span-1">
        <Link text={form} link={`/form/${formLink}`} />
      </div>
    </div>
  );
};

export default Support;
