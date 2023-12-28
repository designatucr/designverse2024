import Image from "next/image";
import mushroomsLeft from "../../../public/svgs/mushroomsFooterLeft.svg";
import mushroomsRight from "../../../public/svgs/mushroomsFooterRight.svg";
import logo from "../../../public/svgs/whiteLogo.svg";
import { FaHeart, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex justify-between bg-gradient-to-b bg-[#BCD7B9] text-white py-10">
      <Image src={mushroomsLeft} className="w-4/12 md:w-3/12" />
      <div className="flex flex-col items-center justify-end w-3/12 md:w-full">
        <Image src={logo} width={100} />
        <div className="flex space-x-1 md:gap-5 w-full justify-center items-center">
          <IoIosMail className="text-4xl hover:cursor-pointer" />
          <RiInstagramFill className="text-3xl hover:cursor-pointer" />
          <FaLinkedinIn className="text-2xl hover:cursor-pointer" />
          <RiFacebookBoxFill className="text-3xl hover:cursor-pointer" />
          <FaDiscord className="text-3xl hover:cursor-pointer" />
        </div>
        <div className="flex items-center text-sm md:text-lg font-workSans font-light mt-2 whitespace-nowrap">
          Made with&nbsp;
          <FaHeart className="mx-1" />
          &nbsp;by the DesignVerse Team 2024
        </div>
      </div>
      <Image src={mushroomsRight} className="w-4/12 md:w-3/12" />
    </div>
  );
};

export default Footer;
