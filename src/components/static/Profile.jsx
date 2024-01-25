import Image from "next/image";

const Profile = ({ image, name, position }) => {
  return (
    <div className="flex flex-col items-center text-white font-workSans w-28">
      <Image
        src={image}
        className="rounded-full w-28 h-28 border-design-brown-400 border-4 object-contain"
      />
      <p className="text-center text-design-brown-400 text-xs font-bold mb-0">
        {name}
      </p>
      <p className="text-center text-design-brown-400 text-xs mb-0">
        {position}
      </p>
    </div>
  );
};

export default Profile;
