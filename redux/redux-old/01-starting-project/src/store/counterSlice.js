import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isShowCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.isShowCounter = !state.isShowCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
