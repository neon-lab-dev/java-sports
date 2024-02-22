// @ts-nocheck
import heartIcon from "@/assets/icons/heart.svg";
import wishlistIcon from "@assets/icons/wishlist-filled.svg";
import toast from "react-hot-toast";

/**
 * @props
 * Title
 * Image
 * Price
 * Discounted price
 */

const AppCard = ({ title, image, price, discounted, className = "" }) => {
  const handleAddToCart = () => {
    toast.success(`Added ${title} to cart!`);
  };

  const handleAddToWishlist = () => {
    toast.success(`Added ${title} to wishlist!`);
  };

  return (
    <article
      className={`h-[279px] min-w-[171px] sm:h-[350px] sm:min-w-64 lg:min-w-72 w-64 rounded-xl bg-neutral-white p-3 sm:p-5 border card-shadow flex flex-col gap-3 ${className}`}
    >
      <div className="flex justify-between items-center">
        <span className="font-Lato font-700 text-[11px] text-grey-light">
          Java Sports
        </span>
        <button onClick={handleAddToWishlist} className="cursor-pointer">
          <img src={heartIcon} alt="Wishlist" className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>
      <div className="bg-grey/1 flex justify-center items-center overflow-hidden rounded-xl p-2 max-h-full max-w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center "
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm sm:text-lg">{title}</span>
        <div className="flex justify-between items-center">
          <span className="flex gap-2 items-center">
            <span className="font-Lato font-700">₹{price}</span>
            <span className="font-Lato font-500 text-[0.65rem] sm:text-xs line-through">
              ₹{discounted}
            </span>
          </span>
          <button onClick={handleAddToCart}>
            <img src={wishlistIcon} alt="Add to Cart" className="w-8 sm:w-10 h-8 sm:h-10" />
          </button>
        </div>
      </div>
    </article>
  );
};
export default AppCard;
