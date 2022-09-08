import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import styles from './settings.style';

const Settings = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hello Settings!</Text>
      <Button
        title="Go"
        onPress={() => {
          navigation.navigate('EditProfile');
        }}
      />
    </SafeAreaView>
  );
};

export default Settings;
