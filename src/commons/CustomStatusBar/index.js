import React from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './styles';
import colors from '../../themes/colors';

export default function CustomStatusBar({
  backgroundColor = colors.grayLigth,
  ...props
}) {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
    </View>
  );
}
