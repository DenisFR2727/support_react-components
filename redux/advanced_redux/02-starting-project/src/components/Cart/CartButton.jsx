import { useState } from "react";
import { useDispatch } from "../../../node_modules/react-redux/dist/react-redux";
import { cartActions } from "../../store/cartSlice.js";
import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartlQuantity = useSelector((state) => state.cart.totalQuantity);

  function handleClick() {
    dispatch(cartActions.isShowCart());
  }

  return (
    <button onClick={handleClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartlQuantity}</span>
    </button>
  );
};

export default CartButton;
