import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../../Redux/Features/todoSlice'

export const store = configureStore({
  reducer: {
    ToDos : todoReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
