import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-design-white w-screen h-screen">
      <p className="text-3xl font-bold text-black">Loading...</p>
      <AiOutlineLoading3Quarters className="animate-spin text-black" />
    </div>
  );
};

export default Loading;
