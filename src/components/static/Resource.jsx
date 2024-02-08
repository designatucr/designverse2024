import React from "react";

const Resource = ({ title, description, image }) => {
  return (
    <div
      id="resource"
      className="justify-center items-center flex flex-col w-full relative"
    >
      <div className="flex  font-bold text-3xl lg:text-5xl text-white mb-8">
        RESOURCES
      </div>
    </div>
  );
};

export default Resource;
