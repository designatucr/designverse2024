import { COMMITTEES } from "@/data/static/Committees";
import commMushroomL from "../../../public/svgs/team/commMushroomL.svg";
import commMushroomR from "../../../public/svgs/team/commMushroomR.svg";
import commVine1 from "../../../public/svgs/team/commVine1.svg";
import commVine2 from "../../../public/svgs/team/commVine2.svg";
import Image from "next/image";

const Committees = () => {
  return (
    <div className="flex justify-center items-center text-newdesign-cyan-200 flex-col bg-newdesign-blue-100">
      <div className="flex items-center space-x-4">
        <Image
          className="w-4/12 md:w-4/12 lg:w-4/12"
          src={commVine1}
          alt="commVine1"
        />
        <div className="text-2xl lg:text-4xl text-center font-bold lg:whitespace-nowrap">
          Committee Members
        </div>
        <Image
          className="w-4/12 md:w-4/12 lg:w-4/12"
          src={commVine2}
          alt="commVine2"
        />
      </div>
      <div className="overflow-hidden hidden md:block">
        <Image
          className="w-1/2 h-1/2 absolute left-[-20%]"
          src={commMushroomL}
          alt="commMushroomL"
        />
        <Image
          className="w-1/2 h-1/2 absolute right-[-20%]"
          src={commMushroomR}
          alt="commMushroomR"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(COMMITTEES).map(([key, values], index) => (
          <div className="whitespace-nowrap text-center" key={index}>
            <p className="text-base lg:text-2xl font-semibold">{key}</p>
            {values.map((name, index) => (
              <div key={index} className="text-sm lg:text-base">
                {name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
