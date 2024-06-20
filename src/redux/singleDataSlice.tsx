import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface arr {
  id: number;
  name: string;
  email?: string | null;
  Phone?: string;
}

interface typess {
  myarr: arr[];
  dataarr: arr[];
  isloading: boolean;
  iserror: boolean;
}

const initialState: typess = {
  myarr: [],
  dataarr: [],
  isloading: false,
  iserror: false,
};

export const SingleData = createAsyncThunk<arr, number>(
  "api/SingleData",
  async (id) => {
    const gets = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return gets.data;
  }
);

const singleSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(SingleData.pending, (state) => {
        state.isloading = true;
      })
      .addCase(SingleData.fulfilled, (state, action) => {
        state.isloading = false;
        //action.payload.id % 2 === 0 ? action.payload : null
        // state.dataarr = [
        //   ...state.dataarr.filter((user) => user.id !== action.payload.id),
        //   action.payload,
        // ];

        const allowedIds = [3, 4, 5];
        state.dataarr = state.dataarr.filter((user) =>
          allowedIds.includes(user.id)
        );

        state.dataarr = [...state.dataarr, action.payload];

      })
      .addCase(SingleData.rejected, (state) => {
        state.isloading = false;
        state.iserror = true;
      });
  },
});

export default singleSlice.reducer;





        // If the action.payload.id is one of the allowed IDs, add it to the state.dataarr
        // if (allowedIds.includes(action.payload.id)) {
        //   state.dataarr = [...state.dataarr, action.payload];
        // } else {
        //   state.dataarr = [...state.dataarr, action.payload];
        // }