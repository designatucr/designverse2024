import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";

const Apply = ({ text, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="no-underline flex whitespace-nowrap min-w-fit justify-center hover:-translate-y-1 hover:bg-design-brown-400/80 duration-150 bg-design-brown-400 rounded-full"
    >
      <div className="text-xs md:text-lg font-workSans font-regular flex items-center text-white py-2 px-6">
        {text}
        <ImArrowUpRight2 className="ml-2" />
      </div>
    </Link>
  );
};

export default Apply;
