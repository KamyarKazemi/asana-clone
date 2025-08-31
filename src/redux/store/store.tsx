import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../slices/searchChannelSlice";
import usersReducer from "../slices/usersSlice";

const store = configureStore({
  reducer: {
    searchChannel: channelReducer,
    users: usersReducer,
  },
});

export default store;
