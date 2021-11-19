import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

export default function MyText({children, customStyles}) {
  return <Text style={{...styles.text, ...customStyles}}>{children}</Text>;
}
