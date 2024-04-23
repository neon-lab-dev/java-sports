import React from "react";

const KeyFeatures = ({ product }) => {
  return (
    <div className="flex flex-col gap-2 max-w-4xl">
      <span className="text-base sm:text-lg">
        {product.keyFeatures.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </span>
    </div>
  );
};
export default KeyFeatures;
