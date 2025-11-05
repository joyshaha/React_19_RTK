import { createSlice } from "@reduxjs/toolkit";
import { increment, decrement } from "./counterSlice";

const initialState = {
  counter: 0,
};

const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState,
  reducers: {
    incrementByValue: (state, action) => {
      state.counter += action.payload;
    },
    decrementByValue: (state, action) => {
      state.counter -= action.payload;
    },
  },
//   extraReducers: {
//     ["counter/increment"]: (state) => {
//       state.counter += 1;
//     },
//     ["counter/decrement"]: (state) => {
//       state.counter -= 1;
//     },
//   },
  extraReducers: (builder) => {
    builder.addCase(increment, (state) => {
      state.counter += 1;
    });
    builder.addCase(decrement, (state) => {
      state.counter -= 1;
    });
  },
});

export const { incrementByValue, decrementByValue } = dynamicCounterSlice.actions;
export default dynamicCounterSlice.reducer;
