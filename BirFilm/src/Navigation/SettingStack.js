import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from '../Pages/EditProfile/editProfile';
import ThemeSettings from '../Pages/ThemeSettings/themeSettings';
import Settings from '../Pages/Settings/settings';

const Stack = createNativeStackNavigator();

export const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ThemeSettings" component={ThemeSettings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};
