// @ts-nocheck
// Function to sort orders
export const sortOrders = (orders) => {
  return orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

// Function to get the latest 3 orders
export const getRecentOrders = (orders) => {
  const sortedOrders = sortOrders(orders);
  return sortedOrders.slice(0, 3);
};
