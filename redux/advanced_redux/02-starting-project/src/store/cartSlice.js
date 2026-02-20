import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const initialState = {
  showCart: false,
  products: [],
  cart: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.cart = action.payload.items;
    },
    isShowCart(state) {
      state.showCart = !state.showCart;
    },
    addItemToCart(state, action) {
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
    removeItemCart(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      }),
    );
    const sendResponse = async () => {
      const response = await fetch(
        `https://redux-56f49-default-rtdb.europe-west1.firebasedatabase.app/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        },
      );
      if (!response.ok) {
        throw new Error("failed response cart fetch");
      }
    };
    try {
      await sendResponse();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        }),
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
