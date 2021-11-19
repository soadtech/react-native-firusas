import React from 'react';
import {Platform, View} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import CustomStatusBar from '../../commons/CustomStatusBar';

const Wrapper = ({children, customStyles, bgStatusBar}) => {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <View style={{...backgroundStyle, ...customStyles}}>
      <CustomStatusBar backgroundColor={bgStatusBar} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        {children}
      </KeyboardAvoidingView>
    </View>
  );
};
export default Wrapper;
