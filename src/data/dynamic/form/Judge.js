import { GENDERS } from "./Information";
import { SHIRTS } from "./Information";
import { METADATA } from "@/data/Config";
import { phone } from "@/data/dynamic/form/Regex";

export const AFFILIATIONS = {
  professor: "Professor",
  student: "Student",
  industry: "Industry",
};

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${METADATA.name}. Thank you for being on the organizing team, we appreciate your efforts to help support ${METADATA.name}.`,
      `${METADATA.name} is ${METADATA.description} On ${METADATA.date} over the course of ${METADATA.length}, you’ll be able to challenge your problem solving skills, create innovative prototypes, and engage with a panel of industry experts!`,
      "Judges are not required to stay the full duration of the event, but are encouraged to checkout the various events, workshops, and opportunities that are available.",
      "Judge duties include but are not limited to visiting various teams to access teams on their idea, technical complexities and overall presentation after which they will decide the winners.",
      "Note: Judges are not permitted to become participants for the designathon.",
    ],
  },
  name: {
    input: "input",
    name: "name",
    type: "text",
    title: "Name",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
  email: {
    input: "input",
    name: "email",
    type: "email",
    title: "Email Address",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
  phone: {
    input: "input",
    name: "phone",
    type: "phone",
    title: "Phone Number",
    placeholder: "123 456 7890",
    maxLength: 50,
    width: 12,
    required: true,
    regex: phone,
  },
  gender: {
    input: "radio",
    text: "Gender",
    options: GENDERS,
    field: "gender",
    width: 12,
    required: true,
  },
  shirt: {
    input: "radio",
    text: "Shirt Size",
    options: SHIRTS,
    field: "shirt",
    width: 12,
    required: true,
  },

  affiliation: {
    input: "radio",
    text: "Affiliation",
    options: AFFILIATIONS,
    field: "affiliation",
    width: 12,
    required: true,
  },

  title: {
    input: "input",
    name: "title",
    type: "text",
    title: "Title",
    placeholder: "ie. Hackathon Director",
    maxLength: 50,
    width: 12,
    required: true,
  },
  photo: {
    input: "upload",
    field: "photo",
    text: "Upload Photo",
    width: 12,
    types: ["png", "jpg", "jpeg"],
    maxSize: [1, "MB"],
    required: true,
  },
  requirements: {
    text: "Terms and Conditions",
    input: "terms",
    width: 12,
    field: "requirements",
    required: true,
    options: [
      "I have read the DesignVerse code of conduct and agree to the terms and conditions listed",
      "I consent to photographs being taken and being used for future marketing purposes",
      "I consent to following the provided guidelines and rules instructed by the organizing team and understand that failure to comply with guidelines or creating an unsafe space will result in my removal from the event.",
      "I understand that my attendance is required either virtually or in person",
      "I understand that I must not uphold any biases or unfairness to participants",
    ],
  },
};

export const ATTRIBUTES = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  shirt: "",
  affiliation: "",
  title: "",
  photo: "",
  requirements: [],
};
