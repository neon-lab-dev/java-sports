// @ts-nocheck
import heartIcon from "@/assets/icons/heart.svg";
import crossIcon from "@/assets/icons/cross.svg";
import { calculatePercentage } from "@/utils/calculatePercentage";
import wishlistIcon from "@assets/icons/wishlist-filled.svg";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishlist, removeFromWishlist } from "@/api/products";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { splitString } from "@/utils/splitString";
import noImage from "@assets/images/no-image.jpg";
/**
 * @props
 * Title
 * Image
 * Price
 * Discounted price
 */

const AppCard = ({ product, className = "" }) => {
  const { user } = useSelector((state) => state.user);
  const isWishlisted = user?.wishlist.filter(
    (item) => item.product === product._id
  ).length;
  const queryClient = useQueryClient();

  const handleAddToCart = () => {
    const items = getLocalStorage("cartItems", []);
    let updatedItems = [];
    const isAlreadyAdded = items.find((item) => item.id === product._id);
    if (isAlreadyAdded) {
      updatedItems = items.map((item) =>
        item.id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedItems = [
        ...items,
        {
          id: product._id,
          product: product._id,
          quantity: 1,
          color: product.color,
          size: splitString(product.size)[0],
          name: product.name,
          image: product.images[0].url,
          price: product.discountedprice,
          basePrice: product.baseprice,
        },
      ];
    }
    setLocalStorage("cartItems", updatedItems);
    toast.success(`Added ${product.name} to cart!`);
  };

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
    <div
      className={`sm:min-w-[300px] snap-center xs:snap-start min-w-[230px] card-shadow rounded-xl p-3 sm:p-4 flex flex-col gap-2 "h-[330px] sm:h-[400px] ${className}`}
    >
      <div className="flex justify-between items-center">
        <span className="font-Lato font-700 text-[11px] text-grey-light">
          Java Sports
        </span>
        <button
          disabled={isPending}
          onClick={handleWishlist}
          className="cursor-pointer"
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
      <Link
        to={`/product/${product._id}`}
        className="max-w-full max-h-[200px] sm:max-h-[240px] sm:h-[240px]  bg-[#F2F2F2] rounded-md group overflow-hidden"
      >
        <img
          src={product?.images[0]?.url || noImage}
          alt={product.name}
          onError={(e) => (e.currentTarget.src = noImage)} // set this image if the provided url does not work
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-all"
        />
      </Link>
      <Link
        to={`/product/${product._id}`}
        className="text-base sm:text-lg hover:underline hover:text-blue transition-all"
      >
        {
          //show only four words
          product.name.split(" ").slice(0, 4).join(" ")
        }
      </Link>
      <div className={`flex justify-between items-center`}>
        <span className="flex gap-2 items-center">
          <span className="font-Lato font-700">₹{product.discountedprice}</span>
          <span className="font-Lato font-500 text-[0.65rem] sm:text-xs line-through">
            ₹{product.baseprice}
          </span>
          <span className="text-[#00B553] font-500">
            {calculatePercentage(product.baseprice, product.discountedprice)}%
            off
          </span>
        </span>
        <button onClick={handleAddToCart}>
          <img
            src={wishlistIcon}
            alt="Add to Cart"
            className="w-9 sm:w-10 h-9 sm:h-10"
          />
        </button>
      </div>
    </div>
  );
};
export default AppCard;
