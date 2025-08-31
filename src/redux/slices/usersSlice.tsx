import { createSlice } from "@reduxjs/toolkit";
import { fetchSubs } from "../asyncThunks/FetchSubs";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSubs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something Went Wrong!";
      });
  },
});

export default userSlice.reducer;
