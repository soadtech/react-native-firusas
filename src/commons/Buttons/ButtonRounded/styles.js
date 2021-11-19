import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';
import {Metrics} from '../../../themes/metrics';

export const _styles = disabled =>
  StyleSheet.create({
    container: {
      backgroundColor: disabled ? colors.gray : colors.primary,
      width: Metrics.screenWidth * 0.4,
      height: Metrics.screenWidth * 0.11,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
    text: {
      color: 'white',
    },
  });
