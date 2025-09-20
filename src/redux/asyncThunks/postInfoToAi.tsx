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
      console.log("Sending data to AI service:", channelData);

      // Check if required data exists
      if (!channelData || !channelData.username) {
        return rejectWithValue("Invalid channel data: missing username");
      }

      // Your backend expects data in a specific nested format
      const requestData = {
        data: {
          channels: [
            {
              username: channelData.username,
              subs: channelData.subs,
              videos: channelData.videos || [],
            },
          ],
        },
      };

      console.log("Request payload:", requestData);

      const res = await axios.post(
        `http://localhost:4000/api/analyze`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("AI service response:", res.data);

      if (!res.data) {
        return rejectWithValue("No analysis data received");
      }

      return res.data;
    } catch (err: any) {
      console.error("AI Analysis Error:", err);
      console.error("Error response:", err.response?.data);
      console.error("Error status:", err.response?.status);
      console.error("Error headers:", err.response?.headers);

      return rejectWithValue(
        err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Failed to analyze channel data. Make sure the AI service is running on http://localhost:4000"
      );
    }
  }
);

export { postInfoToAi };
