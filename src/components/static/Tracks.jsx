import wave from "../../../public/svgs/wave.svg";
import Image from "next/image";
const Track = () => {
  return (
    <div className="bg-design-blue-200 flex justify-between">
      <div className="flex justify-center items-center flex-col w-full">
        <div className="text-5xl font-bold text-white">Tracks</div>

        <div className="flex flex-col md:flex-col items-center justify-end mt-20">
          <div className="flex space-x-2 md:space-x-20 justify-center items-center w-full">
            <div className="w-32 md:w-60 h-32 md:h-60 rounded-full bg-design-green-light"></div>
            <div className="w-32 md:w-60 h-32 md:h-60 rounded-full bg-design-green-light"></div>
            <div className="w-32 md:w-60 h-32 md:h-60 rounded-full bg-design-green-light"></div>
          </div>
          <div className="flex space-x-5 md:space-x-48 text-white text-md md:text-xl font-bold mt-4">
            <p>Sustainability</p>
            <p>Sustainability</p>
            <p>Sustainability</p>
          </div>
        </div>
        <Image src={wave} alt="wave" className="absolute" />
      </div>
    </div>
  );
};

export default Track;
