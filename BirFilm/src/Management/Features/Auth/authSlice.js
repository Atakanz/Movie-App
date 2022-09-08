import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
  },
  reducers: {
    setAuth: (state, action) => {
      return {
        auth: action.payload,
      };
    },
  },
});

export const {setAuth} = authSlice.actions;

export default authSlice.reducer;
