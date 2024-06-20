// "use client";
import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: Record<number, number>;
}
const initialState: CounterState = {
  count: {},
};

const counter = createSlice({
  name: "likes",
  initialState,
  reducers: {
    addreducer(state, action) {
      const id = action.payload;
      if (!state.count[id]) {
        state.count[id] = 0;
      }
      state.count[id] = state.count[id] + 1;
    },
    subreducer(state, action) {
      const id = action.payload;

      if (!state.count[id]) {
        state.count[id] = 0;
      }

      state.count[id] = state.count[id] - 1;
    },
    resetreducer(state, action) {
      const id = action.payload;
      state.count[id] = 0;
    },
  },
});

export default counter.reducer;
export const { addreducer, subreducer, resetreducer } = counter.actions;
