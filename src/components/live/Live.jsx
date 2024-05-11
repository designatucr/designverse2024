import Footer from "../Footer";
import About from "../About";
import Support from "../Supports";
import Leads from "../Leads";
import FAQ from "../FAQ";
import Navigation from "./Navigation";
import Tracks from "../Tracks";
import Schedule from "../schedule/Schedule";
import Committees from "../Committees";
import Sponsors from "../Sponsors";
import Resources from "../Resources";
import Landing from "../Landing";
import Judges from "../Judges";
const Live = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden relative font-workSans">
      <Navigation />
      <Landing />
      <About />
      <Support />
      <Schedule />
      <Tracks />
      <Sponsors />
      <Judges />
      <Leads />
      <Committees />
      <Resources />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Live;
