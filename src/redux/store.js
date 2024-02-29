import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cartItems: cartSlice,
  },
});

export default store;
