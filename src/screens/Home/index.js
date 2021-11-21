import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Wrapper from '../../components/WrapperMain';
import MyText from '../../commons/MyText';
import Header from '../../components/Home/Header';
import {MODEL_BANNER} from '../../assets/images';
import {styles} from './styles';
import ButtonSquare from "../../commons/Buttons/ButtonSquare";

export default function Home() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Header />
        <View>
          <ImageBackground
            imageStyle={styles.imageStyle}
            source={MODEL_BANNER}
            resizeMode="cover"
            style={styles.banner}>
            <MyText customStyles={styles.titleBanner}>Nice parts</MyText>
            <MyText customStyles={styles.text}>
              The joys of premiun fashion
            </MyText>
            <ButtonSquare label="Buy now" />
          </ImageBackground>
        </View>
      </View>
    </Wrapper>
  );
}
