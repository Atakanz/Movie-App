import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './Pages/SignUp/signUp';
import SignIn from './Pages/SignIn/signIn';
import {BottomTab} from './Navigation/BottomTab';
import MovieDetail from './Pages/MovieDetail/movieDetail';
import {store} from './Management/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
