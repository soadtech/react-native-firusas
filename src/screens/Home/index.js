import React from 'react';
import {ScrollView, View} from 'react-native';
import Wrapper from '../../components/WrapperMain';
import Header from '../../components/Home/Header';
import {styles} from './styles';
import Banner from '../../components/Home/Banner';
import ListCategories from '../../components/Home/ListCategories';
import ListRecommendations from '../../components/Home/ListRecommendations';

export default function Home() {
  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header />
        <Banner />
        <ListCategories />
        <ListRecommendations />
      </ScrollView>
    </Wrapper>
  );
}
