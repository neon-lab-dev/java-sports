const generateLink = ({ category, type }) => {
  const categoryParam = category.toLowerCase().replace(" ", "-");
  const typeParam = type.toLowerCase().replace(" ", "-");
  return `/${categoryParam}?type=${typeParam}`;
};

export default generateLink;
