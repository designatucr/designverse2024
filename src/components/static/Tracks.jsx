import left from "../../../public/svgs/tracks/left.svg";
import middle from "../../../public/svgs/tracks/middle.svg";
import right from "../../../public/svgs/tracks/right.svg";
import Image from "next/image";
import top from "../../../public/svgs/tracks/track.svg";
const Track = () => {
  return (
    <div className="bg-design-green-100 flex flex-col justify-between">
      <Image src={top} className="bg-design-blue-200" />
      <div className="flex justify-center items-center flex-col w-full my-8">
        <div className="text-5xl font-bold text-white">TRACKS</div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-11/12  text-white text-2xl font-bold mt-5 ">
          <div className="flex flex-col justify-center items-center h-full ">
            <Image className="w-10/12 " src={left} alt="left" />
            <p className="flex justify-center">Smart and Sustainable</p>
          </div>
          <div className="flex justify-center items-center flex-col  h-full">
            <Image className="w-10/12  " src={middle} alt="middle" />
            <p className="flex justify-center ">
              Shaping the Minds of Tommorrow
            </p>
          </div>
          <div className="flex justify-center items-center flex-col h-full ">
            <Image className="w-10/12  " src={right} alt="right" />
            <p className="flex justify-center">All-Inclusive Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
