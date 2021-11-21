import React from 'react';
import {View} from 'react-native';
import {
  RECOMMENDATION_DRESS_1,
  RECOMMENDATION_DRESS_2,
  RECOMMENDATION_SKIRT_1,
  RECOMMENDATION_SKIRT_2,
} from '../../../assets/images';
import {styles} from './styles';
import Subtitle from '../../../commons/Subtitle';
import Recommendation from './Recommendation';

export default function ListRecommendations() {
  return (
    <View style={{marginTop: 30}}>
      <Subtitle text="Just for you" />
      <View style={styles.list}>
        {recommendations.map(recommendation => (
          <Recommendation
            key={recommendation.id}
            recommendation={recommendation}
          />
        ))}
      </View>
    </View>
  );
}
const recommendations = [
  {
    id: '1',
    name: 'Elisabetta Franchi',
    img_cover: RECOMMENDATION_SKIRT_1,
    category: 'Slim fit dress',
    old_price: 449,
    price: 359,
  },
  {
    id: '2',
    name: 'Dorothes Schumacher',
    img_cover: RECOMMENDATION_DRESS_2,
    category: 'Slim fit dress',
    old_price: 449,
    price: 359,
  },
  {
    id: '3',
    name: 'Elisabetta Franchi',
    img_cover: RECOMMENDATION_DRESS_1,
    category: 'Slim fit dress',
    old_price: 449,
    price: 359,
  },
  {
    id: '4',
    name: 'Elisabetta Franchi',
    img_cover: RECOMMENDATION_SKIRT_2,
    category: 'Slim fit dress',
    old_price: 449,
    price: 359,
  },
];
