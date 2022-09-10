import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, Button, FlatList} from 'react-native';
import styles from './movieList.style';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setMovieList} from '../../Management/Features/MovieList/movieListSlice';
import MovieCard from '../../Components/MovieCards/MovieCard';
import FilterButtons from '../../Components/FilterButtons/FilterButtons';
import moment from 'moment';

const MovieList = ({navigation}) => {
  const theme = useSelector(state => state.theme.theme);
  // take theme info
  const dispatch = useDispatch();
  const [movieInfo, setMovieInfo] = useState([]);
  // this will be the data of flat list
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=330045487adad93254480466da226e81',
      )
      .then(response => {
        dispatch(setMovieList(response.data.results));
        setMovieInfo(response.data.results);
      });
  }, []);
  // when the page is shown take the data of apı

  const defaultMovie = useSelector(state => state.movieList.movieList);
  const topRatedFilter = () => {
    const topRated = defaultMovie.filter(item => item.vote_average > 7.7);
    setMovieInfo(topRated);
  };
  // when the movie point is more than 7.7, then filter the redux movie list
  const newestFilter = () => {
    const date = moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSSZZ');
    const monthStart = parseInt(date[5] + date[6]) - 2;
    console.log(monthStart);
    const newests = defaultMovie.filter(
      item => parseInt(item.release_date[6]) > monthStart,
    );
    // when the movie just one month old, then set flatlist data with filtered
    setMovieInfo(newests);
  };
  const allMovies = () => {
    setMovieInfo(defaultMovie);
  };
  // for all movies

  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <FlatList
        ListHeaderComponent={() => (
          <FilterButtons
            task1={allMovies}
            task2={topRatedFilter}
            task3={newestFilter}
          />
        )}
        data={movieInfo}
        renderItem={({item}) => (
          <MovieCard
            title={item.title}
            voteAverage={item.vote_average}
            posterPath={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            date={item.release_date}
            task={() => navigation.navigate('MovieDetail', {item})}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MovieList;
