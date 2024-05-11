import Image from "next/image";
import Link from "next/link";
const Profile = ({ linkedin, image, name, position }) => {
  return (
    <div className=" flex flex-col items-center justify-center text-newdesign-cyan-200 font-workSans lg:p-3">
      <Link href={linkedin}>
        <Image
          src={image}
          className="object-cover w-28 h-28 lg:w-40 lg:h-40 rounded-full border-[6px] border-newdesign-cyan-200 hover:scale-105"
          alt="Profile Photo"
        />
      </Link>

      <div className="text-center text-md md:text-xl font-semibold whitespace-nowrap mb-0 mt-2">
        {name}
      </div>
      <div className="text-center text-xs lg:text-base mb-0 whitespace-nowrap">
        {position}
      </div>
    </div>
  );
};

export default Profile;
