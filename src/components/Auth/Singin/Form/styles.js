import {StyleSheet, Platform} from 'react-native';
import colors from '../../../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
  },
  containerInput: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 11 : 0,
  },
});
