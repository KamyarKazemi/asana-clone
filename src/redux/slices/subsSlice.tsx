import { createSlice } from "@reduxjs/toolkit";
import { fetchSubs } from "../asyncThunks/FetchSubs";

const subsSlice = createSlice({
  name: "subs",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubs.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchSubs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSubs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Something Went Wrong!";
      });
  },
});

export default subsSlice.reducer;
