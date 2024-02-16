import PRODUCTS from "@/assets/mockData/products";
import { useState } from "react";
import addIcon from "@/assets/icons/add-icon.svg";
import removeIcon from "@/assets/icons/remove.svg";
import AppProductSlider from "@/components/reusable/AppProductSlider";
import ACCESSORIES from "@/assets/mock-data/accessories";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      productId: "65ce1905247feb2254f7fa81",
      quantity: 1,
    },
    {
      productId: "65ce1905247feb2254f7fa56",
      quantity: 4,
    },
  ]);

  return (
    <>
      <div className="bg-white py-6">
        <section className="wrapper flex flex-col gap-6 sm:gap-12">
          <div className="flex flex-col gap-4">
            {cartItems.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-4 my-28">
                <h2 className="font-Jakarta text-[32px] font-500">
                  Your cart is empty
                </h2>
                <Link
                  to="/"
                  className="rounded px-12 py-3 text-lg  min-w-40 bg-blue-400 text-white xl:w-96 disabled:opacity-45 max-w-72 "
                >
                  Continue Shopping
                </Link>
              </div>
            )}
            {cartItems.map((item) => (
              <CartItem
                item={item}
                key={item.productId}
                setCartItems={setCartItems}
              />
            ))}
          </div>
          {cartItems.length > 0 && (
            <button className="rounded self-center sm:self-end px-12 py-3 text-lg  min-w-40 bg-blue-400 text-white xl:w-96 disabled:opacity-45 max-w-72 ">
              Proceed to Checkout
            </button>
          )}
        </section>
      </div>
      <section className="bg-neutral-white pb-4 lg:block hidden mt-6">
        {/* Featured */}
        <section className="wrapper">
          <h2 className="font-Jakarta pt-[44px] text-[32px] font-500">
            Products you might like
          </h2>
          <AppProductSlider items={ACCESSORIES} />
        </section>
      </section>
    </>
  );
};
export default CartPage;

const CartItem = ({ item, setCartItems }) => {
  //adjust quantity of the product by 1
  const adjustQuantity = (productId, isToIncrease) => {
    setCartItems((prev) => {
      return prev.map((item) => {
        if (item.productId === productId) {
          return {
            ...item,
            quantity: isToIncrease
              ? item.quantity + 1
              : item.quantity === 0
                ? 0
                : item.quantity - 1,
          };
        }
        return item;
      });
    });
  };

  const removeItem = (productId) => {
    setCartItems((prev) => {
      return prev.filter((item) => item.productId !== productId);
    });
  };

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
          <Text text="Product" subText={product.name} />
          <div className="font-[600] text-lg sm:text-xl flex flex-col gap-2">
            <span>Quantity:</span>
            <div className="flex p-1 items-center justify-center gap-2 w-max border-grey/1 border-2 rounded-md">
              <button
                className="px-2 w-full h-full"
                onClick={() => {
                  adjustQuantity(item.productId, false);
                }}
              >
                <img src={removeIcon} alt="remove" />
              </button>
              <span className="border-x-2 border-grey/1 px-4">
                {item.quantity}
              </span>
              <button
                onClick={() => {
                  adjustQuantity(item.productId, true);
                }}
                className="px-2 w-full h-full"
              >
                <img src={addIcon} alt="add" />
              </button>
            </div>
          </div>
          <Text
            text="Total Price"
            subText={`₹${(product.discountedprice * item.quantity).toFixed(2)}`}
          />
          <span className="text-[#666666] font-400 text-base sm:text-lg">
            Delivery by {/* 2 days from now */}
            {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
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
              removeItem(item.productId);
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

const Text = ({ text, subText }) => {
  return (
    <span className="font-[600] text-lg sm:text-xl">
      {text}:{" "}
      <span className="text-[#666666] font-400 text-base sm:text-lg">
        {subText}
      </span>
    </span>
  );
};
