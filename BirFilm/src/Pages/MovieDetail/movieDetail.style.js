import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLight: {
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#212121',
  },
  coverPhoto: {
    width: '100%',
    height: Dimensions.get('window').height / 1.2,
    resizeMode: 'contain',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
    color: 'black',
  },
  textOverview: {
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 20,
    maxWidth: 400,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  textOverviewLight: {
    color: '#212121',
  },
  textOverviewDark: {
    color: '#fff',
  },
  textTitleDark: {
    color: '#fff',
  },
  textTitleLight: {
    color: '#212121',
  },
});
