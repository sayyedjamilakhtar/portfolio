import { configureStore } from "@reduxjs/toolkit";
import { projectsApi } from "./features/projectApiSlice";
import activeCategoryReducer from "./features/activeCategorySlice";

export const store = configureStore({
  reducer: {
    activeCategory: activeCategoryReducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
