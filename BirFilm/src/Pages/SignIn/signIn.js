import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import styles from './signIn.style';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hello SıgnIn!</Text>
      <Button title="Go" onPress={() => navigation.navigate('SignUp')} />
    </SafeAreaView>
  );
};

export default SignIn;
