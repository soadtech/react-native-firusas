import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import MyText from '../../MyText';

export default function ButtonServices({service, icon, color}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon name={icon} color={color} size={20} />
      </View>
      <MyText customStyles={styles.text}>Continue with {service}</MyText>
    </TouchableOpacity>
  );
}
