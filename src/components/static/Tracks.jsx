import Image from "next/image";
import TrackCards from "./TrackCards";
import wave from "@/public/svgs/tracks/wave.svg";
import ripple from "@/public/svgs/tracks/ripple.svg";

const Track = () => {
  return (
    <section
      id="tracks"
      className="bg-newdesign-cyan-200 flex flex-col justify-between relative"
    >
      <Image src={ripple} className="w-full absolute bottom-1/4" alt="wave" />
      <div className="flex justify-center items-center flex-col w-full my-24">
        <div className="text-3xl lg:text-5xl font-bold text-white lg:mb-10">
          TRACKS
        </div>
        <div className=" flex justify-center items-center relative">
          <TrackCards />
        </div>
      </div>
      <Image src={wave} className="w-full mt-28 lg:mt-10" alt="wave" />
    </section>
  );
};

export default Track;
