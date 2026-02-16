import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// function reducerCounter(state = initialState, action) {
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       isShowCounter: state.isShowCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       isShowCounter: !state.isShowCounter,
//     };
//   }

//   return state;
// }

//  Мінуси звичайного Redux - стан  з великим проектом дуже розростається і повторюється . Неможна мутувати стан як в Toolkit (Immer).
//  Не можна розділити на підслайси редюсер
//  Великий стейт менеджер
//  Складний з підключенням у класових компонентах
