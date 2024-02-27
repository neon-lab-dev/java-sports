import { useEffect, useState } from "react";
import AppProductSlider from "@/components/reusable/AppProductSlider";
import ACCESSORIES from "@/assets/mock-data/accessories";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";
import {
  getDiscountedAmount,
  getFinalAmount,
  getTotalAmount,
} from "@/utils/cartUtils";
import PRODUCTS from "@/assets/mockData/products";
import EmptyCart from "./EmptyCart";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      productId: "65ce1905247feb2254f7fa81",
      quantity: 1,
    },
    {
      productId: "65ce1905247feb2254f7fa56",
      quantity: 1,
    },
  ]);
  const [products, setProducts] = useState();

  useEffect(() => {
    const products = PRODUCTS.filter((p) =>
      cartItems.map((item) => item.productId).includes(p._id)
    );
    // @ts-ignore
    setProducts(products);
  }, [cartItems]);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="bg-white py-6">
          <section className="flex flex-col xl:flex-row gap-12 2xl:mx-32 wrapper xl:w-[95%] xl:m-[0_auto] xl:max-w-fit">
            <div className="flex flex-col gap-6 sm:gap-12 flex-grow">
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <CartItem
                    item={item}
                    key={item.productId}
                    quantity={item.quantity}
                    setCartItems={setCartItems}
                  />
                ))}
              </div>
            </div>
            <PriceDetails
              totalAmount={getTotalAmount(products, cartItems)}
              discountAmount={getDiscountedAmount(products, cartItems)}
              totalItems={cartItems.length}
              finalAmount={getFinalAmount(products, cartItems)}
            />
          </section>
        </div>
      ) : (
        <EmptyCart />
      )}
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
