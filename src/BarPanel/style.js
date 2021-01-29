import { StyleSheet } from 'react-native';
import rem from '../rem';

export default style = StyleSheet.create({
  container: {
    width: '100%',
    height: 150 * rem,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  }
});