import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/campersSlice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
