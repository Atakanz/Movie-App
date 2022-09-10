import React, {useState, useEffect} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import styles from './signIn.style';
import LoginForm from '../../Components/LoginForm/LoginForm';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {setUser} from '../../Management/Features/Login/userSlice';
import {setAuth} from '../../Management/Features/Auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userName, setUserName] = useState(null);
  const theme = useSelector(state => state.theme.theme);

  const signUpButton = () => {
    navigation.navigate('SignUp');
  };

  const [allUserArray, setAllUserArray] = useState([]);
  // the array will be set with the data coming from api

  const dispatch = useDispatch();

  const getUsers = () => {
    axios.get('http://localhost:3000/users').then(response => {
      setAllUserArray(response.data);
    });
  };
  // user list is taken from api and setted 

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUsers();
    });
    return unsubscribe;
  }, [navigation]);
  // when navigate back from signup page, re-take the apı

  const logInButton = () => {
    const isExist = allUserArray.some(function (item) {
      return (
        item.email === userEmail &&
        item.password === userPassword &&
        item.username === userName
      );
    });
    // if exist return true
    const indexValue = allUserArray.indexOf(
      allUserArray.find(function (item) {
        return item.email === userEmail;
      }),
    );
    // take the id of the user to re-use in the edit page for axios putting
    if (isExist === true) {
      dispatch(
        setUser({
          email: userEmail,
          password: userPassword,
          username: userName,
          id: allUserArray[indexValue].id,
        }),
      );
      // if matched, set the redux user
      dispatch(setAuth(true));
      navigation.navigate('BottomTab');
      AsyncStorage.setItem(
        'savedUser',
        JSON.stringify({
          email: userEmail,
          password: userPassword,
          username: userName,
        }),
      );
      // save to the memo of phone
    } else {
      Alert.alert('Bir Film', 'User not found');
    }
  };

  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
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
        // password input
      />
    </SafeAreaView>
  );
};

export default SignIn;
