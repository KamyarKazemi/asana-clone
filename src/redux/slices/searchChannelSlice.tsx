import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "search",
  initialState: { value: "" },
  reducers: {
    handleChange(state, action) {
      state.value = action.payload;
    },
    resetValue(state) {
      state.value = "";
    },
  },
});

export const { handleChange, resetValue } = channelSlice.actions;
export default channelSlice.reducer;
