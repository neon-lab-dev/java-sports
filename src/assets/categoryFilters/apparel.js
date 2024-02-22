const APPAREL_FILTERS = [
  {
    title: "Size",
    options: ["S", "M", "L", "XL"],
    type: "multiselect",
  },
  {
    title: "Color",
    options: ["Red", "Blue", "Green", "Yellow"],
    type: "multiselect",
  },
  {
    title: "Price Range",
    min: 400,
    max: 2500,
    type: "range"
  },
];

export default APPAREL_FILTERS;