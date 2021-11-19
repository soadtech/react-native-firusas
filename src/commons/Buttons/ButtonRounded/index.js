import React, {useState} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {_styles} from './styles';
import MyText from '../../MyText';

export default function ButtonRounded({
  label,
  handlerAction,
  customStyles,
  customStylesLabel,
  loading,
}) {
  const styles = _styles(false);
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={handlerAction}
      style={[styles.container, customStyles]}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <MyText customStyles={{...styles.text, ...customStylesLabel}}>
          {label}
        </MyText>
      )}
    </TouchableOpacity>
  );
}
