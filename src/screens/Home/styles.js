import {StyleSheet} from 'react-native';
import {Metrics} from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
  },
  banner: {
    marginTop: 20,
    height: Metrics.screenHeight * 0.15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 16,
  },
  text: {
    color: 'white',
    marginVertical: 6,
  },
  titleBanner: {
    fontSize: 22,
    color: 'white',
  },
});
