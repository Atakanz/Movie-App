import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieList from '../Pages/MovieList/movieList';
import SearchMovie from '../Pages/SearchMovie/searchMovie';
import {SettingStack} from './SettingStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MovieList" component={MovieList} />
      <Tab.Screen name="SearchMovie" component={SearchMovie} />
      <Tab.Screen name="SettingStack" component={SettingStack} />
    </Tab.Navigator>
  );
};
