import wave from "../../../public/svgs/wave.svg";
import Image from "next/image";

const Track = () => {
  return (
    <div className="bg-design-blue-200 flex justify-between pb-28">
      <div className="flex justify-center items-center flex-col w-full ">
        <div className="text-5xl font-bold text-white">Tracks</div>

        <div className="z-2 grid grid-cols-1 md:grid-cols-3 items-center justify-center mt-8 md:mt-24 gap-20">
          <div className="w-40 md:w-60 h-40 md:h-60 rounded-full bg-design-green-light">
            <p className="flex justify-center text-white text-md md:text-xl font-bold mt-44 md:mt-64">
              Sustainability
            </p>
          </div>
          <div className="w-40 md:w-60 h-40 md:h-60 rounded-full bg-design-green-light">
            <p className="flex justify-center text-white text-md md:text-xl font-bold mt-44 md:mt-64">
              Sustainability
            </p>
          </div>
          <div className="w-40 md:w-60 h-40 md:h-60 rounded-full bg-design-green-light">
            <p className="flex justify-center text-white text-md md:text-xl font-bold mt-44 md:mt-64">
              Sustainability
            </p>
          </div>
        </div>
        <Image src={wave} alt="wave" className="z-1 absolute hidden md:block" />
      </div>
    </div>
  );
};

export default Track;
