import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../Pages/SignUp/signUp';
import SignIn from '../Pages/SignIn/signIn';
import {BottomTab} from './BottomTab';
import MovieDetail from '../Pages/MovieDetail/movieDetail';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../Management/Features/Login/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

export const MainStack = () => {
  const [isSignedIn, setSignedIn] = useState(false);
  const dispatch = useDispatch();
  const getSavedItem = async () => {
    let userData = await AsyncStorage.getItem('savedItem');
    const _user = userData ? userData : null;
    dispatch(setUser(_user));
    if (_user !== null) {
      setSignedIn(true);
    }
  };
  //   const getLoginStatus = async () => {
  //     let status = await AsyncStorage.getItem('savedLoginStatus');
  //   };
  useEffect(() => {
    getSavedItem();
  }, []);

  const userInfo = useSelector(state => state.user.user);
  //   console.log(userInfo);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isSignedIn === false ? (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
          </>
        ) : (
          <>
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
