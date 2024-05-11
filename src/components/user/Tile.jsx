import Link from "next/link";

const Tile = ({ icon, text, link }) => {
  return (
    <Link
      href={link}
      className="bg-white w-full  rounded-xl p-7 space-x-6 lg:space-x-12 shadow-xl flex items-center no-underline hover:opacity-70"
    >
      <div className="text-black text-4xl lg:text-7xl">{icon}</div>
      <div className="text-black font-bold text-xl lg:text-2xl  ">{text}</div>
    </Link>
  );
};

export default Tile;
