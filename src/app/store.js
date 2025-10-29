import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "../api/todoApi";

const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
  devTools: true,
});

export default store;
