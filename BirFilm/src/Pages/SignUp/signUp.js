import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './signUp.style';
import LoginForm from '../../Components/LoginForm/LoginForm';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../Management/Features/Login/userSlice';

const SignUp = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRePassword, setUserRePassword] = useState('');
  const [userName, setUserName] = useState('');
  const userRedux = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const goBack = () => {
    return navigation.goBack();
  };
  // const userObject = {
  //   email: userEmail,
  //   password: userPassword,
  //   username: userName,
  // };

  const signUpTask = () => {
    dispatch(
      setUser({
        email: userEmail,
        password: userPassword,
        username: userName,
      }),
    );
    goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>{userPassword}</Text>
      <LoginForm
        isLogoExist={require('../../Assets/logo.png')}
        // logo is shown only loginpages not editing page
        holder1="E-mail"
        holder2="Password"
        holder3="Password again"
        holder4="User name"
        name1="Sign Up"
        value1={userEmail}
        value2={userPassword}
        value3={userRePassword}
        value4={userName}
        emailFormTask={setUserEmail}
        passwordFormTask={setUserPassword}
        repasswordFormTask={setUserRePassword}
        userNameFormTask={setUserName}
        task1={signUpTask}
      />
    </SafeAreaView>
  );
};

export default SignUp;
