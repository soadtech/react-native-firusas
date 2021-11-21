import React from 'react';
import {styles} from './styles';
import {Image, View} from 'react-native';
import MyText from '../../../../commons/MyText';

export default function Recommendation({recommendation}) {
  return (
    <View style={styles.item}>
      <Image
        style={styles.img_cover}
        source={recommendation.img_cover}
        resizeMode="cover"
      />
      <MyText customStyles={styles.name}>{recommendation.name}</MyText>
      <MyText customStyles={styles.category}>{recommendation.category}</MyText>
      <View style={styles.containerPrices}>
        <MyText customStyles={styles.old_price}>
          ${recommendation.old_price}
        </MyText>
        <MyText customStyles={styles.price}>${recommendation.price}</MyText>
      </View>
    </View>
  );
}
