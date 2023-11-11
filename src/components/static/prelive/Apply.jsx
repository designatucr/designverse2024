import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";

const Apply = ({ text, link }) => {
  return (
    <div className="text-sm md:text-2xl w-full min-w-fit justify-center bg-design-orange rounded-xl py-2 flex items-center text-design-white">
      <Link
        href={link}
        className="text-white font-semibold no-underline mr-1 flex whitespace-nowrap"
      >
        {text}
      </Link>
      <ImArrowUpRight2 />
    </div>
  );
};

export default Apply;
