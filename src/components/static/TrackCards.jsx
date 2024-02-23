import Image from "next/image";
import { TRACKS } from "../../data/static/Tracks";

const TrackCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-11/12 lg:w-10/12 mt-10">
      {TRACKS.map((track, index) => (
        <div className="w-full h-full group relative" key={index}>
          <div className="group-hover:[transform:rotateY(180deg)] duration-500 w-full h-full flex flex-col justify-between items-center px-3 py-5 rounded-xl drop-shadow-[0px_0px_20px_rgba(255,255,255,1)] bg-design-green-500/80 [backface-visibility:hidden]">
            <div className="text-base md:text-2xl font-bold text-white text-center ">
              {track.title}
            </div>
            <Image src={track.front} alt={track.title} />
          </div>
          <div className="absolute top-0 left-0 [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] duration-500 w-full h-full flex flex-col justify-between items-center px-3 py-5 rounded-xl drop-shadow-[0px_0px_20px_rgba(255,255,255,1)] bg-design-green-500/80 [backface-visibility:hidden]">
            <div className="text-base md:text-2xl font-bold text-white text-center">
              {track.title}
            </div>
            <div className="text-sm lg:text-base text-white text-center lg:my-3">
              {track.text}
            </div>
            <Image
              src={track.back}
              alt={track.title}
              className="scale-75 lg:scale-100"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackCards;
