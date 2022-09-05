import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import styles from './movieList.style';

const MovieList = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hello MovieList</Text>
      <Button title="go" onPress={() => navigation.navigate('MovieDetail')} />
    </SafeAreaView>
  );
};

export default MovieList;
