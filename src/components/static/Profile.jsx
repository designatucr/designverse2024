import Image from "next/image";

const Profile = ({ image, name, position }) => {
  return (
    <div className="flex flex-col items-center justify-center justify-self-center text-white font-workSans m-1 lg:p-4">
      <Image src={image} className=" object-cover w-4/6 lg:w-full" />
      <div className="text-center text-design-brown-400 text-md md:text-xl font-semibold whitespace-nowrap mb-0 mt-2">
        {name}
      </div>
      <div className="text-center text-design-brown-400 text-xs lg:text-base mb-0">
        {position}
      </div>
    </div>
  );
};

export default Profile;
