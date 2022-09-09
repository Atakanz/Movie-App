import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../Pages/SignUp/signUp';
import SignIn from '../Pages/SignIn/signIn';
import {BottomTab} from './BottomTab';
import MovieDetail from '../Pages/MovieDetail/movieDetail';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../Management/Features/Login/userSlice';
import {setAuth} from '../Management/Features/Auth/authSlice';
import {setLoading} from '../Management/Features/Loading/loadingSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Loading from '../Components/Loading/loading';
const Stack = createNativeStackNavigator();

export const MainStack = () => {
  const dispatch = useDispatch();
  const getSavedItem = async () => {
    let userData = await AsyncStorage.getItem('savedItem');
    const _user = userData ? userData : null;
    dispatch(setUser(_user));
    dispatch(setLoading(false));
    if (_user !== null) {
      dispatch(setAuth(true));
    }
  };
  //   const getLoginStatus = async () => {
  //     let status = await AsyncStorage.getItem('savedLoginStatus');
  //   };
  useEffect(() => {
    getSavedItem();
  }, []);

  const isSignedIn = useSelector(state => state.auth.auth);
  const user = useSelector(state => state.user.user);
  const isLoading = useSelector(state => state.loading.loading);
  console.log(isLoading);
  return (
    <NavigationContainer>
      {/* {isLoading === true ? (
        <Loading /> */}
      {/* ) :  */}
      {!user ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
