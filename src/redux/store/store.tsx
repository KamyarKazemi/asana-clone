import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../slices/searchChannelSlice";
import usersReducer from "../slices/usersSlice";
import infoReducer from "../slices/aiInfoSlice";

const store = configureStore({
  reducer: {
    searchChannel: channelReducer,
    users: usersReducer,
    infos: infoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
