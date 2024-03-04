const KeyFeatures = ({ product }) => {
  return (
    <div className="flex flex-col gap-2 max-w-4xl">
      <span className="text-base sm:text-lg">{product.keyFeatures}</span>
    </div>
  );
};
export default KeyFeatures;
