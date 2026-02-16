import classes from "./Counter.module.css";
import {
  useDispatch,
  useSelector,
} from "../../node_modules/react-redux/dist/react-redux";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShowCounter = useSelector((state) => state.counter.isShowCounter);

  const toggleCounterHandlerPlus = () => {
    dispatch(counterActions.increase(1));
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const toggleCounterHandlerMinus = () => {
    dispatch(counterActions.increase(-1));
  };
  const toggleCounter = () => {
    dispatch(counterActions.toggle(true));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowCounter && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={toggleCounterHandlerPlus}>Plus</button>
        <button onClick={increaseHandler}>add 5</button>
        <button onClick={toggleCounterHandlerMinus}>Minus</button>
      </div>
      <button onClick={toggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
