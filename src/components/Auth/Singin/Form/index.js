import React from 'react';
import {styles} from './styles';
import {View, TextInput} from 'react-native';
import MyText from '../../../../commons/MyText';
import {ButtonRounded} from '../../../../commons/Buttons';

export default function Form() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput placeholder="Your email" />
      </View>
      <View style={styles.containerInput}>
        <TextInput placeholder="***********" />
      </View>
    </View>
  );
}
