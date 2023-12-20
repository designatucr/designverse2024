import Image from "next/image";
import leaves from "../../../public/svgs/mushroomWithLeaves.svg";

const About = () => {
  return (
    <div className="bg-design-blue-200 flex">
      <div className="text-white font-workSans flex justify-center items-center">
        <div className="w-9/12">
          <p className="font-bold text-5xl">ABOUT US</p>
          <p className="text-2xl">
            A Design-a-Thon is a large-scale event where individuals or teams
            can work to design a prototype product within 24 hours. Participants
            will compete through a given prompt to create the best product,
            which will be determined by a panel of judges within the industry.
            Such products include the UI of a website or app.
          </p>
        </div>
      </div>
      <Image src={leaves} className="w-10/12" />
    </div>
  );
};

export default About;
