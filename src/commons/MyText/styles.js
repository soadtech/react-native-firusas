import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';

export const styles = StyleSheet.create({
  text: {
    ...fonts.regular,
    fontSize: 16,
    color: colors.primary,
  },
});
