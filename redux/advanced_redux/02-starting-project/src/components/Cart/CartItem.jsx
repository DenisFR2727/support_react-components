import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const order = useSelector((state) => state.cart.cart);
  const { id, title, quantity, totalPrice, price } = props.item;

  function handleAddproduct(id) {
    //  dispatch(cartActions.productPlus(id));
  }
  function handleDeleteProduct(id) {}

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleAddproduct}>-</button>
          <button onClick={handleDeleteProduct}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
