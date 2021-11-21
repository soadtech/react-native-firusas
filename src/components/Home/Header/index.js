import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MyText from '../../../commons/MyText';
import {styles} from './styles';
import colors from '../../../themes/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <Icon name="search" size={25} color={colors.primary} />
      <MyText customStyles={styles.title}>Firusas</MyText>
      <View style={styles.containerCart}>
        <View style={styles.cart}>
          <Icon name="shopping-bag" size={25} color={colors.primary} />
        </View>
        <Icon name="menu" size={25} color={colors.primary} />
      </View>
    </View>
  );
}
