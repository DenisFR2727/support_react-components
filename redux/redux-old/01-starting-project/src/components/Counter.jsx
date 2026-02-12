import classes from "./Counter.module.css";
import {
  useDispatch,
  useSelector,
} from "../../node_modules/react-redux/dist/react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandlerPlus = () => {
    dispatch({ type: "increment" });
  };
  const toggleCounterHandlerMinus = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <button onClick={toggleCounterHandlerPlus}>Plus</button>
      <button onClick={toggleCounterHandlerMinus}>Minus</button>
    </main>
  );
};

export default Counter;
