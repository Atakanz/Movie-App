import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  movieList: null,
};

export const movieListSlice = createSlice({
  name: 'movieList',
  initialState,
  reducers: {
    setMovieList: (state, action) => {
      return {
        movieList: action.payload,
      };
    },
  },
});

export const {setMovieList} = movieListSlice.actions;

export default movieListSlice.reducer;
