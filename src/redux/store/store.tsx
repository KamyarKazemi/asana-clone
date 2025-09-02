import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../slices/searchChannelSlice";
import usersReducer from "../slices/usersSlice";
import subsReducer from "../slices/subsSlice";

const store = configureStore({
  reducer: {
    searchChannel: channelReducer,
    users: usersReducer,
    subs: subsReducer,
  },
});

export default store;
