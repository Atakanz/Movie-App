import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import styles from './signIn.style';
import LoginForm from '../../Components/LoginForm/LoginForm';
import {useSelector, useDispatch} from 'react-redux';
const SignIn = ({navigation}) => {
  const signInButton = () => {
    navigation.navigate('BottomTab');
  };
  const signUpButton = () => {
    navigation.navigate('SignUp');
  };
  const userRedux = useSelector(state => state.user.user.password);
  return (
    <SafeAreaView style={styles.container}>
      <Text>{userRedux}</Text>
      <LoginForm
        isLogoExist={require('../../Assets/logo.png')}
        // logo is shown only loginpages, not editing page
        holder1="E-mail"
        holder2="Password"
        holder4="User name"
        name1="Sign In"
        name2="Sign Up"
        task1={signInButton}
        task2={signUpButton}
      />
    </SafeAreaView>
  );
};

export default SignIn;
