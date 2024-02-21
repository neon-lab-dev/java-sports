import heartIcon from "@/assets/icons/heart.svg";
import { calculatePercentage } from "@/utils/calculatePercentage";
import buttonNextSlide from "@/assets/images/Button - Next slide.svg";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toast from "react-hot-toast";
// @ts-ignore
import addIcon from "@/assets/images/plus.svg";
// @ts-ignore
import removeIcon from "@/assets/images/minus.svg";
import Slider from "react-slick";
import HoverImagePreview from "./HoverImagePreview";

const ProductPage = ({ product }) => {
  let sliderRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const imgRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
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

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top; //y position within the element.
    //convert the x and y to percentage
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    setCursorPosition({ x: xPercent, y: yPercent });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 pt-8">
      {/* //image gallery for large screens */}
      <div className="border-2 border-[#E4E4E4] rounded-md p-4 gap-2 sm:gap-4 justify-center items-start w-full relative hidden sm:flex max-h-[80vh]">
        <div className="flex flex-col gap-3">
          {product.images.map((img, index) => {
            if(index > 3) return null;
            return (
              <div
                className={`w-24 h-24 aspect-square border-2 rounded-md p-3 border-opacity-40 ${activeImage === index ? "border-black" : "border-[#E4E4E4]"}`}
                key={index}
                onMouseEnter={() => setActiveImage(index)}
              >
                <img
                  loading="lazy"
                  src={img}
                  alt={product.name}
                  className="w-full h-full object-center object-contain"
                />
              </div>
            );
          })}
        </div>
        <div className="h-full w-full mx-auto flex items-center justify-center overflow-hidden p-3">
          <div className="w-full flex items-center justify-center relative overflow-hidden max-h-full">
            <img
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleMouseMove}
              ref={imgRef}
              src={product.images[activeImage]}
              alt={product.name}
              className="object-center object-contain max-h-96 h-full w-full lg:max-h-[calc(80vh-4rem)] border-2 border-white hover:border-[#e4e4e464] rounded-md "
            />
            <div
              className="h-32 w-32 bg-gray-400 bg-opacity-0 lg:bg-opacity-40 absolute transition-opacity"
              style={{
                top: `${cursorPosition.y}%`,
                left: `${cursorPosition.x}%`,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                opacity: isHovering ? 1 : 0,
              }}
            />
          </div>
        </div>
        <button className="absolute top-4 right-4 cursor-pointer">
          <img src={heartIcon} alt="heart icon" />
        </button>
      </div>
      {/* //image gallery for small screens */}
      <div className="w-full sm:hidden">
        <Slider
          // @ts-ignore
          ref={(slider) => (sliderRef = slider)}
          {...{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            lazyLoad: "ondemand",
          }}
          className="flex w-full"
        >
          {product.images.map((img, index) => (
            <div
              key={index}
              className="w-full relative p-4 px-12 rounded-lg border-2 border-[#E4E4E4] "
            >
              <button className="absolute top-4 right-4 cursor-pointer">
                <img src={heartIcon} alt="heart icon" />
              </button>
              <button
                // @ts-ignore
                onClick={() => sliderRef.slickNext()}
                className="absolute top-1/2 right-2  transform -translate-y-1/2"
              >
                <img src={buttonNextSlide} alt="next slide" />
              </button>
              <button
                // @ts-ignore
                onClick={() => sliderRef.slickPrev()}
                className="absolute top-1/2 left-2 transform rotate-180 -translate-y-1/2"
              >
                <img src={buttonNextSlide} alt="next slide" />
              </button>
              <img
                src={img}
                alt={product.name}
                className="w-full min-h-64 h-64 object-center object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col gap-4 relative">
        {/* image preview thing */}
        <HoverImagePreview
          img={product.images[activeImage]}
          show={isHovering}
          cursorPosition={cursorPosition}
        />
        <h1 className="text-2xl lg:text-3xl font-[600]">{product.name}</h1>
        <div className="flex flex-col gap-1 text-base sm:text-lg">
          <span className="text-primary text-xs sm:text-sm font-500">
            Special Price{" "}
          </span>
          <div className="flex gap-3 items-center">
            <span className="text-neutral-black text-2xl lg:text-3xl font-500">
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
        <div className="flex flex-col gap-1 sm:gap-2">
          <span className="font-500 text-neutral-black text-xl">Size</span>
          <div className="flex gap-3 flex-wrap">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSpecs((prev) => ({ ...prev, size }))}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 border-2 border-[#E4E4E4] rounded-md font-500 ${
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
        <div className="flex gap-2 sm:gap-6 flex-col lg:flex-row">
          <div className="font-[600] text-lg sm:text-xl flex flex-col gap-2">
            <span>Quantity</span>
            {product.stock > 0 ? (
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
            ) : (
              <span className="text-primary">Out of stock</span>
            )}
          </div>
          {product.colors && (
            <>
              <hr className="h-[80%] w-[1.5px] bg-grey-light opacity-50 self-end hidden md:block" />
              <hr className=" bg-grey-light opacity-50 md:hidden" />
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
        <button
          disabled={product.stock === 0}
          className="bg-primary text-white py-3 rounded-md mt-2 disabled:opacity-50"
        >
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