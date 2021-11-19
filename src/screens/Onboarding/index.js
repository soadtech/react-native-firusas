import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {styles} from './styles';
import {MODEL_INTRO} from '../../assets/images';
import MyText from '../../commons/MyText';
import {ButtonRounded} from '../../commons/Buttons';

export default function Onboarding({navigation}) {
  const handleValidationAuth = () => {
    // TODO: validate if user is auth
    navigation.push('signin');
  };
  return (
    <ImageBackground source={MODEL_INTRO} resiseMode="cover" style={{flex: 1}}>
      <View style={styles.container}>
        <MyText customStyles={styles.title}>Welcome to Firusas</MyText>
        <MyText customStyles={styles.description}>
          A premiun online store for women and their stylish choice.
        </MyText>
        <View style={styles.containerBtn}>
          <ButtonRounded
            handlerAction={handleValidationAuth}
            customStyles={styles.btn}
            customStylesLabel={styles.labelBtn}
            label="Get Started"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
