import {StyleSheet} from 'react-native';
import {Metrics} from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    height: Metrics.screenHeight * 0.9,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  description: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: Metrics.screenWidth * 0.1,
  },
  containerBtn: {
    marginTop: Metrics.screenWidth * 0.06,
  },
  btn: {
    backgroundColor: 'white',
    height: Metrics.screenWidth * 0.13,
  },
});
