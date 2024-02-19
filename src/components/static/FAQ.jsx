import { QUESTIONS } from "@/data/static/FAQ";
import { Accordion } from "react-bootstrap";
import Item from "./Item";
import Image from "next/image";
import Waves from "../../../public/svgs/landing/waves.svg";

const FAQ = () => {
  return (
    <div className="relative  bg-gradient-to-b from-design-blue-400 via-design-blue-200 to-design-blue-300 flex justify-center w-full py-24 md:py-48">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image src={Waves} alt="Waves" className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-center items-center flex-col w-10/12 md:w-8/12 relative z-20">
        <div className="text-3xl lg:text-6xl font-bold text-white">FAQ</div>
        <Accordion className="w-full mt-8 text-sm md:text-base" alwaysOpen>
          {QUESTIONS.map(({ question, answer }, index) => (
            <Item
              question={question}
              answer={answer}
              key={index}
              index={index}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
