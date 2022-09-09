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
      <Tab.Screen
        name="Movies"
        component={MovieList}
        options={{
          tabBarLabel: 'Movies',
          tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Icon name="movie" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchMovie}
        options={{
          tabBarLabel: 'Search',
          tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Icon name="magnify" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Icon name="account-settings" color="black" size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
