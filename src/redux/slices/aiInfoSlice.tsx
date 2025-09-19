import { createSlice } from "@reduxjs/toolkit";
import { postInfoToAi } from "../asyncThunks/postInfoToAi";

interface AnalysisData {
  analysis: string;
  insights: string[];
  recommendations: string[];
  channelData?: any;
}

interface InfoState {
  data: AnalysisData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: InfoState = {
  data: null,
  status: "idle",
  error: null,
};

const infoSlice = createSlice({
  name: "infos",
  initialState,
  reducers: {
    clearAnalysis: (state) => {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postInfoToAi.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postInfoToAi.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(postInfoToAi.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) || "Analysis failed";
      });
  },
});

export const { clearAnalysis } = infoSlice.actions;
export default infoSlice.reducer;
