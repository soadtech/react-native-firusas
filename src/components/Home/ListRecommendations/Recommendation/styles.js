import {StyleSheet} from 'react-native';
import colors from '../../../../themes/colors';

export const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    flexBasis: '49%',
    marginBottom: 30,
  },
  img_cover: {
    width: '100%',
    height: 300,
    marginVertical: 5,
  },
  containerPrices: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 18,
    textAlign: 'center',
  },
  category: {
    color: colors.secondaryGray,
    textAlign: 'center',
    marginVertical: 4,
  },
  old_price: {
    textDecorationLine: 'line-through',
  },
  price: {
    color: colors.secondary,
  },
});
