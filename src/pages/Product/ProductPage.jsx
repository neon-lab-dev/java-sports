import heartIcon from "@/assets/icons/heart.svg";
import { calculatePercentage } from "@/utils/calculatePercentage";
import { useState } from "react";
import toast from "react-hot-toast";
// @ts-ignore
import addIcon from "@/assets/images/plus.svg";
// @ts-ignore
import removeIcon from "@/assets/images/minus.svg";

const ProductPage = ({ product }) => {
  const [selectedSpecs, setSelectedSpecs] = useState({
    size: product.sizes[0],
    quantity: 1,
    color: product.colors ? product.colors[0] : null,
  });

  const adjustCartQuantity = (isToIncrease) => {
    if (isToIncrease) {
      if (selectedSpecs.quantity < product.stock) {
        setSelectedSpecs((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
      } else {
        toast.error(`Only ${product.stock} items are available in stock`);
      }
    } else {
      if (selectedSpecs.quantity > 1) {
        setSelectedSpecs((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
      }
    }
  };

  const handleAddToCart = () => {
    toast.success(`${selectedSpecs.quantity} ${product.name} added to cart`);
  };

  return (
    <div className="grid grid-cols-2 gap-12 ">
      <div className="border-2 border-[#E4E4E4] rounded-md p-4 flex gap-4 justify-center items-start w-full relative">
        <div className="flex flex-col gap-3">
          {product.images.map((img, index) => {
            if (index === 0) return null; // skip the first image as it is already displayed as main image
            return (
              <div
                className="w-36 h-36 aspect-square border-[#E4E4E4] border-2 rounded-md p-3 border-opacity-40"
                key={index}
              >
                <img
                  src={img}
                  alt={product.name}
                  className="w-full h-full object-center object-contain"
                />
              </div>
            );
          })}
        </div>
        <div className="h-full w-full mx-auto flex items-center justify-center overflow-hidden p-3">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full max-h-[500px] object-center object-contain h-full"
          />
        </div>
        <button className="absolute top-4 right-4 cursor-pointer">
          <img src={heartIcon} alt="heart icon" />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-[600]">{product.name}</h1>
        <div className="flex flex-col gap-1 text-lg">
          <span className="text-primary text-sm font-500">Special Price </span>
          <div className="flex gap-3 items-center">
            <span className="text-neutral-black text-3xl font-500">
              ₹{product.baseprice}
            </span>
            <span className="text-[#999999] line-through">
              ₹{product.discountedprice}
            </span>
            <span className="text-[#00B553] font-500">
              {calculatePercentage(product.baseprice, product.discountedprice)}%
              off
            </span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <span className="font-500 text-neutral-black text-xl">Size</span>
          <div className="flex gap-3">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSpecs((prev) => ({ ...prev, size }))}
                className={`px-5 py-2 border-2 border-[#E4E4E4] rounded-md font-500 ${
                  selectedSpecs.size === size
                    ? "border-primary text-primary"
                    : "border-[#E4E4E4] text-neutral-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <hr />
        <div className="flex gap-6 items-center">
          <div className="font-[600] text-lg sm:text-xl flex flex-col gap-2">
            <span>Quantity</span>
            <div className="flex p-1 items-center justify-center gap-2 w-max border-grey/1 border-2 rounded-md">
              <button
                className="px-2 w-full h-full"
                onClick={() => adjustCartQuantity(false)}
              >
                <img src={removeIcon} alt="remove" />
              </button>
              <span className="border-x-2 border-grey/1 px-4">
                {selectedSpecs.quantity}
              </span>
              <button
                onClick={() => adjustCartQuantity(true)}
                className="px-2 w-full h-full"
              >
                <img src={addIcon} alt="add" />
              </button>
            </div>
          </div>
          {product.colors && (
            <>
              <hr className="h-[80%] w-[1.5px] bg-grey-light opacity-50 self-end" />
              <div className="font-[600] text-lg sm:text-xl flex flex-col gap-2">
                <span>Color</span>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      onClick={() =>
                        setSelectedSpecs((prev) => ({ ...prev, color }))
                      }
                      className={`w-8 h-8 rounded-full ${selectedSpecs.color === color ? "border-black border-[2.5px]" : "border-[#E4E4E4] border-2"} `}
                      key={index}
                      style={{ backgroundColor: color }}
                    />
                  ))}{" "}
                </div>
              </div>
            </>
          )}
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <span className="font-500 text-neutral-black text-xl">
            About the Product
          </span>
          <p className="text-neutral-black">{product.description}</p>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <span className="font-500 text-neutral-black text-xl">
            Shipping Details
          </span>
          <ul>
            {product.shippingDetails.map((detail, index) => (
              <li
                key={index}
                className="text-neutral-black list-disc list-inside ml-4"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <span className="font-500 text-neutral-black text-lg">
            In The Box
          </span>
          <ul>
            {product.inTheBox.map((detail, index) => (
              <li
                key={index}
                className="text-neutral-black list-disc list-inside ml-4 tex-xs"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-primary text-white py-3 rounded-md mt-2">
          Buy Now
        </button>
        <button
          onClick={handleAddToCart}
          className="rounded-md border-2 border-grey-dark py-3"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductPage;
