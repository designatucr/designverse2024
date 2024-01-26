import left from "../../../public/svgs/tracks/left.svg";
import middle from "../../../public/svgs/tracks/middle.svg";
import right from "../../../public/svgs/tracks/right.svg";
import Image from "next/image";

const Track = () => {
  return (
    <div className="bg-design-green-100 flex justify-between pb-28">
      <div className="flex justify-center items-center flex-col w-full mt-8">
        <div className="text-6xl font-bold text-white">Tracks</div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center text-white text-3xl font-bold mt-5 gap-4">
          <div className="flex flex-col">
            <Image src={left} alt="left" />
            <p className="flex justify-center md:ml-10">Sustainability</p>
          </div>
          <div className="flex flex-col mt-2">
            <Image src={middle} alt="middle" className="mt-4" />
            <p className="flex justify-center md:mr-8 mt-0 ">Sustainability</p>
          </div>
          <div className="flex flex-col">
            <Image src={right} alt="right" />
            <p className="flex justify-center md:mr-12">Sustainability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
