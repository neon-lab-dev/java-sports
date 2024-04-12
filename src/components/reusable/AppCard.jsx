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
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { splitString } from "@/utils/splitString";
import noImage from "@assets/images/no-image.jpg";
import { updateCartItemsCount } from "@/redux/slices/userSlice";
import ReactGA from "react-ga";
import { getPriceAfterDiscount } from "@/utils/getPriceAfterDiscount";

const AppCard = ({ product, className = "" }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const isWishlisted = user?.wishlist.filter(
    (item) => item.product === product._id
  ).length;
  const queryClient = useQueryClient();

  const handleAddToCart = () => {
    ReactGA.event({
      category: "Cart Items",
      action: `Added ${product.name} to cart with id ${product._id}`,
    });
    const items = getLocalStorage("cartItems", []);
    //remove the item if it is already added
    const newItems = items.filter((item) => item.id !== product._id);

    const updatedItems = [
      ...newItems,
      {
        id: product._id,
        product: product._id,
        quantity: 1,
        color: product.color,
        size: splitString(product.size)[0],
        name: product.name,
        image: product.images[0].url,
        price: getPriceAfterDiscount(product.baseprice, product.discount),
        basePrice: product.baseprice,
      },
    ];
    setLocalStorage("cartItems", updatedItems);
    toast.success(`Added ${product.name} to cart!`);
    dispatch(updateCartItemsCount());
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
    if (isWishlisted) {
      ReactGA.event({
        category: "Wishlist",
        action: `Removed ${product.name} from wishlist with id ${product._id}`,
      });
    } else {
      ReactGA.event({
        category: "Wishlist",
        action: `Added ${product.name} to wishlist with id ${product._id}`,
      });
    }
    mutate(product._id);
  };

  const isOutOfStock = product.stock === 0;

  return (
    <div
      className={`sm:min-w-[300px] w-full xs:w-auto snap-center xs:snap-start min-w-[230px] card-shadow rounded-xl p-3 sm:p-4 flex flex-col gap-2 "h-[330px] sm:h-[400px] ${className}`}
    >
      <div className="flex justify-between items-center w-full">
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
        className="max-w-full max-h-[200px] h-[220px] sm:max-h-[240px] relative sm:h-[240px]  bg-[#F2F2F2] rounded-md group overflow-hidden w-full"
      >
        <img
          src={product?.images[0]?.url || noImage}
          alt={product.name}
          onError={(e) => (e.currentTarget.src = noImage)} // set this image if the provided url does not work
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain object-center group-hover:scale-105 transition-all"
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
          <span className="font-Lato font-700">
            ₹{getPriceAfterDiscount(product.baseprice, product.discount)}
          </span>
          <span className="font-Lato font-500 text-[0.65rem] sm:text-xs line-through">
            ₹{product.baseprice}
          </span>
          <span className="text-[#00B553] font-500">
            {product.discount || 0}% off
          </span>
        </span>
        {!isOutOfStock && (
          <button onClick={handleAddToCart}>
            <img
              src={wishlistIcon}
              alt="Add to Cart"
              className="w-9 sm:w-10 h-9 sm:h-10"
            />
          </button>
        )}
      </div>
      {isOutOfStock && (
        <div className="text-red-500 font-900 font-Lato justify-center flex ">
          Out of stock
        </div>
      )}
    </div>
  );
};
export default AppCard;
