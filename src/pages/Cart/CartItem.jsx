import PRODUCTS from "@/assets/mockData/products";
import TextSubtext from "@/components/reusable/AppTextSubtext";
import { adjustCartQuantity, removeCartItem } from "@/utils/cartUtils";

// @ts-ignore
import addIcon from "@/assets/icons/add-icon.svg";
// @ts-ignore
import removeIcon from "@/assets/icons/remove.svg";
import { todayPlusDays } from "@/utils/dateUtils";

const CartItem = ({ item, setCartItems }) => {
  const product = PRODUCTS.find((p) => p._id === item.productId);
  return (
    <div className="flex flex-col sm:flex-row gap-3 shadow p-3 rounded-md">
      <div className="h-60 bg-grey/1 rounded-lg p-2 lg:h-64 object-contain object-center max-w-64 sm:max-w-none md:w-96 lg:max-w-72 xl:max-w-none sm:w-64 lg:w-[400px]">
        <img
          src={product.images[0].url}
          alt={product.name}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-4 sm:justify-between xl:p-3 w-full">
        <div className="flex flex-col gap-1">
          <TextSubtext text="Product" subText={product.name} />
          <div className="font-[600] text-lg sm:text-xl flex flex-col gap-2">
            <span>Quantity:</span>
            <div className="flex p-1 items-center justify-center gap-2 w-max border-grey/1 border-2 rounded-md">
              <button
                className="px-2 w-full h-full"
                onClick={() => {
                  // @ts-ignore
                  adjustCartQuantity({
                    productId: item.productId,
                    isToIncrease: false,
                    setCartItems,
                    stock: product.stock,
                  });
                }}
              >
                <img src={removeIcon} alt="remove" />
              </button>
              <span className="border-x-2 border-grey/1 px-4">
                {item.quantity}
              </span>
              <button
                onClick={() => {
                  adjustCartQuantity({
                    productId: item.productId,
                    isToIncrease: true,
                    setCartItems,
                    stock: product.stock,
                  });
                }}
                className="px-2 w-full h-full"
              >
                <img src={addIcon} alt="add" />
              </button>
            </div>
          </div>
          <TextSubtext
            text="Total Price"
            subText={`₹${(product.discountedprice * item.quantity).toFixed(2)}`}
          />
          <span className="text-[#666666] font-400 text-base sm:text-lg">
            Delivery by {todayPlusDays(2)} {/* 2 days from now */}
          </span>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row w-full">
          <button
            disabled={item.quantity === 0}
            className="rounded px-3 py-1.5  min-w-40 bg-primary text-white xl:w-96 w-full disabled:opacity-45 max-w-72 lg:max-w-none"
          >
            Buy Now
          </button>
          <button
            onClick={() => {
              removeCartItem({ productId: item.productId, setCartItems });
            }}
            className="rounded px-3 py-1.5 w-full max-w-72 min-w-40 bg-transparent border-2 border-grey-dark text-black "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
