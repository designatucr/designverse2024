import Image from "next/image";
import mushroomsLeft from "../../../public/svgs/footer/mushroomsFooterLeft.svg";
import mushroomsRight from "../../../public/svgs/footer/mushroomsFooterRight.svg";
import FooterWithoutEmoji from "../../../public/svgs/footer/FooterWithoutEmoji.svg";
import logo from "../../../public/svgs/logos/whiteLogo.svg";
import { FaHeart, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex justify-between bg-design-blue-300 text-white">
      <Image src={mushroomsLeft} className="w-4/12 md:w-3/12 z-10" />
      <div className="flex flex-col items-center justify-end w-3/12 md:w-full z-10">
        <Image src={logo} width={100} />

        <div className="flex space-x-1 md:gap-5 w-full justify-center items-center mt-4">
          <Link href="mailto:designverseucr@gmail.com ">
            {" "}
            <IoIosMail className="text-4xl hover:cursor-pointer text-white" />{" "}
          </Link>
          <Link href="https://www.instagram.com/designverseucr/">
            {" "}
            <RiInstagramFill className="text-3xl hover:cursor-pointer text-white" />
          </Link>
          <Link href="https://www.linkedin.com/company/designverseucr">
            <FaLinkedinIn className="text-3xl hover:cursor-pointer text-white" />{" "}
          </Link>
          {/* <RiFacebookBoxFill className="text-3xl hover:cursor-pointer" /> */}
          {/* <FaDiscord className="text-3xl hover:cursor-pointer" /> */}
        </div>
        <div className="flex items-center text-sm md:text-lg font-workSans font-light mt-2 whitespace-nowrap">
          Made with&nbsp;
          <FaHeart className="mx-1" />
          &nbsp;by the DesignVerse Team 2024
        </div>
      </div>
      <Image src={mushroomsRight} className="w-4/12 md:w-3/12 z-10" />
      <div className=" flex w-full absolute mt-14 z-0 ">
        <Image src={FooterWithoutEmoji} className="" />
      </div>
    </div>
  );
};

export default Footer;
