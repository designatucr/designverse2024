import Image from "next/image";
import leaves from "../../../public/svgs/landing/mushroomWithLeaves.svg";

const About = () => {
  return (
    <div className="h-3/6 bg-design-blue-200 md:h-5/6 relative flex w-full md:py-20 justify-center">
      <div className="text-white  flex-col font-workSans flex absolute md:w-6/12 w-10/12 md:left-20">
        {/* <div className=" "> */}
        <div className="flex justify-center md:justify-start md:items-start font-bold text-3xl lg:text-5xl">
          ABOUT US
        </div>
        <br />
        <p className="lg:text-base text-sm">
          DesignVerse is the first ever 24-hour beginner-friendly Design-a-Thon
          hosted by the University of California, Riverside. Designers are
          challenged to create the interface of an app or website through a
          given prompt, which would then be demoed and presented to a panel of
          industry professionals.
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
        {/* </div> */}
      </div>
      <div className="flex justify-end items-end ml-32">
        <Image src={leaves} className="w-11/12 hidden md:block " alt="leaves" />
      </div>
    </div>
  );
};

export default About;
