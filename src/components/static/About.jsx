import Image from "next/image";
import leaves from "../../../public/svgs/landing/mushroomWithLeaves.svg";

const About = () => {
  return (
    <div className="h-[210%] md:h-[100%] bg-design-blue-200 relative flex w-full pt-20">
      <div className="text-white font-workSans flex justify-center items-center absolute w-6/12 left-20">
        <div className=" ">
          <div className="flex justify-center md:justify-start font-bold text-3xl lg:text-6xl">
            ABOUT US
          </div>
          <br />
          <p className="lg:text-lg md:text-sm">
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
      <div className="flex justify-end items-end ml-32">
        <Image src={leaves} className="w-11/12 hidden md:block " />
      </div>
    </div>
  );
};

export default About;
