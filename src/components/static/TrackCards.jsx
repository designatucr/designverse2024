import Image from "next/image";
import { TRACKS } from "../../data/static/Tracks";

const TrackCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6  w-11/12 lg:w-8/12 mt-10">
      {TRACKS.map((track, index) => (
        <div className="w-full h-full group relative" key={index}>
          <div
            className={`group-hover:[transform:rotateY(180deg)] duration-500 w-full h-full flex flex-col justify-between items-center px-3 py-2 rounded-xl [backface-visibility:hidden] border-white border-4 ${track.bg}`}
          >
            <div className="text-base md:text-xl font-bold text-white text-center ">
              {track.title}
            </div>
            <Image src={track.front} alt={track.title} />
          </div>
          <div
            className={`absolute top-0 left-0 [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] duration-500 w-full h-full flex flex-col justify-evenly items-center px-3 py-2 rounded-xl bg-white [backface-visibility:hidden] border-4 ${track.text} ${track.border}`}
          >
            <div className="text-base md:text-xl font-bold text-center">
              {track.title}
            </div>
            <div className="text-sm lg:text-base text-center lg:my-3">
              {track.describe}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackCards;
