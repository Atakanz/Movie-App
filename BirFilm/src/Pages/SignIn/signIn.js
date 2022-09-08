import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button, Alert} from 'react-native';
import styles from './signIn.style';
import LoginForm from '../../Components/LoginForm/LoginForm';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {setUser} from '../../Management/Features/Login/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userName, setUserName] = useState(null);

  const signUpButton = () => {
    navigation.navigate('SignUp');
  };

  const [allUserArray, setAllUserArray] = useState([]);
  const [existUser, setExistUser] = useState([]);
  const dispatch = useDispatch();

  const saveUser = async () => {
    await AsyncStorage.setItem('savedItem', JSON.stringify(existUser));
  };

  const handleGetUsers = () => {
    axios.get('http://localhost:3000/users').then(response => {
      setAllUserArray(response.data);
    });
  };
  useEffect(() => {
    handleGetUsers();
  }, []);

  allUserArray.forEach(object => {
    delete object.id;
  });

  const checker = () => {
    setExistUser({
      email: userEmail,
      password: userPassword,
      username: userName,
    });
    const result = allUserArray.some(function (item) {
      return (
        item.email === existUser.email &&
        item.password === existUser.password &&
        item.username === existUser.username
      );
    });
    if (result === true) {
      existUser.loggedIn = true;
      dispatch(setUser(existUser));
      navigation.navigate('BottomTab');
      saveUser();
    } else {
      Alert.alert('Bir Film', 'User not found');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoginForm
        isLogoExist={require('../../Assets/logo.png')}
        // logo is shown only loginpages, not editing page
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
        task1={checker}
        task2={signUpButton}
      />
    </SafeAreaView>
  );
};

export default SignIn;
