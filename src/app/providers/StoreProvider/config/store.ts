import { configureStore } from '@reduxjs/toolkit';

export const createReduxStore = () =>
  configureStore({
    reducer: {},
    devTools: __IS_DEV__,
  });

export const store = createReduxStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
