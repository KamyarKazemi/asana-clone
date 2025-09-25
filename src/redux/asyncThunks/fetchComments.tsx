import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchComments = createAsyncThunk(
  "comments/fetch",
  async (searchTerm: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/comments?userUsername=${searchTerm}`
      );
      console.table(res.data);
      return res.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export { fetchComments };
