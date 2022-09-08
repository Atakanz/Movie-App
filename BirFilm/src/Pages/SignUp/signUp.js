import React, {useState} from 'react';
import {SafeAreaView, Text, Alert} from 'react-native';
import styles from './signUp.style';
import LoginForm from '../../Components/LoginForm/LoginForm';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const SignUp = ({navigation}) => {
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserRePassword, setNewUserRePassword] = useState('');
  const [newUserName, setNewUserName] = useState('');

  const goBack = () => {
    return navigation.goBack();
  };

  const signUpTask = () => {
    if (
      newUserRePassword === newUserPassword &&
      newUserRePassword !== '' &&
      newUserEmail !== '' &&
      newUserName !== '' &&
      newUserPassword !== ''
    ) {
      axios.post('http://localhost:3000/users', {
        email: newUserEmail,
        password: newUserPassword,
        username: newUserName,
      });
    } else {
      Alert.alert('Bir Film', 'Passwords do not match');
      return;
    }
    goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{newUserEmail}</Text>
      <LoginForm
        isLogoExist={require('../../Assets/logo.png')}
        // logo is shown only loginpages not editing page
        holder1="E-mail"
        holder2="Password"
        holder3="Password again"
        holder4="User name"
        name1="Sign Up"
        value1={newUserEmail}
        value2={newUserPassword}
        value3={newUserRePassword}
        value4={newUserName}
        emailFormTask={setNewUserEmail}
        passwordFormTask={setNewUserPassword}
        repasswordFormTask={setNewUserRePassword}
        userNameFormTask={setNewUserName}
        task1={signUpTask}
      />
    </SafeAreaView>
  );
};

export default SignUp;
