import Image from "next/image";
import { TRACKS } from "../../data/static/Tracks";

const TrackCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-10/12 mt-10">
      {TRACKS.map((track, index) => (
        <div className="w-full h-full group relative" key={index}>
          <div className="group-hover:[transform:rotateY(180deg)] duration-300 w-full h-full flex flex-col justify-center items-center px-3 py-5 rounded-xl drop-shadow-[0px_0px_20px_rgba(255,255,255,1)] bg-design-green-100 [backface-visibility:hidden]">
            <div className="text:lg md:text-2xl font-bold text-white text-center">
              {track.title}
            </div>
            <Image src={track.front} alt={track.title} />
          </div>
          <div className="absolute top-0 left-0 [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] duration-300 w-full h-full flex flex-col justify-center items-center px-3 py-5 rounded-xl drop-shadow-[0px_0px_20px_rgba(255,255,255,1)] bg-design-green-100 [backface-visibility:hidden]">
            <div className="text-lg md:text-2xl font-bold text-white text-center">
              {track.title}
            </div>
            <div className="text-lg text-white text-center my-3">
              {track.text}
            </div>
            <Image src={track.back} alt={track.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackCards;
