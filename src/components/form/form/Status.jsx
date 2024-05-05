import Tag from "../../admin/Tag";
import { COLORS } from "@/data/Tags";
import Button from "@/components/Button.jsx";

const Status = ({ object, statuses, setState }) => {
  return (
    <div className="flex flex-col items-center justify-center font-workSans font-normal">
      <div>
        Hello <b>{object.name}</b>, your status is currently
      </div>
      <Tag
        color={COLORS[object.roles[object.form]]}
        text={statuses[object.roles[object.form]]}
        classes="my-2"
      />
      <div className="text-center">
        You have already filled out the form. If you wish to change any
        information, please fill out the form again. Note that your status will
        change until approved by an admin.
      </div>
      <div className="text-center">
        If you believe that your status is incorrect, please reach out to us
        immediately.
      </div>

      <Button text="Apply Again" onClick={() => setState(1)} color="form" />
    </div>
  );
};

export default Status;
