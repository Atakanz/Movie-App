import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, ScrollView} from 'react-native';
import styles from './movieDetail.style';
import axios from 'axios';
import {useSelector} from 'react-redux';

const MovieDetail = ({route, navigation}) => {
  const theme = useSelector(state => state.theme.theme);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=330045487adad93254480466da226e81',
      )
      .then(response => {
        setCategory(response.data.genres);
        console.log(response.data);
      });
  }, []);
  const {item} = route.params;
  const genreNames = [];
  for (var i = 0; i < item.genre_ids.length; i++) {
    const indexOfTypes = category.indexOf(
      category.find(function (elem) {
        return elem.id === item.genre_ids[i];
      }),
    );
    genreNames.push(category[indexOfTypes].name);
  }
  return (
    <ScrollView style={[styles.container, styles[`container${theme}`]]}>
      <View style={styles.coverPhotoView}>
        <Image
          style={styles.coverPhoto}
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
        />
      </View>
      <View style={styles.coverPhotoView}>
        <Text style={[styles.textTitle, styles[`textTitle${theme}`]]}>
          {item.title}
        </Text>
      </View>
      <View style={styles.coverPhotoView}>
        <Text style={[styles.textOverview, styles[`textOverview${theme}`]]}>
          {item.overview}
        </Text>
      </View>
      <View style={styles.coverPhotoView}>
        <Text style={styles.textOverview}>{genreNames.join(',')}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
