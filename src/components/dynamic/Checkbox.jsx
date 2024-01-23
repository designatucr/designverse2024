import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({
  toggle,
  onClick = () => {},
  text = "",
  color,
  "data-cy": dataCy,
}) => {
  return (
    <div
      className="flex items-center hover:cursor-pointer w-fit"
      onClick={onClick}
      data-cy="checkbox"
    >
      <div
        data-cy="checkbox-bg"
        className={`w-4 h-4 rounded-sm ${
          toggle ? `${color ? color : "bg-design-beige"}` : "bg-design-beige "
        } flex items-center justify-center`}
      >
        <BsCheckLg
          data-cy="checkmark"
          className={`${
            toggle ? "text-design-brown-300" : "text-design-beige"
          } text-lg`}
        />
      </div>
      {text && <p className="my-0 pt-0">{text}</p>}
    </div>
  );
};

export default Checkbox;
