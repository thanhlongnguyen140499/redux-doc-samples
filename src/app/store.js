import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'

export default configureStore({
  // reducer: () => ({}),
  reducer: {
    posts: postsReducer,
  },
})