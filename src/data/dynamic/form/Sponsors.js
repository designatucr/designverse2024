export const TIERS = [
  "Bronze", // change for different hackathons
  "Silver",
  "Gold",
  "Other",
];

export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      "Welcome to DesignVerse. Thank you for considering to become a sponsor, we appreciate your efforts to help support DesignVerse.",
      "DesignVerse is UCR’s first ever UI/UX Design-a-Thon! On May 11, 2024 over the course of 24 hours, you’ll be able to challenge your problem solving skills, create innovative prototypes, and engage with a panel of industry experts!",
      "By sponsoring DesignVerse, you help advocate for SPONSOR_REASONS.",
      "Sponsors are not required to stay the full duration of the event, but are encouraged to checkout the various events, workshops, and opportunities that are available.",
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
  },
  company: {
    input: "input",
    name: "company",
    type: "text",
    title: "Company Name",
    placeholder: "MLH",
    maxLength: 50,
    width: 12,
    required: true,
  },
  position: {
    input: "input",
    name: "position",
    type: "text",
    title: "Position",
    placeholder: "recruitment",
    maxLength: 50,
    width: 12,
    required: true,
  },
  tier: {
    input: "radio",
    text: "Sponsorship Tier (check sponsorship packet)",
    options: TIERS,
    field: "tier",
    width: 12,
    required: true,
  },
  requirements: {
    text: "Terms and Conditions",
    input: "checkboxes",
    width: 12,
    field: "requirements",
    options: [
      "I have read the DesignVerse code of conduct and agree to the terms and conditions listed. I consent to photographs being taken and being used for future marketing purposes. I consent to photographs being taken and being used for future marketing purposes. I consent to providing a safe space for designers to learn and grow their interests in designing. I consent to following the provided guidelines and rules instructed by the organizing team. I understand that failure to comply with guidelines or creating an unsafe space will result in my removal from the event. I understand this is an in person event taking place in UCR and I must attend in person in order to participate. I understand that I will be given access to private data and malicious intents and actions will be reported immediately.",
    ],
    required: true,
  },
};

export const ATTRIBUTES = {
  name: "",
  email: "",
  phone: "",
  company: "",
  position: "",
  tier: "",
  requirements: [],
};
