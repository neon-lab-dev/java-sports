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
        if (isToIncrease && item.quantity >= stock) {
          toast.error("Only " + stock + " items available in stock.");
          return item;
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

export const getTotalAmount = (products, cartItems) => {
  if (!products || !cartItems) return 0;
  return products
    .reduce(
      (acc, product) =>
        acc +
        Number(product.baseprice) *
          cartItems?.find((item) => item.productId === product._id)?.quantity,
      0
    )
    .toFixed(2);
};

export const getDiscountedAmount = (products, cartItems) => {
  if (!products || !cartItems) return 0;
  return products
    .reduce((acc, product) => {
      const cartItem = cartItems?.find((item) => item.productId === product._id);
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
