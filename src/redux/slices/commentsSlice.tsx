import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "../asyncThunks/fetchComments";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) || "sth is wrong";
      });
  },
});

export default commentsSlice.reducer;
