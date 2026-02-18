import { useState } from "react";
import { useDispatch } from "../../../node_modules/react-redux/dist/react-redux";
import { cartActions } from "../../store/cartSlice.js";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible((prevState) => !prevState);
    dispatch(cartActions.isShowCart(visible));
  }

  return (
    <button onClick={handleClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
