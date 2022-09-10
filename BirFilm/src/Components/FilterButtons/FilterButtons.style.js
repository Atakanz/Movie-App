import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height / 15,
    paddingHorizontal: 10,
  },
  buttons: {
    backgroundColor: '#2874a6',
    opacity: 0.95,
    padding: 10,
    borderRadius: 12,
    width: Dimensions.get('window').width / 2.8,
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
