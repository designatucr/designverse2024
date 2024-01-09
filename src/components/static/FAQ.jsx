import { QUESTIONS } from "@/data/static/FAQ";
import Accordion from "react-bootstrap/Accordion";
import Item from "./Item";

const FAQ = () => {
  return (
    <div className="bg-gradient-to-b from-design-blue-200 to-[#BCD7B9] flex justify-center w-full pt-28">
      <div className="flex justify-center items-center flex-col w-10/12 md:w-1/2">
        <div className="text-3xl md:text-5xl font-bold text-white">FAQ</div>
        <Accordion className="w-full mt-8" alwaysOpen>
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
