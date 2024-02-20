//this same component is created in another branch ui/cart-page as reusable component,
//so for now this is the duplicate code and will be removed after merging the branch
const Text = ({ text, subText }) => {
  return (
    <span className="font-600 text-lg sm:text-xl">
      {text}:{" "}
      <span className="text-grey/6 font-400 text-base sm:text-lg">
        {subText}
      </span>
    </span>
  );
};

export default Text;
