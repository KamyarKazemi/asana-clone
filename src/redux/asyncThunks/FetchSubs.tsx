import { createAsyncThunk } from "@reduxjs/toolkit";
// import { faker } from "@faker-js/faker";
import axios from "axios";

const fetchSubs = createAsyncThunk(
  "subs/fetch",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:3005/channels?username=${searchTerm}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export { fetchSubs };
