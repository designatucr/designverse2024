import { IoHomeSharp } from "react-icons/io5";
import { BsCalendar3, BsFillQuestionCircleFill } from "react-icons/bs";
import { IoMdInformationCircle, IoIosPeople } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import { FaShieldHeart } from "react-icons/fa6";

export const items = [
  {
    name: "Home",
    id: "home",
    link: "/#home",
    icon: <IoHomeSharp />,
  },
  {
    name: "About Us",
    id: "about",
    link: "/#about",
    icon: <IoMdInformationCircle />,
  },
  {
    name: "Support",
    id: "support",
    link: "/#support",
    icon: <BiSolidDonateHeart />,
  },
  {
    name: "Schedule",
    id: "schedule",
    link: "/#schedule",
    icon: <BsCalendar3 />,
  },
  {
    name: "Tracks",
    id: "tracks",
    link: "/#tracks",
    icon: <RiGuideFill />,
  },
  {
    name: "Sponsors",
    id: "sponsor",
    link: "/#sponsor",
    icon: <FaShieldHeart />,
  },
  {
    name: "Meet The Team",
    id: "team",
    link: "/#team",
    icon: <IoIosPeople />,
  },
  {
    name: "Resources",
    id: "resource",
    link: "/#resources",
    icon: <FaTools />,
  },
  {
    name: "FAQ",
    id: "faq",
    link: "/#faq",
    icon: <BsFillQuestionCircleFill />,
  },
];
