import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./features/weatherReducer";
import { weatherCoreApi } from "./servers/weatherCoreApi";

export const store = configureStore({
  reducer: {
    [weatherCoreApi.reducerPath]: weatherCoreApi.reducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherCoreApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
