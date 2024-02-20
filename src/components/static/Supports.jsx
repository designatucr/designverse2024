import river from "@/public/svgs/river.svg";
import Image from "next/image";
import Support from "./Support";
import Resource from "./Resource";
import resource1 from "@/public/svgs/support/figma.png";
import resource2 from "@/public/svgs/support/dribble.jpeg";
import resource3 from "@/public/svgs/support/miro.png";
const Supports = () => {
  return (
    <section
      id="support"
      className="justify-center items-center flex flex-col w-full relative"
    >
      {/* <div className="w-10/12"> */}
      <div className="bg-transparent flex w-10/12 lg:w-9/12 absolute top-8 lg:top-52 left-0 lg:left-20 font-workSans flex-col">
        {/* <div className="font-workSans flex justify-center items-center"> */}
        {/* <div className="w-11/12"> */}
        <div className="flex  font-bold text-2xl lg:text-5xl text-white lg:mb-8">
          SUPPORT US
        </div>
        <div className="grid grid-cols-3 gap-x-1 lg:gap-x-4">
          <div>
            <Support
              title="Become a Mentor"
              description="Have experience leading, using Figma, or coordinating groups? Share your knowledge and become a mentor!"
              form="mentor"
            />
          </div>
          <div>
            <Support
              title="Sponsor Us"
              description="Have a company or brand you want to bring attention to? Sponsor Us to raise Brand awareness and exposure through social media and giveaways!"
              form="sponsor"
            />
          </div>
          <div>
            <Support
              title="Volunteer Work"
              description="Need experience or just want to help our organization come to life? Volunteer to help the Designathon happen!"
              form="volunteer"
            />
          </div>
        </div>
      </div>
      <div className=" flex absolute  right-0 lg:right-10 w-9/12 lg:w-8/12 justify-end items-end bottom-32 lg:bottom-96 font-workSans flex-col ">
        <div className="flex font-bold text-2xl lg:text-5xl text-white lg:mb-8 justify-end items-end">
          RESOURCES
        </div>
        <div className="grid grid-cols-3 justify-center gap-x-1 lg:gap-x-4 items-end ">
          <div>
            <Resource
              title="Figma"
              description="A tool to do this and that and whatever you want, example example example, very useful."
              image={resource1}
            />
          </div>
          <div>
            <Resource
              title="Dribble"
              description="A tool to do this and that and whatever you want, example example example, very useful."
              image={resource2}
            />
          </div>
          <div>
            <Resource
              title="Micro"
              description="A tool to do this and that and whatever you want, example example example, very useful."
              image={resource3}
            />
          </div>
        </div>
      </div>

      {/* </div> */}

      <div className="w-screen bg-design-green-100">
        <Image src={river} />
      </div>
    </section>
  );
};

export default Supports;
