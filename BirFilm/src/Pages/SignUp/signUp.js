import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import styles from './signUp.style';
import LoginForm from '../../Components/LoginForm/LoginForm';

const SignUp = ({navigation}) => {
  const goBack = () => {
    return navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <LoginForm
        isLogoExist={require('../../Assets/logo.png')}
        // logo is shown only loginpages not editing page
        holder1="E-mail"
        holder2="Password"
        holder3="Password again"
        name1="Sign Up"
        task1={goBack}
      />
    </SafeAreaView>
  );
};

export default SignUp;
