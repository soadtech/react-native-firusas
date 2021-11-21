import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Wrapper from '../../components/WrapperMain';
import MyText from '../../commons/MyText';
import Header from '../../components/Home/Header';
import {MODEL_BANNER} from '../../assets/images';
import {styles} from './styles';
import ButtonSquare from '../../commons/Buttons/ButtonSquare';
import Banner from '../../components/Home/Banner';

export default function Home() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Header />
        <Banner />
      </View>
    </Wrapper>
  );
}
