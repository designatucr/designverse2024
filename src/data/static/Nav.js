import { IoHomeSharp } from "react-icons/io5";
import { BsCalendar3, BsFillQuestionCircleFill } from "react-icons/bs";
import { IoMdInformationCircle, IoIosPeople } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaTools } from "react-icons/fa";

export const items = [
  {
    name: "Home",
    id: "home",
    link: "/#",
    icon: <IoHomeSharp />,
  },
  {
    name: "Schedule",
    id: "schedule",
    link: "/#schedule",
    icon: <BsCalendar3 />,
  },
  {
    name: "About Us",
    id: "about",
    link: "/#about",
    icon: <IoMdInformationCircle />,
  },
  {
    name: "Tracks",
    id: "tracks",
    link: "/#tracks",
    icon: <BsCalendar3 />,
  },
  {
    name: "Meet The Team",
    id: "team",
    link: "/#team",
    icon: <IoIosPeople />,
  },
  {
    name: "Support",
    id: "support",
    link: "/#support",
    icon: <BiSolidDonateHeart />,
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
