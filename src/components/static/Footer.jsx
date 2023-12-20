import Image from "next/image";
import mushroomsLeft from "../../../public/svgs/mushroomsFooterLeft.svg";
import mushroomsRight from "../../../public/svgs/mushroomsFooterRight.svg";
import logo from "../../../public/svgs/whiteLogo.svg";
import { FaEnvelope, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between bg-design-blue-200 text-white py-10">
      <Image src={mushroomsLeft} className="w-2/12" />
      <div className="flex flex-col items-center">
        <Image src={logo} />
        <div className="flex gap-3 w-full justify-center">
          <FaEnvelope className="text-4xl hover:cursor-pointer" />
          <FaInstagram className="text-4xl hover:cursor-pointer" />
          <FaLinkedin className="text-4xl hover:cursor-pointer" />
        </div>
        <div className="flex items-center text-2xl mt-2">
          Made with <FaHeart className="mx-1" /> by Designverse 2024
        </div>
      </div>
      <Image src={mushroomsRight} className="w-2/12" />
    </div>
  );
};

export default Footer;
