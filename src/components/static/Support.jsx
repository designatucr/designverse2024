import Apply from "./Apply";

const Support = () => {
  return (
    <section id="support" className="justify-center items-center flex w-10/12">
      <div className="bg-design-green-100 flex w-10/12 font-workSans flex-col">
        {/* <div className="font-workSans flex justify-center items-center"> */}
        {/* <div className="w-11/12"> */}
        <div className="flex  font-bold text-4xl lg:text-6xl text-white ">
          SUPPORT US
        </div>
        <br />
        <div className="grid grid-cols-3  gap-1">
          <div className="flex justify-between items-center  flex-col w-10/12">
            <div className="flex justify-center font-bold text-xl lg:text-3xl py-2 text-design-brown-500 whitespace-nowrap">
              Become a Mentor
            </div>
            <div className="lg:text-lg md:text-sm text-center text-design-brown-500 mb-4">
              Have experience leading, using Figma, or coordinating groups?
              Share your knowledge and become a mentor!
            </div>
            <Apply text="Mentor" link="/form/mentor" />
          </div>
          <div className="flex justify-between items-center  flex-col w-10/12">
            <div className="flex justify-center font-bold text-xl lg:text-3xl py-2 text-design-brown-500 whitespace-nowrap">
              Sponsor Us
            </div>
            <div className="lg:text-lg md:text-sm text-center text-design-brown-500 mb-4">
              Have a company or brand you want to bring attention to? Sponsor Us
              to raise Brand awareness and exposure through social media and
              giveaways!
            </div>
            <Apply text="Mentor" link="/form/mentor" />
          </div>
          <div className="flex justify-between items-center flex-col w-10/12">
            <div className="flex justify-center font-bold text-xl lg:text-3xl py-2 text-design-brown-500 whitespace-nowrap">
              Volunteer Work
            </div>
            <div className="lg:text-lg md:text-sm text-center text-design-brown-500 mb-4">
              Need experience or just want to help our organization come to
              life? Volunteer to help the Designathon happen!
            </div>
            <Apply text="Mentor" link="/form/mentor" />
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Support;
