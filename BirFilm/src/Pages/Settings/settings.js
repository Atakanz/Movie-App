import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './settings.style';
import Buttons from '../../Components/Buttons';
import {useSelector} from 'react-redux';

const Settings = ({navigation}) => {
  const userInfo = useSelector(state => state.user.user);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.profilePhotoView}>
          <Image
            source={require('../../Assets/atakan.jpg')}
            style={styles.profilePhoto}
          />
          <View style={styles.profileInfoCard}>
            <Text style={styles.profileName}>E-mail: {userInfo.email}</Text>

            <Text style={styles.profileName}>User: {userInfo.username}</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Buttons
            name="Theme Settings"
            task={() => navigation.navigate('ThemeSettings')}
          />
          <Buttons
            name="Edit Profile"
            task={() => navigation.navigate('EditProfile')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
