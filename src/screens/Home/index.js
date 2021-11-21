import React from 'react';
import {View} from 'react-native';
import Wrapper from '../../components/WrapperMain';
import Header from '../../components/Home/Header';
import {styles} from './styles';
import Banner from '../../components/Home/Banner';
import ListCategories from '../../components/Home/ListCategories';

export default function Home() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Header />
        <Banner />
        <ListCategories />
      </View>
    </Wrapper>
  );
}
