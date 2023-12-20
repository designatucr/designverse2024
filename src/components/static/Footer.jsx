import Image from "next/image";
import mushroomsLeft from "../../../public/svgs/mushroomsFooterLeft.svg";
import mushroomsRight from "../../../public/svgs/mushroomsFooterRight.svg";
import logo from "../../../public/svgs/whiteLogo.svg";
import { FaEnvelope, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between">
      <Image src={mushroomsLeft} />
      <div>
        <Image src={logo} />
        <div className="flex gap-3">
          <FaEnvelope />
          <FaInstagram />
          <FaLinkedin />
        </div>
        Made with <FaHeart /> by Designverse 2024
      </div>
      <Image src={mushroomsRight} />
    </div>
  );
};

export default Footer;
