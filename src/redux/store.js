import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
