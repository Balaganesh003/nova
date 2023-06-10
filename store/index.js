import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './posts-slice';
import experienceSlice from './experience-slice';

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    experience: experienceSlice.reducer,
  },
});

export default store;
