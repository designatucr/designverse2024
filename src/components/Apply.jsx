import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";

const Apply = ({ text, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="no-underline flex whitespace-nowrap min-w-fit justify-center hover:-translate-y-1 hover:bg-newdesign-red-200 duration-150 bg-newdesign-red-100 rounded-full"
    >
      <div className="text-xs md:text-lg font-workSans font-regular flex items-center text-white py-1 px-4 md:px-0">
        {text}
        <ImArrowUpRight2 className="ml-2" />
      </div>
    </Link>
  );
};

export default Apply;
