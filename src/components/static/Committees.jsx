import { COMMITTEES } from "@/data/static/Committees";
import commMushroomL from "../../../public/svgs/team/commMushroomL.svg";
import commMushroomR from "../../../public/svgs/team/commMushroomR.svg";
import commVine1 from "../../../public/svgs/team/commVine1.svg";
import commVine2 from "../../../public/svgs/team/commVine2.svg";
import Image from "next/image";

const Committees = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div
        className="flex items-center space-x-4"
        style={{ marginBottom: "75px", marginTop: "50px" }}
      >
        <Image className="w-1/4 h-1/4 absolute left-0" src={commVine1} />
        <Image className="w-1/4 h-1/4 absolute right-0" src={commVine2} />
        <div className="text-3xl lg:text-6xl font-bold text-design-brown-500 whitespace-nowrap">
          Committee Members
        </div>
      </div>
      <div className="overflow-hidden mb-16">
        <Image
          className="w-1/2 h-1/2 absolute left-[-20%]"
          src={commMushroomL}
        />
        <Image
          className="w-1/2 h-1/2 absolute right-[-20%]"
          src={commMushroomR}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {Object.entries(COMMITTEES).map(([key, values], index) => (
          <div
            className="text-design-brown-500 whitespace-nowrap text-center"
            key={index}
          >
            <p className="text-xl font-bold">{key}</p>
            {values.map((name, index) => (
              <p key={index} className="">
                {name}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
