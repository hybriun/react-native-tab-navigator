import { StyleSheet } from 'react-native';
import rem from '../rem';

export default style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rippleViewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rippleViewAnimated: {
    width: 70 * rem,
    height: 70 * rem,
    borderRadius: 35 * rem,
  },
  buttonContainer: {
    padding: 20 * rem,
    position: 'relative',
  }
});