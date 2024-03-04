const Specifications = ({ product }) => {
  return (
    <div className="flex flex-col gap-2 max-w-4xl">
      <span className="text-base sm:text-lg">{product.specification}</span>
    </div>
  );
};
export default Specifications;
