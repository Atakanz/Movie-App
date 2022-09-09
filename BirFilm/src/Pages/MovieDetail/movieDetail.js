import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, ScrollView} from 'react-native';
import styles from './movieDetail.style';
import axios from 'axios';

const MovieDetail = ({route, navigation}) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=330045487adad93254480466da226e81',
      )
      .then(response => {
        setCategory(response.data.genres);
      });
  }, []);
  const {item} = route.params;
  const genreNames = category.filter(genre => genre.id === item.genre_ids);
  const onlyGenreNames = genreNames.map(item => item.name);
  return (
    <ScrollView>
      <View style={styles.coverPhotoView}>
        <Image
          style={styles.coverPhoto}
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
        />
      </View>
      <View style={styles.coverPhotoView}>
        <Text style={styles.textTitle}>{item.title}</Text>
      </View>
      <View style={styles.coverPhotoView}>
        <Text style={styles.textOverview}>{item.overview}</Text>
      </View>
      <View style={styles.coverPhotoView}>
        <Text style={styles.textOverview}>{onlyGenreNames.join(',')}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
