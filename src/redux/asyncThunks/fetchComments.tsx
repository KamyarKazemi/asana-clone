import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchComments = createAsyncThunk(
  "comments/fetch",
  async (searchTerm: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:3005/channels?username=${searchTerm}`
      );

      // Extract comments from all videos of the channel
      const channelData = res.data;
      const allComments: any[] = [];

      if (channelData && channelData.videos) {
        channelData.videos.forEach((video: any, videoIndex: number) => {
          if (video.comments && Array.isArray(video.comments)) {
            video.comments.forEach((comment: any, commentIndex: number) => {
              allComments.push({
                id: `${videoIndex}-${commentIndex}`,
                author: comment.userUsername,
                text: comment.comment,
                timestamp: "Recently", // Since timestamp isn't in your backend
                videoTitle: video.title,
                likes: Math.floor(Math.random() * 50), // Random likes since not in backend
              });
            });
          }
        });
      }

      return allComments;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export { fetchComments };
