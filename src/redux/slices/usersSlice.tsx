import { createSlice } from "@reduxjs/toolkit";
import { fetchChannelData } from "../asyncThunks/fetchChannelData";

interface Video {
  title: string;
  caption: string;
  views: string;
  likes: string;
  dislikes: string;
}

interface Channel {
  username: string;
  subs: number;
  videos: Video[];
}

interface UsersState {
  data: Channel[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchChannelData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = [action.payload]; // Wrap single channel in array to match expected format
      })
      .addCase(fetchChannelData.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) || "Something Went Wrong!";
      });
  },
});

export default userSlice.reducer;
