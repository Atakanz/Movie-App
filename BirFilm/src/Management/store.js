import {configureStore} from '@reduxjs/toolkit';
import userSlice from './Features/Login/userSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
