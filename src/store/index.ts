import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Import your slices and reducers here

const store = configureStore({
  reducer: {
// Combine your reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;