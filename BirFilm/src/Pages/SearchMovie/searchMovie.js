import React, {useState, useEffect} from 'react';
import {SafeAreaView, TextInput, FlatList, Text} from 'react-native';
import styles from './searchMovie.style';
import MovieCard from '../../Components/MovieCards/MovieCard';
import {useSelector} from 'react-redux';

const SearchMovie = ({navigation}) => {
  const movieList = useSelector(state => state.movieList.movieList);
  const [list, setList] = useState([]);
  const theme = useSelector(state => state.theme.theme);

  const handleSearch = text => {
    const filteredList = movieList.filter(item => {
      const searchedText = text.toLowerCase();
      const currentTitle = item.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <TextInput
        style={styles.textInput}
        placeholder="Search a movie"
        onChangeText={handleSearch}
        placeholderTextColor={theme === 'Light' ? '#212121' : '#fff'}
      />
      <FlatList
        data={list}
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

export default SearchMovie;
