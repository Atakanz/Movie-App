import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieList from '../Pages/MovieList/movieList';
import SearchMovie from '../Pages/SearchMovie/searchMovie';
import {SettingStack} from './SettingStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
4;
import {useSelector} from 'react-redux';
const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  const theme = useSelector(state => state.theme.theme);
  const colorSelect = theme === 'Dark' ? '#fff' : '#212121';
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: theme === 'Dark' ? '#fff' : '#212121',
        headerStyle: {
          backgroundColor: theme === 'Dark' ? '#212121' : '#fff',
        },
        tabBarInactiveBackgroundColor: theme === 'Dark' ? '#212121' : '#fff',
        tabBarActiveBackgroundColor: theme === 'Dark' ? '#212121' : '#fff',
      }}>
      <Tab.Screen
        name="Movies"
        component={MovieList}
        options={{
          tabBarLabel: 'Movies',
          tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Icon name="movie" color={colorSelect} size={25} />
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
            <Icon name="magnify" color={colorSelect} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Icon name="account-settings" color={colorSelect} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
