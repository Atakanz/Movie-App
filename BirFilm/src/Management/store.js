import {configureStore} from '@reduxjs/toolkit';
import authSlice from './Features/Auth/authSlice';
import userSlice from './Features/Login/userSlice';
import loadingSlice from './Features/Loading/loadingSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    loading: loadingSlice,
  },
});
