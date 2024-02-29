// @ts-nocheck
import heartIcon from "@/assets/icons/heart.svg";
import crossIcon from "@/assets/icons/cross.svg";
import { calculatePercentage } from "@/utils/calculatePercentage";
import wishlistIcon from "@assets/icons/wishlist-filled.svg";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

/**
 * @props
 * Title
 * Image
 * Price
 * Discounted price
 */

const AppCard = ({ product, className = "" }) => {
  const isWislisted = false;
  const handleAddToCart = () => {
    toast.success(`Added ${product.name} to cart!`);
  };

  const handleAddToWishlist = () => {
    toast.success(`Added ${product.name} to wishlist!`);
  };

  return (
    <div
      className={`sm:min-w-[300px] snap-center xs:snap-start min-w-[230px] card-shadow rounded-xl p-3 sm:p-4 flex flex-col gap-2 "h-[330px] sm:h-[400px] ${className}`}
    >
      <div className="flex justify-between items-center">
        <span className="font-Lato font-700 text-[11px] text-grey-light">
          Java Sports
        </span>
        <button onClick={handleAddToWishlist} className="cursor-pointer">
          <img
            src={!isWislisted ? heartIcon : crossIcon}
            alt="Wishlist"
            className="w-7 h-7 sm:w-8 sm:h-8"
          />
        </button>
      </div>
      <div className="max-w-full max-h-[200px] sm:max-h-[240px] sm:h-[240px]  bg-[#F2F2F2] rounded-md">
        <img
          src={product.images[0].url}
          alt={product.name}
          className="w-full h-full object-contain object-center "
        />
      </div>
      <Link to={`/product/${product._id}`} className="text-base sm:text-lg hover:underline hover:text-blue transition-all">
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
