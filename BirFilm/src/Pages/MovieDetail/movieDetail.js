import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import styles from './movieDetail.style';
import Category from '../../Data/genre-id.json';
import {useSelector} from 'react-redux';

const MovieDetail = ({route, navigation}) => {
  const theme = useSelector(state => state.theme.theme);
  const {item} = route.params;
  const genreNames = [];
  for (var i = 0; i < item.genre_ids.length; i++) {
    const indexOfTypes = Category.genres.indexOf(
      // find the index of the specific movie genre id's in the json data
      Category.genres.find(function (elem) {
        return elem.id === item.genre_ids[i];
      }),
    );
    genreNames.push(Category.genres[indexOfTypes].name);
    // push the new array consisting of the genre names of the movie
  }
  return (
    <ScrollView style={[styles.container, styles[`container${theme}`]]}>
      <View style={styles.coverPhotoView}>
        <Image
          style={styles.coverPhoto}
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
        />
      </View>
      <View>
        <Text style={[styles.textTitle, styles[`textTitle${theme}`]]}>
          {item.title}
        </Text>
      </View>
      <View style={styles.yearInfoView}>
        <Text style={[styles.textYear, styles[`textYear${theme}`]]}>
          {item.release_date.substring(0, 4)}
        </Text>
      </View>
      <View style={styles.coverPhotoView}>
        <Text style={[styles.category, styles[`category${theme}`]]}>
          {genreNames.join(', ')}
        </Text>
      </View>
      <View style={styles.coverPhotoView}>
        <Text style={[styles.textOverview, styles[`textOverview${theme}`]]}>
          {item.overview}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
