import Image from "next/image";
import top from "../../../public/svgs/tracks/track.svg";
import TrackCards from "./TrackCards";

const Track = () => {
  return (
    <section
      id="tracks"
      className="bg-design-green-100 flex flex-col justify-between mb-20"
    >
      <Image src={top} className="bg-design-blue-200" alt="top" />
      <div className="flex justify-center items-center flex-col w-full">
        <div className="text-3xl lg:text-5xl font-bold text-white lg:mb-10">
          TRACKS
        </div>
        <TrackCards />
      </div>
    </section>
  );
};

export default Track;
