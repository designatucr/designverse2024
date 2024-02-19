import Image from "next/image";
import top from "../../../public/svgs/tracks/track.svg";
// import TrackCards from "./TrackCards";
// import track1front from "../../../public/svgs/tracks/track1Front.svg";
// import track2front from "../../../public/svgs/tracks/track2Front.svg";
// import track3front from "../../../public/svgs/tracks/track3Front.svg";
// import track4front from "../../../public/svgs/tracks/track4Front.svg";
// import track1Back from "../../../public/svgs/tracks/track1Back.svg";
// import track2Back from "../../../public/svgs/tracks/track2Back.svg";
// import track3Back from "../../../public/svgs/tracks/track3Back.svg";
// import track4Back from "../../../public/svgs/tracks/track4Back.svg";
const Track = () => {
  return (
    <div className="bg-design-green-100 flex flex-col justify-between mb-20">
      <Image src={top} className="bg-design-blue-200" />
      <div className="flex justify-center items-center flex-col w-full">
        <div className="text-5xl font-bold text-white">TRACKS</div>
        <div className="flex w-11/12 mt-5 justify-center items-center">
          <p>track cards go here</p>
        </div>
      </div>
    </div>
  );
};

export default Track;
