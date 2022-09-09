import React, {useState, useEffect} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import styles from './signIn.style';
import LoginForm from '../../Components/LoginForm/LoginForm';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {setUser} from '../../Management/Features/Login/userSlice';
import {setAuth} from '../../Management/Features/Auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userName, setUserName] = useState(null);

  const signUpButton = () => {
    navigation.navigate('SignUp');
  };

  const [allUserArray, setAllUserArray] = useState([]);

  const dispatch = useDispatch();

  const handleGetUsers = () => {
    axios.get('http://localhost:3000/users').then(response => {
      setAllUserArray(response.data);
    });
  };
  useEffect(() => {
    handleGetUsers();
  }, []);

  const logInButton = () => {
    const result = allUserArray.some(function (item) {
      return (
        item.email === userEmail &&
        item.password === userPassword &&
        item.username === userName
      );
    });
    if (result === true) {
      dispatch(
        setUser({
          email: userEmail,
          password: userPassword,
          username: userName,
        }),
      );
      dispatch(setAuth(true));
      navigation.navigate('BottomTab');
      AsyncStorage.setItem(
        'savedItem',
        JSON.stringify({
          email: userEmail,
          password: userPassword,
          username: userName,
        }),
      );
    } else {
      Alert.alert('Bir Film', 'User not found');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoginForm
        isLogoExist={require('../../Assets/logo.png')}
        holder1="E-mail"
        holder2="Password"
        holder4="User name"
        name1="Sign In"
        name2="Sign Up"
        value1={userEmail}
        value2={userPassword}
        value4={userName}
        emailFormTask={value => setUserEmail(value)}
        passwordFormTask={value => setUserPassword(value)}
        userNameFormTask={value => setUserName(value)}
        task1={logInButton}
        task2={signUpButton}
        visibilityFalse={false}
        visibilityTrue={true}
      />
    </SafeAreaView>
  );
};

export default SignIn;
