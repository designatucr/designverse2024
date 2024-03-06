import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

const CustomLink = ({ link, text }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="no-underline flex whitespace-nowrap min-w-fit justify-center hover:-translate-y-1 hover:bg-newdesign-red duration-150 bg-newdesign-red-200 rounded-full"
    >
      <div className="text-xs md:text-2xl font-workSans font-regular flex items-center text-white lg:py-2 px-2 md:px-0">
        {text}
        <ImArrowUpRight2 className="ml-2" />
      </div>
    </Link>
  );
};

export default CustomLink;
