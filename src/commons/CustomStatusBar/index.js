import React from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './styles';

export default function CustomStatusBar({backgroundColor, ...props}) {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
