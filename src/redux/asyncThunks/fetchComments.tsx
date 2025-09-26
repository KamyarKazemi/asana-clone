// redux/commentsThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk(
  "comments/fetchByUsername",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const username = String(searchTerm || "").trim();
      if (!username) {
        return rejectWithValue("empty_username");
      }
      const safe = encodeURIComponent(username);
      const res = await axios.get(
        `http://localhost:4000/api/channels/${safe}/comments`
      );
      // dev-friendly log
      console.table(res.data.comments ?? res.data);
      return res.data;
    } catch (err) {
      console.error("fetchComments error:", err?.response?.data ?? err.message);
      return rejectWithValue(
        err?.response?.data?.error || err?.message || "unknown_error"
      );
    }
  }
);
