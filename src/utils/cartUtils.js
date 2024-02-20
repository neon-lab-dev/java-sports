import toast from "react-hot-toast";

//adjust quantity of the product by 1
export const adjustCartQuantity = ({
  productId,
  isToIncrease,
  setCartItems,
  stock,
}) => {
  setCartItems((prev) => {
    return prev.map((item) => {
      if (item.productId === productId) {
        if (isToIncrease && item.quantity === stock) {
          toast.error("Only " + stock + " items available in stock.");
        }
        return {
          ...item,
          quantity: isToIncrease
            ? item.quantity === stock
              ? stock
              : item.quantity + 1
            : item.quantity === 0
              ? 0
              : item.quantity - 1,
        };
      }
      return item;
    });
  });
};

//remove item from the cart
export const removeCartItem = ({ productId, setCartItems }) => {
  setCartItems((prev) => {
    return prev.filter((item) => item.productId !== productId);
  });
};
