import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';
import fonts from '../../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: colors.facebook,
    paddingVertical: 14,
  },
  text: {
    ...fonts.bold,
    color: colors.primary,
  },
  containerIcon: {
    position: 'absolute',
    left: 20,
  },
});
