import { QUESTIONS } from "@/data/static/FAQ";
import Accordion from "react-bootstrap/Accordion";
import Item from "./Item";

const FAQ = () => {
  return (
    <div className="bg-gradient-to-b from-design-blue-200 to-[#BCD7B9] flex justify-center w-full">
      <div className="flex justify-center items-center flex-col w-10/12 md:w-1/2">
        <p className="text-5xl font-bold text-white">FAQ</p>
        <Accordion className="w-full mt-4" alwaysOpen>
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
