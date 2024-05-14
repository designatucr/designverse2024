import Footer from "../Footer";
import About from "../About";
import Leads from "../Leads";
import FAQ from "../FAQ";
import Tracks from "../Tracks";
import Schedule from "../schedule/Schedule";
import Committees from "../Committees";
import Sponsors from "../Sponsors";
import Resources from "../Resources";
import Landing from "../Landing";
import Judges from "../Judges";
const Postlive = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden relative font-workSans">
      <Landing />
      <About />
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

export default Postlive;
