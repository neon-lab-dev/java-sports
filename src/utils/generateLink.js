const generateLink = ({ category, type }) => {
  const categoryParam = category.toLowerCase().replace(" ", "-");
  const typeParam = type.toLowerCase().replace(" ", "-");
  return `/${categoryParam}/${typeParam}`;
};

export default generateLink;
