import React from 'react';
import {ImageBackground, View} from 'react-native';
import {styles} from './styles';
import {MODEL_BANNER} from '../../../assets/images';
import ButtonSquare from '../../../commons/Buttons/ButtonSquare';
import MyText from '../../../commons/MyText';

export default function Banner() {
  return (
    <View>
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={MODEL_BANNER}
        resizeMode="cover"
        style={styles.banner}>
        <MyText customStyles={styles.titleBanner}>Nice parts</MyText>
        <MyText customStyles={styles.text}>The joys of premiun fashion</MyText>
        <ButtonSquare label="Buy now" />
      </ImageBackground>
    </View>
  );
}
