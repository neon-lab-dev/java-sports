import PRODUCTS from "@/assets/mockData/products";
import TextSubtext from "@/components/reusable/AppTextSubtext";
import { adjustCartQuantity, removeCartItem } from "@/utils/cartUtils";

// @ts-ignore
import addIcon from "@/assets/icons/add-icon.svg";
// @ts-ignore
import removeIcon from "@/assets/icons/remove.svg";
import { todayPlusDays } from "@/utils/dateUtils";
import { calculatePercentage } from "@/utils/calculatePercentage";
import { Link } from "react-router-dom";

const CartItem = ({ item, setCartItems, cartItems }) => {
  const { isError, isLoading, data } = item;

  if (isLoading) return null;
  if (isError) return null;

  const quantity =
    cartItems.find((cartItem) => cartItem.id === item.data.product._id)
      .quantity || 1;

  return (
    <div className="flex flex-col sm:flex-row gap-3 shadow p-3 rounded-md">
      <Link
        to={`/product/${data.product._id}`}
        className="h-60 bg-grey/1 rounded-lg p-2 lg:h-64 object-contain object-center sm:max-w-none md:w-96 lg:max-w-72 xl:max-w-none sm:w-64 lg:w-[400px] group"
      >
        <img
          src={data.product.images[0].url}
          alt={data.product.name}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-all"
        />
      </Link>
      <div className="flex flex-col gap-2 sm:gap-3 sm:justify-between xl:p-3 w-full">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between gap-6">
            <Link
              to={`/product/${data.product._id}`}
              className="hover:underline"
            >
              <TextSubtext text="Product" subText={data.product.name} />
            </Link>
            <span className="text-[#666666] font-400 text-base min-w-max hidden 3xl:inline pt-1">
              Delivery by {todayPlusDays(2)} {/* 2 days from now */}
            </span>
            <span className="text-[#666666] font-400 text-base min-w-max hidden lg:inline 3xl:hidden pt-0.5">
              Delivery by {todayPlusDays(2).split(",")[0]}
              <br /> {todayPlusDays(2).split(",")[1]} {/* 2 days from now */}
            </span>
          </div>
          <div className="font-[600] text-lg sm:text-xl flex flex-col gap-2">
            <span>Quantity:</span>
            <div className="flex items-center justify-center gap-2 w-max border-grey/1 border-2 rounded-md">
              <button
                className="px-2 w-full h-full"
                onClick={() => {
                  // @ts-ignore
                  adjustCartQuantity({
                    productId: data.product._id,
                    isToIncrease: false,
                    setCartItems,
                    stock: data.product.stock,
                  });
                }}
              >
                <img src={removeIcon} alt="remove" />
              </button>
              <span className="border-x-2 border-grey/1 px-4">{quantity}</span>
              <button
                onClick={() => {
                  adjustCartQuantity({
                    productId: data.product._id,
                    isToIncrease: true,
                    setCartItems,
                    stock: data.product.stock,
                  });
                }}
                className="px-2 w-full h-full"
              >
                <img src={addIcon} alt="add" />
              </button>
            </div>
          </div>
          <div className="flex gap-3 my-1 items-center">
            <span className="text-xs sm:text-sm line-through font-400  text-grey-dark">
              ₹{(data.product.baseprice * quantity).toFixed(2)}
            </span>
            <span className="text-base xs:text-lg font-600 text-black">
              ₹{(data.product.discountedprice * quantity).toFixed(2)}
            </span>
            <span className="text-xs xs:text-base sm:text-lg font-600 text-green-500">
              {calculatePercentage(
                data.product.baseprice,
                data.product.discountedprice
              )}
              % off
            </span>
          </div>
        </div>
        <span className="text-[#666666] font-400 text-sm sm:text-base lg:hidden">
          Delivery by {todayPlusDays(2)} {/* 2 days from now */}
        </span>
        <button
          onClick={() => {
            removeCartItem({ productId: data.product._id, setCartItems });
          }}
          className="rounded px-3 py-1.5 sm:max-w-72 w-full min-w-40 bg-transparent border-2 border-grey-dark text-black"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
