import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchChannelData = createAsyncThunk(
  "channel/fetch",
  async (searchTerm: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:3005/channels?username=${searchTerm}`
      );

      if (res.data.length === 0) {
        return rejectWithValue("Channel not found");
      }

      return res.data[0]; // Return the full channel object
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export { fetchChannelData };
