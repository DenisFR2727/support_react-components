// import { createStore } from "../../node_modules/redux/dist/redux";
import { createStore } from "redux";

function reducerCounter(state = { counter: 0 }, action) {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
}

export const store = createStore(reducerCounter);
