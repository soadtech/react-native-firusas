import React, {useState} from 'react';
import {styles} from './styles';
import Wrapper from '../../components/WrapperMain';
import MyText from '../../commons/MyText';
import {View} from 'react-native';
import {SinginForm} from '../../components/Auth';
import {ButtonRounded, ButtonServices} from '../../commons/Buttons';
import colors from '../../themes/colors';

export default function Signin() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const handleChangue = (input, value) => {
    setFormValues({...formValues, [input]: value});
  };
  return (
    <Wrapper>
      <MyText customStyles={styles.title}>Sign In</MyText>

      <View style={styles.containerForm}>
        <SinginForm onChange={handleChangue} values={formValues} />
        <View style={styles.containerBtn}>
          <ButtonRounded
            handlerAction={() => {}}
            customStyles={styles.btn}
            customStylesLabel={styles.labelBtn}
            label="Sign in"
          />
        </View>
      </View>

      <View style={styles.containerForm}>
        <MyText customStyles={styles.or}>Or</MyText>

        <View style={styles.containerBntServices}>
          <ButtonServices color={colors.primary} icon="apple" service="Apple" />
          <View style={{marginVertical: 10}}>
            <ButtonServices
              color={colors.facebook}
              icon="facebook"
              service="Facebook"
            />
          </View>
          <ButtonServices color="red" icon="google" service="Google" />
        </View>
      </View>

      <MyText customStyles={styles.hasAccount}>
        Do you already have an account?{' '}
        <MyText customStyles={styles.action}>SignUp</MyText>
      </MyText>
    </Wrapper>
  );
}
