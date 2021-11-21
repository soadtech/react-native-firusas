import React from 'react';
import {ScrollView, View} from 'react-native';
import Category from './Category';
import {
  CATEGORY_DRESS,
  CATEGORY_HITS,
  CATEGORY_SHIRT,
  CATEGORY_SKIRT,
} from '../../../assets/images';
import Subtitle from '../../../commons/Subtitle';

export default function ListCategories() {
  return (
    <View style={{marginTop: 30}}>
      <Subtitle text="Categories" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{paddingHorizontal: 5}}>
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
}
const categories = [
  {
    id: '1',
    name: 'New hits',
    img_cover: CATEGORY_HITS,
  },
  {
    id: '2',
    name: 'Dress',
    img_cover: CATEGORY_DRESS,
  },
  {
    id: '3',
    name: 'T Shirts',
    img_cover: CATEGORY_SHIRT,
  },
  {
    id: '4',
    name: 'Skirts',
    img_cover: CATEGORY_SKIRT,
  },
];
