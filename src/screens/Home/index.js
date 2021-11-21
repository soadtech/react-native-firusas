import React from 'react';
import {Text, View} from 'react-native';
import Wrapper from '../../components/WrapperMain';
import MyText from '../../commons/MyText';
import Header from '../../components/Home/Header';

export default function Home() {
  return (
    <Wrapper>
      <View style={{paddingHorizontal: 14}}>
        <Header />
      </View>
    </Wrapper>
  );
}
