import { configureStore } from "@reduxjs/toolkit";
import apislice from "./apislice";
import singleDataSlice from "./singleDataSlice";
import countslice from "./countslice";

const store = configureStore({
  reducer: {
    calls: apislice,
    single: singleDataSlice,
    track: countslice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
