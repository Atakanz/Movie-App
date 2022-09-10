import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  enabledDirection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    width: Dimensions.get('window').width / 1.2,
    alignItems: 'center',
  },
  logoView: {
    marginBottom: 17,
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 100,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 30,
  },
});
