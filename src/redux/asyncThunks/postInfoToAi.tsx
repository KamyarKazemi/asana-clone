import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Video {
  title: string;
  caption: string;
  views: string;
  likes: string;
  dislikes: string;
}

interface ChannelData {
  username: string;
  subs: number;
  videos: Video[];
}

interface AnalysisResponse {
  analysis: string;
  insights: string[];
  recommendations: string[];
}

const postInfoToAi = createAsyncThunk<AnalysisResponse, ChannelData>(
  "info/post",
  async (channelData: ChannelData, { rejectWithValue }) => {
    try {
      // Simulate AI analysis by posting to json-server
      // In a real app, this would be your AI service endpoint
      const res = await axios.get(`http://localhost:3005/analyze`);

      if (!res.data) {
        return rejectWithValue("No analysis data received");
      }

      // Add some dynamic analysis based on channel data
      const dynamicAnalysis = {
        ...res.data,
        analysis: `AI Analysis for ${channelData.username}: This channel has ${channelData.subs} subscribers and ${channelData.videos.length} videos analyzed.`,
        channelData: channelData,
      };

      return dynamicAnalysis;
    } catch (err: any) {
      console.error("AI Analysis Error:", err);
      return rejectWithValue(
        err.response?.data?.message ||
          err.message ||
          "Failed to analyze channel data"
      );
    }
  }
);

export { postInfoToAi };
