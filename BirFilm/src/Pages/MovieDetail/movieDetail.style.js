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
    height: Dimensions.get('window').height / 1.1,
    resizeMode: 'contain',
  },
  textTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
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
    color: '#2874a6',
  },
  categoryDark: {
    color: '#2874a6',
  },
  categoryLight: {
    color: 'darkgray',
  },
  category: {
    marginTop: 5,
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  textYear: {
    borderRadius: 10,
    marginVertical: 4,
    width: 'auto',
    marginHorizontal: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 'auto',
    borderWidth: 1,
    fontSize: 13,
  },
  textYearDark: {
    color: '#fff',
    borderColor: '#2874a6',
  },
  textYearLight: {
    color: '#2874a6',
  },
});
