import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
    color: 'darkblue',
  },
  textOverview: {
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 20,
    color: 'gray',
    maxWidth: 400,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
});
