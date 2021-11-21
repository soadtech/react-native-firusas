import React from 'react';
import {TouchableOpacity} from 'react-native';
import MyText from '../../MyText';
import {styles} from './styles';

export default function ButtonSquare({label, handler}) {
  return (
    <TouchableOpacity style={styles.container} onPress={handler}>
      <MyText>{label}</MyText>
    </TouchableOpacity>
  );
}
