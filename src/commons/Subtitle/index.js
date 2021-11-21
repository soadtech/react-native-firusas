import React from 'react';
import MyText from '../MyText';
import {styles} from './styles';

export default function Subtitle({text}) {
  return <MyText customStyles={styles.text}>{text}</MyText>;
}
