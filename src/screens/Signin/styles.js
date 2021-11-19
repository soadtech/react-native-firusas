import {StyleSheet} from 'react-native';
import {Metrics} from '../../themes/metrics';

const marginTop = Metrics.screenWidth * 0.1;
export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginTop,
  },
  containerForm: {
    paddingHorizontal: 18,
    marginTop,
  },
  containerBtn: {
    marginTop,
  },
  labelBtn: {
    color: 'white',
  },
  btn: {
    width: Metrics.screenWidth * 0.9,
  },
  or: {
    textAlign: 'center',
  },
  containerBntServices: {
    marginTop,
  },
  hasAccount: {
    textAlign: 'center',
    marginTop: 10,
  },
  action: {
    textDecorationLine: 'underline',
  },
});
