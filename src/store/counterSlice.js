import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state, action) {
      //   console.log(state);
      //   console.log(action);
      state.value += 1;
    },
    reset(state, action) {
      state.value = 0;
    },
  },
});

export const { increment } = counterSlice.actions;
export const { reset } = counterSlice.actions;
export default counterSlice.reducer;
