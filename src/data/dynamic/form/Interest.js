export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      "Welcome to DesignVerse. Thank you for taking interest in DesignVerse, we appreciate your efforts to help support DesignVerse.",
      "DesignVerse is UCR’s first ever UI/UX Design-a-Thon! On May 11, 2024 over the course of 24 hours, you’ll be able to challenge your problem solving skills, create innovative prototypes, and engage with a panel of industry experts!",
      "This is simply an interest form, once applications are released, you will be notified immediately and will be required to register again. We hope to see you there!",
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
};

export const ATTRIBUTES = {
  name: "",
  email: "",
};
