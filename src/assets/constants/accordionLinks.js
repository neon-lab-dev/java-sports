const ACCORDION_LINKS = [
  {
    label: "Clothing",
    type: "sub_category",
    queryAs: "Clothing",
    dropdowns: [
      {
        label: "All",
      },
      {
        label: "On-Field",
        queryAs: "On-Field",
      },
      {
        label: "Base Layer",
        queryAs: "Base Layer",
      },
      {
        label: "Athletic Supporter",
        queryAs: " Athletic Supporter",
      },
      {
        label: "Socks",
        queryAs: "Socks",
      },
      {
        label: "Caps & Hats",
        queryAs: "Caps%20%26%20Hats", // Caps & Hats => url encoded
      },
      {
        label: "Wrist Band",
        queryAs: "WristBand",
      },
    ],
    filters: null,
  },
  {
    label: "Batting Gear",
    type: "sub_category",
    queryAs: "Batting Gear",
    dropdowns: [
      {
        label: "All",
      },
      {
        label: "Gloves",
        queryAs: "Gloves",
      },
      {
        label: "Leg Guard",
        queryAs: "Leg Guard",
      },
      {
        label: "Inner Gloves",
        queryAs: "Inner Gloves",
      },
    ],
    filters: null,
  },
  {
    label: "Bat",
    type: "sub_category",
    queryAs: "Bat",
    dropdowns: [
      {
        label: "All",
      },
      {
        label: "English Willow",
        queryAs: "English Willow",
      },
      {
        label: "Kashmir Willow",
        queryAs: "Kashmir Willow",
      },
      {
        label: "Tennis",
        queryAs: "Tennis",
      },
      {
        label: "Player Edition",
        queryAs: "Player Edition",
      },
    ],
    filters: null,
  },
  {
    label: "Wicket Keeping",
    type: "sub_category",
    queryAs: "WicketKeeping",
    dropdowns: [
      {
        label: "All",
      },
      {
        label: "Gloves",
        queryAs: "WGloves",
      },
      {
        label: "Leg Guard",
        queryAs: "WLeg Guard",
      },
      {
        label: "Inner Gloves",
        queryAs: "WInner Gloves",
      },
    ],
    filters: null,
  },
  {
    label: "Shoes",
    type: "category",
    queryAs: "Shoes",
    dropdowns: [
      {
        label: "All",
      },
      {
        label: "Bowling",
        queryAs: "Bowling",
      },
      {
        label: "Spikes",
        queryAs: "Spikes",
      },
      {
        label: "Rubber Studs",
        queryAs: "Rubber Studs",
      },
    ],
  },
  {
    label: "Helmets",
    type: "category",
    queryAs: "Helmets",
    dropdowns: [
      {
        label: "All",
      },
      {
        label: "Steel",
        queryAs: "Steel",
      },
      {
        label: "Titanium",
        queryAs: "Titanium",
      },
      {
        label: "Limited Edition",
        queryAs: "Limited Edition",
      },
    ],
  },
  {
    label: "Bags",
    type: "sub_category",
    queryAs: "Bags",
    dropdowns: [
      {
        label: "All",
      },
      {
        label: "Kitbags",
        queryAs: "Kitbags",
      },
      {
        label: "Wheelie",
        queryAs: "Wheelie",
      },
      {
        label: "Duffle",
        queryAs: "Duffle",
      },
      {
        label: "Backpack",
        queryAs: "Backpack",
      },
      {
        label: "Bat Cover",
        queryAs: "Bat Cover",
      },
    ],
  },
  {
    label: "Protection",
    type: "sub_category",
    queryAs: "Protection",
    dropdowns: [
      {
        label: "All",
      },
      {
        label: "Thigh Pad",
        queryAs: "Thigh Pad",
      },
      {
        label: "Chest Guard",
        queryAs: "Chest Guard",
      },
      {
        label: "Arm Guard",
        queryAs: "Arm Guard",
      },
      {
        label: "Abdominal Guard",
        queryAs: "Abdominal Guard",
      },
      {
        label: "Inner ThighPad",
        queryAs: "Inner ThighPad",
      },
    ],
  },
  {
    label: "Accessories",
    type: "sub_category",
    queryAs: "Accessories",
    dropdowns: [
      {
        label: "All",
      },
      {
        label: "Bat Grips",
        queryAs: "Bat Grips",
      },
      {
        label: "Bat Care",
        queryAs: "Bat Care",
      },
      {
        label: "Stumps",
        queryAs: "Stumps",
      },
      {
        label: "Other",
        queryAs: "Other",
      },
    ],
  },
  {
    label: "Ball",
    type: "sub_category2",
    queryAs: "Ball",
    dropdowns: null,
    filters: null,
  },
];

export default ACCORDION_LINKS;
