import { COMMITTEES } from "@/data/static/Committees";
import commMushroomL from "../../../public/svgs/team/commMushroomL.svg";
import commMushroomR from "../../../public/svgs/team/commMushroomR.svg";
import commVine1 from "../../../public/svgs/team/commVine1.svg";
import commVine2 from "../../../public/svgs/team/commVine2.svg";
import Image from "next/image";

const Committees = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex items-center space-x-4">
        <Image className="" src={commVine1} />
        <div className="text-3xl lg:text-4xl font-bold text-design-brown-500 whitespace-nowrap">
          Committee Members
        </div>
        <Image className="" src={commVine2} />
      </div>
      <div className="overflow-hidden">
        <Image
          className="w-1/2 h-1/2 absolute left-[-20%]"
          src={commMushroomL}
        />
        <Image
          className="w-1/2 h-1/2 absolute right-[-20%]"
          src={commMushroomR}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(COMMITTEES).map(([key, values], index) => (
          <div
            className="text-design-brown-500 whitespace-nowrap text-center"
            key={index}
          >
            <p className="text-2xl font-semibold">{key}</p>
            {values.map((name, index) => (
              <div key={index} className="">
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
