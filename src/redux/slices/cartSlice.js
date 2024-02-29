import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: (() => getLocalStorage("cartItems", []))(), //iife to get cartItems from local storage
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    /**
     * Add item to cart
     * @param id: id of the item to be added
     * @param quantity: quantity of the item to be added
     */
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const isAlreadyAdded = state.cartItems.find((item) => item.id === id);
      if (isAlreadyAdded) {
        const items = state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        state.cartItems = items;
        setLocalStorage("cartItems", items);
      } else {
        state.cartItems.push({ id, quantity });
      }
    },
    /**
     * Remove item from cart
     * @param id: id of the item to be removed
     */
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
