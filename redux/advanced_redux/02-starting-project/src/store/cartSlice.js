import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    isShowCart(state, action) {
      state.showCart = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
