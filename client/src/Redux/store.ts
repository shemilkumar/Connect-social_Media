import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slicers/userSlicer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
