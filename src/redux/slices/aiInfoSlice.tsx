import { createSlice } from "@reduxjs/toolkit";
import { postInfoToAi } from "../asyncThunks/postInfoToAi";

interface infoState {
  data: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: infoState = {
  data: [],
  status: "idle",
  error: null,
};

const infoState = createSlice({});

export default infoState.reducer;
