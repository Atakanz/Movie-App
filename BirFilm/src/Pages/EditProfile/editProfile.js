import React, {useState} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import styles from './editProfile.style';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../Management/Features/Login/userSlice';
import {setAuth} from '../../Management/Features/Auth/authSlice';
import {setLoading} from '../../Management/Features/Loading/loadingSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginForm from '../../Components/LoginForm/LoginForm';

const EditProfile = ({navigation}) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userName, setUserName] = useState(null);
  const userInfo = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const logOut = async () => {
    dispatch(setUser(null));
    await AsyncStorage.removeItem('savedItem');
    dispatch(setAuth(false));
  };

  const changeInformation = () => {
    dispatch(
      setUser({
        email: userEmail,
        password: userPassword,
        username: userName,
      }),
    );
    AsyncStorage.setItem(
      'savedItem',
      JSON.stringify({
        email: userEmail,
        password: userPassword,
        username: userName,
      }),
    );
  };
  return (
    <SafeAreaView style={styles.enabledDirection}>
      <LoginForm
        isLogoExist={require('../../Assets/logo.png')}
        holder1="E-mail"
        holder2="Password"
        holder4="User name"
        name1="Change information"
        name2="Log Out"
        value1={userEmail}
        value2={userPassword}
        value4={userName}
        emailFormTask={value => setUserEmail(value)}
        passwordFormTask={value => setUserPassword(value)}
        userNameFormTask={value => setUserName(value)}
        task1={changeInformation}
        task2={logOut}
        visibilityFalse={false}
        visibilityTrue={true}
      />
    </SafeAreaView>
  );
};

export default EditProfile;
