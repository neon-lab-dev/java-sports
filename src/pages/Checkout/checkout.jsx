import avatar from "@assets/images/avatar.jpg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import AddressBox from "./AddressBox";
import PaymentDetails from "./PaymentDetails";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import OrderItem from "./OrderItem";
import { useQueries } from "@tanstack/react-query";
import { getAProduct } from "@/api/products";
import CartPageSkeleton from "@/components/skeletons/CartPageSkeleton";
import {
  getDiscountedAmount,
  getFinalAmount,
  getTotalAmount,
} from "@/utils/cartUtils";

const Checkout = () => {
  const { user } = useSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  const [selectedAddress, setSelectedAddress] = useState("primaryaddress");
  const [orderItems] = useState(() => {
    if (searchParams.get("buyNow") === "true") {
      return [getLocalStorage("buyNowProduct", {})];
    } else {
      return getLocalStorage("cartItems", []);
    }
  });

  const res = useQueries({
    queries: orderItems.map((item) => ({
      queryKey: ["product", item.id],
      queryFn: () => getAProduct(item.id),
    })),
  });

  return (
    <div className="bg-white py-10">
      <section className="wrapper flex flex-col gap-4">
        <div className="flex flex-col gap-5 justify-center card-shadow p-6 rounded-md">
          <div className="flex justify-between">
            <span className="text-xl sm:text-3xl  font-700 font-Lato">
              Logged in as
            </span>
            <span className="text-blue font-500"></span>
          </div>
          <div className="flex items-center gap-2 ">
            <img
              src={user?.avatar?.url || avatar}
              className="w-12 h-12 rounded-full object-cover object-center"
            />
            <Link to="/account" className="font-500 text-xl hover:underline">
              {user?.full_name}
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <span>Email: {user?.email}</span>
            <span>Phone: {user?.phoneNo}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center card-shadow p-6 rounded-md">
          <div className="flex justify-between">
            <span className="text-xl sm:text-3xl font-700 font-Lato">
              Delivery Address
            </span>
            <Link to="/account?tab=addresses" className="text-blue font-500">
              Edit
            </Link>
          </div>
          <div className="flex gap-3 flex-col lg:flex-row">
            {["primaryaddress", "secondaryaddress", "thirdaddress"].map(
              (address, i) => (
                <AddressBox
                  key={i}
                  selectedAddress={selectedAddress}
                  setSelectedAddress={setSelectedAddress}
                  address={address}
                  i={i}
                />
              )
            )}
          </div>
        </div>
        {
          //render only when all the queries are loaded
          res.every((r) => r.isSuccess) ? (
            <div className="flex gap-6 flex-col xl:flex-row">
              <div className="flex flex-col flex-grow gap-4 card-shadow p-6 rounded-md">
                <div className="flex justify-between">
                  <span className="text-xl sm:text-3xl font-700 font-Lato">
                    Order Summery
                  </span>
                  <Link
                    to={
                      searchParams.get("buyNow") === "true"
                        ? `/product/${orderItems[0].id}`
                        : "/cart"
                    }
                    className="text-blue font-500 text-lg"
                  >
                    Edit
                  </Link>
                </div>
                <div className="flex gap-5 flex-col">
                  {orderItems.map((item, index) => (
                    <OrderItem key={index} item={item} response={res[index]} />
                  ))}
                  {orderItems.length === 0 && <span>No items in the cart</span>}
                </div>
              </div>
              <PaymentDetails
                totalAmount={getTotalAmount(
                  res.map((r) => {
                    return r.data.product;
                  }),
                  orderItems
                )}
                discountAmount={getDiscountedAmount(
                  res.map((r) => {
                    return r.data.product;
                  }),
                  orderItems
                )}
                totalItems={orderItems.length}
                finalAmount={getFinalAmount(
                  res.map((r) => {
                    return r.data.product;
                  }),
                  orderItems
                )}
                deliveryAddress={selectedAddress}
                orderItems={orderItems}
              />
            </div>
          ) : (
            <CartPageSkeleton />
          )
        }
      </section>
    </div>
  );
};
export default Checkout;
