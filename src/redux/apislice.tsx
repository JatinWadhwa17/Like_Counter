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

export const fetchData = createAsyncThunk<arr[], void>(
  "api/fetchData",
  async () => {
    const gets = await axios.get("https://jsonplaceholder.typicode.com/users");
    return gets.data;
  }
);

const apislice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<arr[]>) {
      state.myarr = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<arr[]>) => {
        // if(action.payload.id===1){
        state.isloading = false;
        state.myarr = action.payload;
        // }
      })
      .addCase(fetchData.rejected, (state) => {
        state.isloading = false;
        state.iserror = true;
      })
  },
});

export default apislice.reducer;
export const { setData } = apislice.actions;
