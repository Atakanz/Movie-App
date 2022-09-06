import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import styles from './TextInputs.style';

const FormUnit = props => {
  return (
    <TextInput
      style={styles.formUnit}
      label={props.labelName}
      placeholder={props.holder}
      onChangeText={props.task}
    />
  );
};

export default FormUnit;
