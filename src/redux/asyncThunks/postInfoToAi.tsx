import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postInfoToAi = createAsyncThunk(
  "info/post",
  async (info, { rejectWithValue }) => {
    try {
      const res = await axios.post(`http://localhost:4000/api/analyze`);

      if (res.data.length === 0) {
        return rejectWithValue("sth is wrong");
      }

      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export { postInfoToAi };
