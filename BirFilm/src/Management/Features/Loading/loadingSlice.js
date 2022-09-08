import {createSlice} from '@reduxjs/toolkit';
import {useEffect} from 'react';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loading: true,
  },
  reducers: {
    setLoading: (state, action) => {
      return {
        loading: action.payload,
      };
    },
  },
});

export const {setLoading} = loadingSlice.actions;
export default loadingSlice.reducer;
