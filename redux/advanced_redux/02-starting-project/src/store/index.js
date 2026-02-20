import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import uiCartReducer from "./uiSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, uiCart: uiCartReducer },
});
