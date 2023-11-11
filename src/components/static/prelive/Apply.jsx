import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";

const Apply = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="text-white font-semibold no-underline mr-1 flex whitespace-nowrap"
    >
      <div className="text-sm md:text-2xl w-fit bg-design-orange rounded-xl flex items-center text-design-white px-3 py-1">
        {text}
        <ImArrowUpRight2 className="ml-2" />
      </div>
    </Link>
  );
};

export default Apply;
