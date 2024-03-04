import { getAllMyOrders } from "@/api/orders";
import OrderItem from "./OrderItem";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import emptyCartImg from "@/assets/icons/empty-carts.svg";

const OrderHistory = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["myOrders"],
    queryFn: getAllMyOrders,
  });
  return (
    <div className="flex flex-col gap-8 sm:gap-12 wrapper lg:w-full lg:m-0 max-w-5xl">
      {isError && (
        <p className="text-center">An error occurred while fetching orders</p>
      )}

      {isLoading && <p className="text-center">Loading orders...</p>}

      {!isLoading && data?.orders.length > 0 ? (
        data?.orders
          .filter((order) => order.orderStatus !== "Processing")
          ?.map((order, i) => {
            return (
              <OrderItem
                key={i}
                order={order}
                isLastItem={i === data.orders.length - 1}
              />
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
export default OrderHistory;
