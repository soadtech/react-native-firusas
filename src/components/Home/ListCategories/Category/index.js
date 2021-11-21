import React from 'react';
import {ImageBackground} from 'react-native';
import ButtonSquare from '../../../../commons/Buttons/ButtonSquare';
import {styles} from './styles';

export default function Category({category}) {
  return (
    <ImageBackground
      imageStyle={styles.imageStyle}
      style={styles.category}
      source={category.img_cover}>
      <ButtonSquare label={category.name} />
    </ImageBackground>
  );
}
