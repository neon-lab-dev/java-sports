import Text from "../Text";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { getAllMyOrders } from "@/api/orders";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emptyCartImg from "@/assets/icons/empty-carts.svg";
import RecentOrderItem from "./RecentOrderItem";

const RecentOrders = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["myOrders"],
    queryFn: getAllMyOrders,
  });
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    if (!isLoading && !isError && data?.orders) {
      setRecentOrders(
        data.orders.filter((order) => order.orderStatus === "Processing") || []
      );
    }
  }, [data, isError, isLoading]);

  return (
    <div className="flex flex-col gap-8 sm:gap-12 wrapper lg:w-full lg:m-0 max-w-5xl">
      {isError && (
        <p className="text-center">An error occurred while fetching orders</p>
      )}
      {isLoading && <p className="text-center">Loading orders...</p>}
      {!isLoading && data?.orders.length > 0 ? (
        recentOrders?.map((order, i) => (
          <RecentOrderItem
            key={i}
            order={order}
            isLastItem={i === recentOrders.length - 1}
          />
        ))
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
