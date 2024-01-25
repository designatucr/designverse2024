import { IoHomeSharp } from "react-icons/io5";
import { BsCalendar3, BsFillQuestionCircleFill } from "react-icons/bs";
import { IoMdInformationCircle, IoIosPeople } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaTools } from "react-icons/fa";

export const items = [
  {
    name: "Home",
    link: "home",
    icon: <IoHomeSharp />,
  },
  {
    name: "Schedule",
    link: "schedule",
    icon: <BsCalendar3 />,
  },
  {
    name: "About Us",
    link: "about",
    icon: <IoMdInformationCircle />,
  },
  {
    name: "Meet The Team",
    link: "team",
    icon: <IoIosPeople />,
  },
  {
    name: "Support",
    link: "support",
    icon: <BiSolidDonateHeart />,
  },
  {
    name: "Resources",
    link: "resources",
    icon: <FaTools />,
  },
  {
    name: "FAQ",
    link: "faq",
    icon: <BsFillQuestionCircleFill />,
  },
];
