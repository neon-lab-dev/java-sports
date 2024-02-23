const generateLink = ({ category, type }) => {
  const categoryParam = category.toLowerCase().split(" ").join("-");
  const typeParam = type.toLowerCase().split(" ").join("-");
  return `/${categoryParam}/${typeParam}`;
};

export default generateLink;
