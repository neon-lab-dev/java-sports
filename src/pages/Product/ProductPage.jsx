import heartIcon from "@/assets/icons/heart.svg";
import { calculatePercentage } from "@/utils/calculatePercentage";
import buttonNextSlide from "@/assets/images/Button - Next slide.svg";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import crossIcon from "@/assets/icons/cross.svg";

import toast from "react-hot-toast";
// @ts-ignore
import addIcon from "@/assets/images/plus.svg";
// @ts-ignore
import removeIcon from "@/assets/images/minus.svg";
import Slider from "react-slick";
import HoverImagePreview from "./HoverImagePreview";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { splitString } from "@/utils/splitString";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishlist, removeFromWishlist } from "@/api/products";
import { ClipLoader, MoonLoader } from "react-spinners";
import { updateCartItemsCount } from "@/redux/slices/userSlice";

const ProductPage = ({ product }) => {
  const dispatch = useDispatch();
  let sliderRef = useRef(null);
  const { user } = useSelector((state) => state.user);
  const [isHovering, setIsHovering] = useState(false);
  const imgRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSpecs, setSelectedSpecs] = useState({
    size: splitString(product.size)[0],
    quantity: 1,
    color: splitString(product.Availablecolor)[0],
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

  const handleAddToCart = (quantity) => {
    const items = getLocalStorage("cartItems", []);
    let updatedItems = [];
    const isAlreadyAdded = items.find((item) => item.id === product._id);
    if (isAlreadyAdded) {
      updatedItems = items.map((item) =>
        item.id === product._id ? { ...item, quantity } : item
      );
    } else {
      updatedItems = [
        ...items,
        {
          id: product._id,
          product: product._id,
          quantity: selectedSpecs.quantity,
          color: selectedSpecs.color,
          size: selectedSpecs.size,
          name: product.name,
          image: product.images[0].url,
          price: product.discountedprice,
          basePrice: product.baseprice,
        },
      ];
    }
    setLocalStorage("cartItems", updatedItems);
    toast.success(`Added ${product.name} to cart!`);
    dispatch(updateCartItemsCount());
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

  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleBuyNow = () => {
    if (isAuthenticated) {
      localStorage.removeItem("buyNowProduct");
      setLocalStorage("buyNowProduct", {
        id: product._id,
        product: product._id,
        quantity: selectedSpecs.quantity,
        color: selectedSpecs.color,
        size: selectedSpecs.size,
        name: product.name,
        image: product.images[0].url,
        price: product.discountedprice,
        basePrice: product.baseprice,
      });
      navigate("/checkout?buyNow=true");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login to place an order!",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login?redirect=/product/" + product._id);
        }
      });
    }
  };

  const isWishlisted = user?.wishlist.filter(
    (item) => item.product === product._id
  ).length;
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id) =>
      isWishlisted ? removeFromWishlist(id) : addToWishlist(id),
    onSuccess: () => {
      toast.success(
        `${isWishlisted ? "Removed" : "Added"} ${product.name} ${
          isWishlisted ? "from" : "to"
        } wishlist!`
      );
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const handleWishlist = () => {
    mutate(product._id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 pt-8">
      {/* //image gallery for large screens */}
      <div className="border-2 border-[#E4E4E4] rounded-md p-4 gap-2 sm:gap-4 justify-center items-start w-full relative hidden sm:flex max-h-[80vh]">
        <div className="flex flex-col gap-5">
          {product.images.map((img, index) => {
            if (index > 3) return null;
            return (
              <div
                className={`w-24 h-24 aspect-square border-2 rounded-md p-3 border-opacity-40 ${activeImage === index ? "border-black" : "border-[#E4E4E4]"}`}
                key={index}
                onMouseEnter={() => setActiveImage(index)}
              >
                <img
                  loading="lazy"
                  src={img.url}
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
              src={product.images[activeImage].url}
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
        <button
          onClick={handleWishlist}
          disabled={isPending}
          className="absolute top-2 right-2 cursor-pointer"
        >
          {isPending ? (
            <ClipLoader size={26} color="#00B553" />
          ) : (
            <img
              src={!isWishlisted ? heartIcon : crossIcon}
              alt="Wishlist"
              className="w-7 h-7 sm:w-8 sm:h-8 hover:text-primary`"
            />
          )}
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
                src={img.url}
                className="w-full min-h-64 h-64 object-center object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col gap-4 relative">
        {/* image preview thing */}
        <HoverImagePreview
          img={product.images[activeImage].url}
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
            {splitString(product.size).map((size, index) => (
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
              <div className="flex p-1 items-center justify-center w-max border-grey/1 border-2 rounded-md">
                <button
                  className="px-3 w-full h-full"
                  onClick={() => adjustCartQuantity(false)}
                >
                  <img src={removeIcon} alt="remove" />
                </button>
                <span className="border-x-2 border-grey/1 px-4">
                  {selectedSpecs.quantity}
                </span>
                <button
                  onClick={() => adjustCartQuantity(true)}
                  className="px-3 w-full h-full"
                >
                  <img src={addIcon} alt="add" />
                </button>
              </div>
            ) : (
              <span className="text-primary">Out of stock</span>
            )}
          </div>
          {product.color && (
            <>
              <hr className="h-[80%] w-[1.5px] bg-grey-light opacity-50 self-end hidden md:block" />
              <hr className=" bg-grey-light opacity-50 md:hidden" />
              <div className="font-[600] text-lg sm:text-xl flex flex-col gap-2">
                <span>Color</span>
                <div className="flex gap-3">
                  {splitString(product.Availablecolor).map((color, index) => (
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
          {/* <ul> //todo
            {product.shippingDetails.map((detail, index) => (
              <li
                key={index}
                className="text-neutral-black list-disc list-inside ml-4"
              >
                {detail}
              </li>
            ))}
          </ul> */}
        </div>
        <button
          onClick={handleBuyNow}
          disabled={product.stock < 1}
          className="bg-primary text-white py-3 rounded-md mt-2 disabled:opacity-50"
        >
          Buy Now
        </button>
        <button
          disabled={product.stock < 1}
          onClick={() => handleAddToCart(selectedSpecs.quantity)}
          className="rounded-md border-2 border-grey-dark py-3 disabled:opacity-50"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductPage;
