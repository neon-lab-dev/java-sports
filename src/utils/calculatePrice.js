export const calculatePrice = (orderDetails) => {
  return orderDetails.orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
};
