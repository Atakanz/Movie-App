import React from 'react';
import {TouchableWithoutFeedback, View, Text, Image} from 'react-native';
import styles from './MovieCard.style';
import {useSelector} from 'react-redux';

const MovieCard = props => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <TouchableWithoutFeedback onPress={props.task} style={styles.container}>
      <View style={styles.enableDirection}>
        <View style={styles.rowDirection}>
          <View>
            <Image source={{uri: props.posterPath}} style={styles.poster} />
          </View>
          <View>
            <View>
              <Text style={[styles.textTitle, styles[`textTitle${theme}`]]}>
                {props.title}
              </Text>
            </View>
            <View>
              <Text style={[styles.subText, styles[`subText${theme}`]]}>
                Point: {props.voteAverage}
              </Text>
            </View>
            <View>
              <Text style={[styles.subText, styles[`subText${theme}`]]}>
                Release date: {props.date}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
