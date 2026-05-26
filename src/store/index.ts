import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import machineReducer from './slices/machineSlice';
import authReducer from './slices/authSlice';

// Import your slices and reducers here

const store = configureStore({
  reducer: {
    auth: authReducer,
    machine: machineReducer, 

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;