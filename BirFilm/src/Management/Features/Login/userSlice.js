import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        user: action.payload,
      };
    },
    logOut: (state, action) => {
      AsyncStorage.removeItem('savedUser');
      user: action.payload;
    },
  },
});

export const {setUser, logOut} = userSlice.actions;

export default userSlice.reducer;
