import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  products: [
    {
      id: 1,
      title: "Test",
      price: 6,
      quantity: 1,
      description: "This is a first product - amazing!",
    },
  ],
  cart: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    isShowCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cart.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalAmount += newItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
