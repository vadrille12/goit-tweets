import { configureStore } from "@reduxjs/toolkit";
import { tweetsSlice } from "./tweets/slice";

export const store = configureStore({
  reducer: { tweets: tweetsSlice.reducer },
});
