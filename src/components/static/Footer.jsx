import Image from "next/image";
import mushroomsLeft from "../../../public/svgs/mushroomsFooterLeft.svg";
import mushroomsRight from "../../../public/svgs/mushroomsFooterRight.svg";
import logo from "../../../public/svgs/whiteLogo.svg";
import { FaHeart, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex justify-between bg-gradient-to-b from-[#BCD7B9] via-[#BCD7B9] bg-[#18836F] text-white py-20">
      <Image src={mushroomsLeft} className="w-4/12 md:w-3/12" />
      <div className="flex flex-col items-center justify-end w-3/12 md:w-full">
        <Image src={logo} width={100} />
        <div className="flex space-x-1 md:gap-5 w-full justify-center items-center ">
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
      <Image src={mushroomsRight} className="w-4/12 md:w-3/12" />
    </div>
  );
};

export default Footer;
