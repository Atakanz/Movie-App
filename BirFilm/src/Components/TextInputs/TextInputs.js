import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import styles from './TextInputs.style';
import {useSelector} from 'react-redux';

const FormUnit = props => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <TextInput
      style={[styles.formUnit, styles[`formUnit${theme}`]]}
      label={props.labelName}
      placeholder={props.holder}
      onChangeText={props.task}
      secureTextEntry={props.visibility}
      placeholderTextColor={theme === 'Light' ? '#212121' : '#fff'}
    />
  );
};

export default FormUnit;
