import {StyleSheet} from 'react-native';
import fonts from "../../../themes/fonts";

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerCart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cart: {
    marginRight: 14,
  },
  title: {
    ...fonts.bold,
    textAlign: 'center',
    fontSize: 18,
  }
});
