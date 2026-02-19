import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cartSlice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cart);
  const { id, title, price, description } = props;

  function handleAddCart() {
    dispatch(cartActions.addToCart({ id, title, price, description }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <header>
            <h3>{title}</h3>
            <div className={classes.price}>${price.toFixed(2)}</div>
          </header>
          <p>{description}</p>
          <div className={classes.actions}>
            <button onClick={handleAddCart}>Add to Cart</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
