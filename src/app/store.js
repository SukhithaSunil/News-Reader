import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../reducers/news-reducer';

export default configureStore({
  reducer: {
    news: newsReducer,
  },
});
