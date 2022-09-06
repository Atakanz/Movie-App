import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Buttons.style';

const Buttons = ({name, task}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={task}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Buttons;
