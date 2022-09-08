import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import styles from './editProfile.style';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../Management/Features/Login/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const remover = async () => {
    dispatch(setUser(null));
    await AsyncStorage.removeItem('savedItem');
    navigation.navigate('SignIn');
  };
  const removeStatus = async () => {
    await AsyncStorage.setItem('savedLoginStatus', JSON.stringify(false));
  };
  const userInfo = useSelector(state => state.user.user);
  const logOut = () => {
    remover();
    // console.log(userInfo);
  };
  return (
    <SafeAreaView>
      {/* <Text>{userRedux}</Text> */}
      <Text>Hello editProfile!</Text>
      <Button onPress={logOut} title="Log out" />
    </SafeAreaView>
  );
};

export default EditProfile;
