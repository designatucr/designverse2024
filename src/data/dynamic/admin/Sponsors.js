export const FILTERS = {
  pending: {
    state: true,
    value: 0,
  },
  accepted: {
    state: true,
    value: 1,
  },
  rejected: {
    state: true,
    value: -1,
  },
};

export const TAGS = [
  {
    text: "confirm",
    value: 1,
  },
  {
    text: "not attending",
    value: -1,
  },
];

export const HEADERS = [
  { text: "name", size: "w-2/12", icon: true, sort: "off" },
  { text: "email", size: "w-3/12", icon: true, sort: "off" },
  { text: "phone", size: "w-2/12", icon: true, sort: "off" },
  { text: "company", size: "w-2/12", icon: true, sort: "off" },
  { text: "position", size: "w-2/12", icon: true, sort: "off" },
  {
    text: "tier",
    size: "w-2/12",
    icon: true,
    sort: "off",
    hasTag: true,
  },
  {
    text: "status",
    size: "w-2/12",
    icon: true,
    sort: "off",
    hasTag: true,
  },
];

export const STATUSES = {
  1: "accepted",
  0: "pending",
  "-1": "rejected",
};
