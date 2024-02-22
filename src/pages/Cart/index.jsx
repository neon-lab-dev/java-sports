import { useState } from "react";
import AppProductSlider from "@/components/reusable/AppProductSlider";
import ACCESSORIES from "@/assets/mock-data/accessories";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      productId: "65ce1905247feb2254f7fa81",
      quantity: 1,
    },
    {
      productId: "65ce1905247feb2254f7fa56",
      quantity: 77,
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
                  className="text-center rounded px-12 py-3 text-lg  min-w-40 bg-blue-400 text-white xl:w-96 disabled:opacity-45 max-w-72 "
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
            <Link
              to="#"
              className="rounded self-center sm:self-end px-4 sm:px-12 py-3 text-lg  min-w-40 bg-blue-400 text-white xl:w-96 disabled:opacity-45 max-w-72 "
            >
              Proceed to Checkout
            </Link>
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
