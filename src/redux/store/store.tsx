import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../slices/searchChannelSlice";
import usersReducer from "../slices/usersSlice";
import infoReducer from "../slices/aiInfoSlice";
import commentsReducer from "../slices/commentsSlice";

const store = configureStore({
  reducer: {
    searchChannel: channelReducer,
    users: usersReducer,
    infos: infoReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
