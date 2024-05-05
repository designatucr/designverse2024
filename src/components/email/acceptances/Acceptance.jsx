import Mentor from "./Mentor";
import Participant from "./Participant";
import Volunteer from "./Volunteer";

const Acceptance = ({ name, position, preview }) => {
  if (position === "mentor") return <Mentor name={name} preview={preview} />;
  if (position === "volunteer")
    return <Volunteer name={name} preview={preview} />;
  if (position === "participant")
    return <Participant name={name} preview={preview} />;
};

export default Acceptance;
