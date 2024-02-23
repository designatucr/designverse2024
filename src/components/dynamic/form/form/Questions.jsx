import Select from "@/components/dynamic/Select";
import Radio from "@/components/dynamic/Radio";
import Checkbox from "@/components/dynamic/Checkbox";
import Input from "@/components/dynamic/Input";
import Button from "@/components/dynamic/Button.jsx";
import Textarea from "@/components/dynamic/form/form/Textarea.jsx";
import Upload from "@/components/dynamic/form/form/Upload";
import toaster from "@/utils/toaster";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { CONFIG } from "@/data/Config";
import Terms from "./Terms";

const Questions = ({
  fields,
  object,
  setObject,
  onSubmit,
  loading,
  setLoading,
  setState,
  packet = false,
}) => {
  const handleSubmit = () => {
    setLoading(true);

    if (
      Object.entries(fields).some(
        ([key, value]) =>
          value.required &&
          (!object[key] ||
            object[key] === "" ||
            object[key].includes("Invalid"))
      )
    ) {
      toaster("Please complete all required fields!", "error");
      setLoading(false);
      return;
    }
    if (
      fields.requirements &&
      fields.requirements.options.some(
        (requirement) => !object.requirements.includes(requirement)
      )
    ) {
      toaster("Please agree to all the terms!", "error");
      setLoading(false);
      return;
    }
    if (fields.availability && object.availability.length === 0) {
      toaster("Please select at least one available time!", "error");
      setLoading(false);
      return;
    }

    onSubmit(setLoading, setState);
  };

  return (
    <div className="flex flex-col w-full  font-normal font-workSans">
      {Object.values(fields).map((field, index) => (
        <div key={index}>
          {field.input === "description" &&
            field.texts.map((description, index) => (
              <div key={index}>
                <div>
                  {description.split(" ").map((word, key) =>
                    word.includes("DesignVerse") ? (
                      <span
                        className="font-workSans text-design-brown-400 font-semibold"
                        key={key}
                      >
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={key}>{word} </span>
                    )
                  )}
                </div>
                &nbsp;
                {index === field.texts.length - 1 && (
                  <div>
                    {packet && (
                      <Link
                        href={CONFIG.packet}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="no-underline flex items-center text-design-orange mb-2"
                      >
                        Sponsorship Packet
                        <FaLink className="mx-2" />
                      </Link>
                    )}
                    Fields with
                    <span className="text-design-orange"> * </span>
                    are required.
                  </div>
                )}
              </div>
            ))}
          {field.input === "input" && (
            <Input
              name={field.name}
              type={field.type}
              title={field.title}
              placeholder={field.placeholder}
              value={object[field.name]}
              maxLength={field.maxLength}
              user={object}
              setUser={setObject}
              required={field.required}
              editable={field.editable}
              regex={field.regex}
            />
          )}
          {field.input === "select" && (
            <Select
              title={field.title}
              items={field.options}
              field={field.field}
              placeholder={field.placeholder}
              user={object}
              setUser={setObject}
              required={field.required}
              searchable={field.searchable}
            />
          )}
          {field.input === "checkboxes" && (
            <>
              <p className="mb-2 font-regular">
                {field.text}
                {field.required && (
                  <span className="text-design-orange">*</span>
                )}
              </p>
              {field.options.map((option, i) => (
                <Checkbox
                  key={i}
                  toggle={object[field.field].includes(option)}
                  text={option}
                  onClick={() =>
                    setObject({
                      ...object,
                      [field.field]: object[field.field].includes(option)
                        ? object[field.field].filter((item) => item !== option)
                        : [...object[field.field], option],
                    })
                  }
                  color="bg-design-green-light"
                />
              ))}
              <br />
            </>
          )}
          {field.input === "terms" && (
            <Terms
              options={field.options}
              toggle={object[field.field].length === field.options.length}
              onClick={() => {
                setObject({
                  ...object,
                  [field.field]:
                    object[field.field].length === field.options.length
                      ? []
                      : [...field.options],
                });
              }}
            />
          )}
          {field.input === "radio" && (
            <Radio
              text={field.text}
              options={field.options}
              field={field.field}
              user={object}
              setUser={setObject}
              required={field.required}
            />
          )}
          {field.input === "textarea" && (
            <Textarea
              name={field.name}
              rows={field.rows}
              title={field.title}
              placeholder={field.placeholder}
              value={object[field.name]}
              user={object}
              setUser={setObject}
              required={field.required}
            />
          )}
          {field.input === "upload" && (
            <Upload
              field={field.field}
              text={field.text}
              maxSize={field.maxSize}
              types={field.types}
              user={object}
              setUser={setObject}
              required={field.required}
            />
          )}
        </div>
      ))}
      <div className="font-regular mt-3">Resources</div>
      <Link
        href="/files/DesignVerseCodeofConduct.pdf"
        target="_blank"
        className="no-underline flex items-center text-design-orange"
      >
        DesignVerse Code Of Conduct
        <FaLink className="mx-2" />
      </Link>
      <div className="flex justify-center">
        <Button
          text="submit"
          onClick={handleSubmit}
          loading={loading}
          color="green"
        />
      </div>
    </div>
  );
};

export default Questions;
