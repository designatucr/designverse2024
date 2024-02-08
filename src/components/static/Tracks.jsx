import left from "../../../public/svgs/tracks/left.svg";
import middle from "../../../public/svgs/tracks/middle.svg";
import right from "../../../public/svgs/tracks/right.svg";
import Image from "next/image";
import top from "../../../public/svgs/tracks/track.svg";
const Track = () => {
  return (

    <section
      id="tracks"
      className="bg-design-green-100 flex justify-between pb-28"
    >
      <div className="flex justify-center items-center flex-col w-full mt-8">
        <div className="text-6xl font-bold text-white">TRACKS</div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center text-white text-3xl font-bold mt-5 gap-4">
          <div className="flex flex-col">
            <Image src={left} alt="left" />
            <p className="flex justify-center md:ml-10">Sustainability</p>
          </div>
          <div className="flex justify-center items-center flex-col  h-full">
            <Image className="w-10/12  " src={middle} alt="middle" />
            <p className="flex justify-center ">Sustainability</p>
          </div>
          <div className="flex justify-center items-center flex-col h-full ">
            <Image className="w-10/12  " src={right} alt="right" />
            <p className="flex justify-center">Sustainability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
