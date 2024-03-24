import Image from "next/image";

const Profile = ({ image, name, position }) => {
  return (
    <div className="w-1/5 flex flex-col items-center justify-center text-newdesign-cyan-200 font-workSans lg:p-3">
      <Image
        src={image}
        className="object-cover w-full rounded-full border-[6px] border-newdesign-cyan-200"
        alt="Profile Photo"
      />
      <div className="text-center text-md md:text-xl font-semibold whitespace-nowrap mb-0 mt-2">
        {name}
      </div>
      <div className="text-center text-xs lg:text-base mb-0">{position}</div>
    </div>
  );
};

export default Profile;
