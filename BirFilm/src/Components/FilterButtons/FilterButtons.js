import React from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from './FilterButtons.style';

const FilterButtons = props => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.buttons} onPress={props.task1}>
        <Text style={styles.text}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={props.task2}>
        <Text style={styles.text}>Top Rated</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={props.task3}>
        <Text style={styles.text}>Newest</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FilterButtons;
