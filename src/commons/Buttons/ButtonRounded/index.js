import React from 'react';
import {TouchableOpacity} from 'react-native';
import {_styles} from './styles';
import MyText from '../../MyText';

export default function ButtonRounded({
  label,
  handlerAction,
  customStyles,
  customStylesLabel,
}) {
  const styles = _styles(false);
  return (
    <TouchableOpacity
      onPress={handlerAction}
      style={[styles.container, customStyles]}>
      <MyText customStyles={{...styles.text, ...customStylesLabel}}>
        {label}
      </MyText>
    </TouchableOpacity>
  );
}
