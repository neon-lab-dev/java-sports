import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";
import emptyCartImg from "@/assets/icons/empty-carts.svg";
import {
  getDiscountedAmount,
  getFinalAmount,
  getTotalAmount,
} from "@/utils/cartUtils";
import { getLocalStorage } from "@/utils/localStorage";
import { useQueries } from "@tanstack/react-query";
import { getAProduct } from "@/api/products";
import CartPageSkeleton from "@/components/skeletons/CartPageSkeleton";
import AppEmpty from "@/components/reusable/AppEmpty";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(getLocalStorage("cartItems", []));
  const [isLoading, setIsLoading] = useState(true);
  const res = useQueries({
    queries: (() => {
      return cartItems.map((item) => {
        return {
          queryKey: ["product", item.id],
          queryFn: () => getAProduct(item.id),
        };
      });
    })(),
  });

  useEffect(() => {
    if (res.every((r) => !r.isLoading)) {
      setIsLoading(false);
    }
  }, [res]);

  if (isLoading) return <CartPageSkeleton />;
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="bg-white py-6 flex items-center justify-center">
          <section className="flex flex-col xl:flex-row gap-12 2xl:mx-32 wrapper xl:w-[95%] xl:m-[0_auto] xl:max-w-fit">
            <div className="flex flex-col gap-6 sm:gap-12 flex-grow">
              <div className="flex flex-col gap-4">
                {res.map((item, i) => (
                  <CartItem
                    item={item}
                    key={i}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                  />
                ))}
              </div>
            </div>
            {
              //only show price details if all the responses are loaded
              res.every((r) => r.isSuccess) && (
                <PriceDetails
                  totalAmount={getTotalAmount(
                    res.map((r) => {
                      return r.data.product;
                    }),
                    cartItems
                  )}
                  discountAmount={getDiscountedAmount(
                    res.map((r) => {
                      return r.data.product;
                    }),
                    cartItems
                  )}
                  totalItems={cartItems.length}
                  finalAmount={getFinalAmount(
                    res.map((r) => {
                      return r.data.product;
                    }),
                    cartItems
                  )}
                />
              )
            }
          </section>
        </div>
      ) : (
        <AppEmpty
          btnText="Continue Shopping"
          text="Your cart is empty"
          to="/"
          img={emptyCartImg}
        />
      )}
      {/* <AppProductsYouMightLike /> */}
    </>
  );
};
export default CartPage;
