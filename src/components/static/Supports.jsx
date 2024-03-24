import Support from "./Support";

const Supports = () => {
  return (
    <div
      id="support"
      className="justify-center items-center flex flex-col w-full relative bg-newdesign-cyan-200 py-24"
    >
      <div className="flex  font-bold text-2xl lg:text-5xl text-white lg:mb-8">
        SUPPORT US
      </div>
      <div className="grid grid-cols-3 gap-x-1 lg:gap-x-4 lg:w-8/12 py-8 z-10">
        <div>
          <Support
            title="Become a Mentor"
            description="Have experience leading, using Figma, or coordinating groups? Share your knowledge and become a mentor!"
            form="Mentor"
            formLink="mentor"
          />
        </div>
        <div className=" mt-6">
          <Support
            title="Sponsor Us"
            description="Have a company or brand you want to bring attention to? Sponsor Us to raise Brand awareness and exposure through social media and giveaways!"
            form="Sponsor"
            formLink="sponsor"
          />
        </div>
        <div>
          <Support
            title="Volunteer Work"
            description="Need experience or just want to help our organization come to life? Volunteer to help the Designathon happen!"
            form="Volunteer"
            formLink="volunteer"
          />
        </div>
      </div>
    </div>
  );
};

export default Supports;
