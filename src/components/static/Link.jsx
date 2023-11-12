import Link from "next/link";

const CustomLink = ({ link, text }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-design-orange text-design-white font-bold text-base md:text-xl rounded-full px-8 py-1 w-fit no-underline hover:bg-design-orange/75 duration-200 whitespace-nowrap"
    >
      {text}
    </Link>
  );
};

export default CustomLink;
