import toast from "react-hot-toast";
import { getLocalStorage, setLocalStorage } from "./localStorage";
import ReactGA from "react-ga";
import { getPriceAfterDiscount } from "./getPriceAfterDiscount";
import getSizeDetailsSIzeAndSide from "./getSizeDetailsSIzeAndSide";
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
  ReactGA.event({
    category: "Cart",
    action: `Removed product with id ${productId} from cart`,
  });
  const items = getLocalStorage("cartItems", []);
  const newItems = items.filter((item) => item.id !== productId);
  setLocalStorage("cartItems", newItems);
  setCartItems(newItems);
};

export const getTotalAmount = (products, cartItems) => {
  if (!products || !cartItems) return 0;
  return Number(
    products
      .reduce((acc, product) => {
        const cartItem = cartItems?.find((item) => item.id === product._id);
        if (!cartItem) return acc;
        const size = getSizeDetailsSIzeAndSide(
          product.sizes,
          cartItem.size,
          cartItem.side
        );
        if (!size) return acc;

        return (
          acc +
          Number(size.basePrice) *
            cartItems?.find((item) => item.id === product._id)?.quantity
        );
      }, 0)
      .toFixed(2)
  );
};

export const getDiscountedAmount = (products, cartItems) => {
  if (!products || !cartItems) return 0;
  return Number(
    products
      .reduce((acc, product) => {
        const cartItem = cartItems?.find((item) => item.id === product._id);
        if (!cartItem) return acc;
        const size = getSizeDetailsSIzeAndSide(
          product.sizes,
          cartItem.size,
          cartItem.side
        );
        if (!size) return acc;

        const price =
          Number(size.basePrice) -
          getPriceAfterDiscount(size.basePrice, size.discountedPercent);
        return acc + price * cartItem?.quantity;
      }, 0)
      .toFixed(2)
  );
};

export const getFinalAmount = (products, cartItems) => {
  return Number(
    (
      getTotalAmount(products, cartItems) -
      getDiscountedAmount(products, cartItems)
    ).toFixed(2)
  );
};
