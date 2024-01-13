import Apply from "./Apply";

const Support = () => {
  return (
    <div className="bg-design-blue-200 flex ">
      <div className="font-workSans flex justify-center items-center">
        <div className="w-11/12">
          <div className="flex justify-center font-bold text-4xl lg:text-5xl text-white ">
            Support Us
          </div>
          <br />
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="flex justify-center font-bold text-xl lg:text-3xl py-2 text-design-brown-400">
                Become a Mentor
              </div>
              <p className="lg:text-lg md:text-sm text-center text-design-brown-400">
                Have experience leading, using Figma, or coordinating groups?
                Share your knowledge and become a mentor!
              </p>
              <Apply text="Mentor" link="/form/mentor" />
            </div>

            <div>
              <div className="flex justify-center font-bold text-2xl lg:text-3xl py-2 text-design-brown-400">
                Sponsor Us
              </div>
              <p className="lg:text-lg md:text-sm text-center text-design-brown-400">
                Have a company or brand you want to bring attention to? Sponsor
                Us to raise Brand awareness and exposure through social media
                and giveaways!{" "}
              </p>
              <Apply text="Sponsor Us" link="/form/sponsor" />
            </div>

            <div>
              <div className="flex justify-center font-bold text-2xl lg:text-2.9xl py-2 text-design-brown-400">
                Become a Volunteer
              </div>
              <p className="lg:text-lg md:text-sm text-center text-design-brown-400">
                Need experience or just want to help our organization come to
                life? Volunteer to help the Designathon happen!
              </p>
              <Apply text="Volunteer" link="/form/volunteer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
