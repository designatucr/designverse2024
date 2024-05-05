import { QUESTIONS } from "@/data/FAQ";
import { Accordion } from "react-bootstrap";
import Item from "./Item";
import Image from "next/image";
import WAVES from "@/public/svgs/schedule/wave.svg";
const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative  bg-newdesign-cyan-200 flex justify-center w-full py-24 md:py-48"
    >
      <div className="flex justify-center items-center flex-col w-10/12 md:w-8/12 relative z-20">
        <div className="text-3xl lg:text-6xl font-bold text-white">FAQ</div>
        <Image
          src={WAVES}
          className="absolute w-screen -z-10 left-0 animate-wave scale-[250%]"
          alt="Waves"
        />
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
    </section>
  );
};

export default FAQ;
