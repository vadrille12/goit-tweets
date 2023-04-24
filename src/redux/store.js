import { configureStore } from '@reduxjs/toolkit';
import { tweetsSlice } from './tweets/slice';
import { filterSlice } from './filter/slice';

export const store = configureStore({
  reducer: {
    tweets: tweetsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
