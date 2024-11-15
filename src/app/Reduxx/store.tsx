import { configureStore } from "@reduxjs/toolkit";
import NewOne_Learning from "./slicer";
export const store = configureStore({
  reducer: {
    NewOne_Learning,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
