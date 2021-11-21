import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MyText from '../../../commons/MyText';
import {styles} from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Icon name="search" size={25} />
      <MyText customStyles={styles.title}>Firusas</MyText>
      <View style={styles.containerCart}>
        <View style={styles.cart}>
          <Icon name="shopping-bag" size={25} />
        </View>
        <Icon name="menu" size={25} />
      </View>
    </View>
  );
}
