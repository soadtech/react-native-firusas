import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import MyText from '../../MyText';

export default function ButtonServices({
  handlerAction,
  loading,
  service,
  icon,
  color,
}) {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={handlerAction}
      style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon name={icon} color={color} size={20} />
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <MyText customStyles={styles.text}>Continue with {service}</MyText>
      )}
    </TouchableOpacity>
  );
}
