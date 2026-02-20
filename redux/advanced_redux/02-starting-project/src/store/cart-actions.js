import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-56f49-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      );
      if (!response.ok) {
        throw new Error("Failed fetch data cart!");
      }
      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();

      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed fetching get data cart!",
        }),
      );
    }
  };
};
// -----------------------------------------------------------------
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
