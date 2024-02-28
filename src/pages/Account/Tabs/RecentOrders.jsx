import Text from "../Text";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { getAllMyOrders } from "@/api/orders";
import { useEffect, useState } from "react";
import { getRecentOrders } from "@/utils/order-utils";
import { Link } from "react-router-dom";
import emptyCartImg from "@/assets/icons/empty-carts.svg";

const RecentOrders = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["myOrders"],
    queryFn: getAllMyOrders,
  });
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    if (!isLoading && !isError && data?.orders) {
      setRecentOrders(getRecentOrders(data.orders));
    }
  }, [data, isError, isLoading]);

  const handleCancelOrder = (orderId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are trying to cancel the order. This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Order Cancelled!",
          text: "Your order has been cancelled.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="flex flex-col gap-8 sm:gap-12 wrapper lg:w-full lg:m-0 max-w-5xl">
      {isError && (
        <p className="text-center">An error occurred while fetching orders</p>
      )}
      {isLoading && <p className="text-center">Loading orders...</p>}
      {!isLoading && data?.orders.length > 0 ? (
        recentOrders?.map((order, i) => {
          return (
            <div
              key={order._id}
              className={`flex gap-3 w-full flex-col ${i !== recentOrders.length - 1 ? "border-b-2 border-grey-light pb-6" : ""}`}
            >
              <div className="flex flex-col xs:flex-row justify-between items-start w-full">
                <div className="flex flex-col">
                  <Text
                    text="Date"
                    subText={new Date(order.createdAt).toLocaleDateString()}
                  />
                  <Text text="Order ID" subText={"#" + order._id} />
                </div>
                <Text text="Order Status" subText={order.orderStatus} />
              </div>
              {order.orderItems?.map((order) => {
                return (
                  <div
                    key={order._id}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-6 card-shadow p-3 sm:p-5 rounded-lg"
                  >
                    <div className="h-60  bg-grey/2 rounded-lg p-2 max-w-64 sm:w-64 lg:max-w-none lg:w-[400px] md:h-72">
                      <img
                        src={order.image}
                        alt={order.name}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col gap-4 sm:justify-between w-full">
                      <div className="flex flex-col gap-1">
                        <Text text="Product" subText={order.name} />
                        <Text text="Quantity" subText={order.quantity} />
                        <Text text="Total Price" subText={"₹" + order.price} />
                        <div className="flex flex-col gap-0 rounded-lg mt-3">
                          {/* <div className="flex gap-8 text-base sm:text-base mb-2">
                            <span className="font-Lato font-600">
                              {address.title}
                            </span>
                          </div>
                          {Object.keys(address).map((key, i) => {
                            if (key === "title" || key === "img") return null;
                            return (
                              <span className="text-sm text-grey/6" key={i}>
                                {USER.shippingAddresses[0][key]}
                              </span>
                            );
                          })} */}
                        </div>
                      </div>
                      <button
                        onClick={() => handleCancelOrder(order.orderId)}
                        className="rounded-lg px-6 py-1.5 w-max bg-primary bg-white border-2 border-grey-light self-end "
                      >
                        Cancel Order
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
          <img src={emptyCartImg} className="h-36" />
          <h2 className="font-Jakarta font-500 text-2xl xs:text-2xl">
            You have no orders yet!
          </h2>
          <Link
            to="/"
            className="rounded text-center px-3 py-2 w-full text-base block uppercase font-600 min-w-40 bg-primary text-white lg:mt-2 xs:max-w-60"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};
export default RecentOrders;
