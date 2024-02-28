import { getAllMyOrders } from "@/api/orders";
import OrderItem from "./OrderItem";
import { useQuery } from "@tanstack/react-query";

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
        data?.orders?.map((order, i) => {
          return (
            <OrderItem
              key={i}
              order={order}
              isLastItem={i === data.orders.length - 1}
            />
          );
        })
      ) : (
        <p className="text-center">No orders found</p>
      )}
    </div>
  );
};
export default OrderHistory;
