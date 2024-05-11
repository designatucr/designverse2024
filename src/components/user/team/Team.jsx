import Details from "./Details";
import kids from "@/public/svgs/schedule/temp.svg";
import Image from "next/image";
const Team = () => {
  return (
    <div className="h-full flex flex-col py-4 gap-3 justify-start items-center">
      <div className="text-4xl font-extrabold">🍄 Team 🍄</div>
      <div className="w-full md:w-1/2">
        <Details />
      </div>
      <Image className="" src={kids} />
    </div>
  );
};

export default Team;
