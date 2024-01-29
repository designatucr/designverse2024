import React from "react";

function Leads() {
  return (
    <div className="h-4/6 bg-design-green-100 md:h-5/6 relative flex w-full md:pt-20 justify-center">
      <div className="bg-red-500 text-white flex-col font-workSans flex md:w-6/12 w-10/12 h-2/6">
        {/* <div className=" "> */}
        <p className="text-center justify-center md:justify-start md:items-start font-bold text-3xl lg:text-6xl">
          MEET THE TEAM
        </p>
        <br />
        <p className="text-center text-design-brown-400 font-bold text-3xl lg:text-4xl">
          Leads
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Leads;
