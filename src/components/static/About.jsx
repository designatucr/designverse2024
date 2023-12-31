import Image from "next/image";
import leaves from "../../../public/svgs/mushroomWithLeaves.svg";

const About = () => {
  return (
    <div className="bg-design-blue-200 flex">
      <div className="text-white font-workSans flex justify-center items-center">
        <div className="w-9/12">
          <p className="font-bold text-5xl">ABOUT US</p>
          <p className="text-lg">
            DesignVerse is the first ever 24-hour beginner-friendly
            Design-a-Thon hosted by the University of California, Riverside.
            Designers are challenged to create the interface of an app or
            website through a given prompt, which would then be demoed and
            presented to a panel of industry professionals.
            <br />
            <br />
            At DesignVerse, our goal is to empower our community of students who
            are interested in design-like thinking and provide career
            developmental opportunities through our workshops, mentorship, and
            networking events.
            <br />
            <br />
            We welcome both undergraduate and high school students for a lively
            weekend filled with creativity, networking, mentorship, and more!
          </p>
        </div>
      </div>
      <Image src={leaves} className="w-10/12" />
    </div>
  );
};

export default About;
