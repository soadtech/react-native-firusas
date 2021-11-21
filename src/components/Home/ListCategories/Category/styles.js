import {StyleSheet} from 'react-native';
import {Metrics} from '../../../../themes/metrics';

export const styles = StyleSheet.create({
  category: {
    marginTop: 14,
    height: Metrics.screenHeight * 0.15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    marginRight: 14,
  },
  imageStyle: {
    borderRadius: 8,
  },
});
