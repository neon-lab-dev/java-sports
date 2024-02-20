import ORDER_HISTORY from "@/assets/mockData/orderHistory";
import OrderItem from "./OrderItem";

const OrderHistory = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 wrapper lg:w-full lg:m-0 max-w-5xl">
      {ORDER_HISTORY.map((order, i) => {
        return (
          <OrderItem
            key={i}
            order={order}
            isLastItem={i === ORDER_HISTORY.length - 1}
          />
        );
      })}
    </div>
  );
};
export default OrderHistory;
