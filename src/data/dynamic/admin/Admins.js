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
    text: "accept",
    value: 1,
  },
  {
    text: "reject",
    value: -1,
  },
];

export const HEADERS = [
  { text: "name", size: "w-2/12", icon: true, sort: "off" },
  { text: "email", size: "w-3/12", icon: true, sort: "off" },
  { text: "discord", size: "w-2/12", icon: true, sort: "off" },
  {
    text: "affiliation",
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
