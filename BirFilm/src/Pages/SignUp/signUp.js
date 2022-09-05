import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import styles from './signUp.style';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hello SıgnUp!</Text>
      <Button title="go" onPress={() => navigation.navigate('BottomTab')} />
    </SafeAreaView>
  );
};

export default SignUp;
