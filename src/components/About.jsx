import Image from "next/image";
import leaves from "@/public/svgs/landing/mushroomWithLeaves.svg";
import fox from "@/public/svgs/landing/aboutFox.svg";
import pads from "@/public/svgs/landing/aboutPads.svg";

const About = () => {
  return (
    <section
      id="about"
      className="h-4/6 bg-gradient-to-b from-newdesign-cyan-100 to-newdesign-cyan-200 lg:h-5/6 relative flex-col lg:flex-row flex w-full md:py-20 "
    >
      <div className="text-white flex-col font-workSans flex lg:absolute lg:w-5/12 w-full md:mt-10 md:left-64 justify-center items-center lg:justify-start lg:items-start z-10">
        <div className="flex justify-center md:justify-start md:items-start font-bold text-3xl lg:text-5xl">
          ABOUT US
        </div>
        <br />
        <p className="lg:text-base text-sm w-10/12 lg:w-full">
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
          We welcome all undergraduate, graduate and high school students for a
          lively weekend filled with creativity, networking, mentorship, and
          more!
        </p>
      </div>
      <div className="flex justify-end items-end ml-32 scale-125">
        <Image src={leaves} className="w-full hidden md:block z-0" />
      </div>
      <div className="flex justify-center items-center w-full md:hidden ">
        <Image src={fox} />
        <Image src={pads} className=" mt-20 " />
      </div>
    </section>
  );
};

export default About;
