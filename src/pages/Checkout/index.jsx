import avatar from "@assets/images/avatar.jpg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AddressBox from "./AddressBox";
import PaymentDetails from "./PaymentDetails";
import OrderItem from "./OrderItem";
import { useQueries } from "@tanstack/react-query";
import { getAProduct } from "@/api/products";
import noAddress from "@/assets/images/no-address.jpg";
import CartPageSkeleton from "@/components/skeletons/CartPageSkeleton";
import {
  getDiscountedAmount,
  getFinalAmount,
  getTotalAmount,
} from "@/utils/cartUtils";
import AppEmpty from "@/components/reusable/AppEmpty";

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [selectedAddress, setSelectedAddress] = useState("primaryaddress");
  const { state } = useLocation();

  const res = useQueries({
    queries: state?.orderItems?.map((item) => ({
      queryKey: ["product", item.product],
      queryFn: () => getAProduct(item.product),
    })),
  });

  if (!state) {
    navigate("/cart");
  }
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
          {!(
            user.primaryaddress ||
            user.secondaryaddress ||
            user.thirdaddress
          ) && (
            <AppEmpty
              btnText="Add Address"
              text="You have not added any address"
              to="/account?tab=addresses"
              img={noAddress}
            />
          )}
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
                  {state?.from && state?.from !== "reorder" && (
                    <Link
                      to={
                        state?.from && state?.from === "product"
                          ? `/product/${state?.orderItems[0]?.id}`
                          : "/cart"
                      }
                      className="text-blue font-500 text-lg"
                    >
                      Edit
                    </Link>
                  )}
                </div>
                <div className="flex gap-5 flex-col">
                  {state?.orderItems.map((item, index) => (
                    <OrderItem key={index} item={item} response={res[index]} />
                  ))}
                  {state?.orderItems.length === 0 && (
                    <span>No items in the cart</span>
                  )}
                </div>
              </div>
              <PaymentDetails
                totalAmount={getTotalAmount(
                  res.map((r) => {
                    return r.data.product;
                  }),
                  state?.orderItems
                )}
                discountAmount={getDiscountedAmount(
                  res.map((r) => {
                    return r.data.product;
                  }),
                  state?.orderItems
                )}
                totalItems={state?.orderItems?.length}
                finalAmount={getFinalAmount(
                  res.map((r) => {
                    return r.data.product;
                  }),
                  state?.orderItems
                )}
                deliveryAddress={selectedAddress}
                orderItems={state?.orderItems}
                isSomeItemOutOfStock={res.some((r) => {
                  const itemFromCart = state?.orderItems.find(
                    (item) => item.product === r.data.product._id
                  );
                  const size = r.data.product.sizes.find(
                    (s) => s.size === itemFromCart?.size
                  );
                  if (itemFromCart?.quantity > size.stock) return true;
                  return false;
                })}
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
