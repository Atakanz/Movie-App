import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  enabledDirection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    width: Dimensions.get('window').width / 1.2,
    position: 'relative',
    left: 56,
  },
  logoView: {
    marginBottom: 25,
    alignItems: 'center',
  },
  logo: {
    width: 280,
    height: 100,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 25,
  },
});
