import React from 'react';
import {TouchableWithoutFeedback, View, Text, Image} from 'react-native';
import styles from './MovieCard.style';

const MovieCard = props => {
  return (
    <TouchableWithoutFeedback onPress={props.task} style={styles.container}>
      <View style={styles.enableDirection}>
        <View style={styles.rowDirection}>
          <View>
            <Image source={{uri: props.posterPath}} style={styles.poster} />
          </View>
          <View>
            <View>
              <Text style={styles.textTitle}>{props.title}</Text>
            </View>
            <View>
              <Text>Point: {props.voteAverage}</Text>
            </View>
            <View>
              <Text>Release date: {props.date}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
