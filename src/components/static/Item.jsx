"use client";
import { FaChevronDown } from "react-icons/fa6";
import { Accordion } from "react-bootstrap";
import { useState } from "react";

const Item = ({ question, answer, index }) => {
  const [state, setState] = useState(false);

  return (
    <Accordion.Item
      eventKey={index}
      className="!text-white bg-transparent !border-x-0 !border-t-0 !border-b-2"
    >
      <Accordion.Button
        className="after:!bg-none !text-white !bg-transparent !shadow-none"
        onClick={() => setState(!state)}
      >
        <div className="flex justify-between items-center w-full">
          {question}
          <FaChevronDown
            className={`${state && "rotate-180"} duration-200 ml-2 text-2xl`}
          />
        </div>
      </Accordion.Button>
      <Accordion.Body className="!border-none">{answer}</Accordion.Body>
    </Accordion.Item>
  );
};

export default Item;
