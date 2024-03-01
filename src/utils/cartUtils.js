import toast from "react-hot-toast";
import { getLocalStorage, setLocalStorage } from "./localStorage";

//adjust quantity of the product by 1
export const adjustCartQuantity = ({
  productId,
  isToIncrease,
  setCartItems,
  stock,
}) => {
  const items = getLocalStorage("cartItems", []);
  const item = items.find((item) => item.id === productId);
  if (isToIncrease) {
    if (item.quantity < stock) {
      item.quantity++;
    } else {
      toast.error("Maximum stock reached");
    }
  } else {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      toast.error("Minimum stock reached");
    }
  }
  setLocalStorage("cartItems", items);
  setCartItems(items);
};

//remove item from the cart
export const removeCartItem = ({ productId, setCartItems }) => {
  const items = getLocalStorage("cartItems", []);
  console.log(items);
  const newItems = items.filter((item) => item.id !== productId);
  console.log(newItems);
  setLocalStorage("cartItems", newItems);
  setCartItems(newItems);
};

export const getTotalAmount = (products, cartItems) => {
  if (!products || !cartItems) return 0;
  console.log(products, cartItems);
  return products
    .reduce(
      (acc, product) =>
        acc +
        Number(product.baseprice) *
          cartItems?.find((item) => item.id === product._id)?.quantity,
      0
    )
    .toFixed(2);
};

export const getDiscountedAmount = (products, cartItems) => {
  if (!products || !cartItems) return 0;
  return products
    .reduce((acc, product) => {
      const cartItem = cartItems?.find(
        (item) => item.id === product._id
      );
      const price = Number(product.baseprice) - Number(product.discountedprice);
      return acc + price * cartItem?.quantity;
    }, 0)
    .toFixed(2);
};

export const getFinalAmount = (products, cartItems) => {
  return (
    getTotalAmount(products, cartItems) -
    getDiscountedAmount(products, cartItems)
  ).toFixed(2);
};
