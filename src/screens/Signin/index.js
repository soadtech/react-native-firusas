import React, {useState} from 'react';
import {styles} from './styles';
import Wrapper from '../../components/WrapperMain';
import MyText from '../../commons/MyText';
import {Alert, View, Platform} from 'react-native';
import {SinginForm} from '../../components/Auth';
import {ButtonRounded, ButtonServices} from '../../commons/Buttons';
import colors from '../../themes/colors';

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const [loadingService, setLoadingService] = useState({
    apple: false,
    facebook: false,
    google: false,
  });
  const [formValues, setFormValues] = useState({
    userName: '',
    password: '',
  });
  const handleChangue = (input, value) => {
    setFormValues({...formValues, [input]: value});
  };
  const handleValidate = () =>
    formValues.userName === '' || formValues.password === '';

  const handleSubmit = () => {
    setLoading(true);
    if (handleValidate()) {
      setLoading(false);
      Alert.alert('There was an error logging in', 'All fields are required');
      return;
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const handleSubmitWithServices = service => {
    setLoadingService({...loadingService, [service]: true});
    setTimeout(() => {
      setLoadingService({...loadingService, [service]: false});
    }, 2000);
  };
  return (
    <Wrapper>
      <MyText customStyles={styles.title}>Sign In</MyText>

      <View style={styles.containerForm}>
        <SinginForm onChange={handleChangue} values={formValues} />
        <View style={styles.containerBtn}>
          <ButtonRounded
            loading={loading}
            handlerAction={handleSubmit}
            customStyles={styles.btn}
            customStylesLabel={styles.labelBtn}
            label="Sign in"
          />
        </View>
      </View>

      <View style={styles.containerForm}>
        <MyText customStyles={styles.or}>Or</MyText>

        <View style={styles.containerBntServices}>
          {Platform.OS === 'ios' && (
            <ButtonServices
              loading={loadingService.apple}
              handlerAction={() => handleSubmitWithServices('apple')}
              color={colors.primary}
              icon="apple"
              service="Apple"
            />
          )}
          <View style={{marginVertical: 10}}>
            <ButtonServices
              loading={loadingService.facebook}
              handlerAction={() => handleSubmitWithServices('facebook')}
              color={colors.facebook}
              icon="facebook"
              service="Facebook"
            />
          </View>
          <ButtonServices
            loading={loadingService.google}
            handlerAction={() => handleSubmitWithServices('google')}
            color="red"
            icon="google"
            service="Google"
          />
        </View>
      </View>

      <MyText customStyles={styles.hasAccount}>
        Do you already have an account?{' '}
        <MyText customStyles={styles.action}>SignUp</MyText>
      </MyText>
    </Wrapper>
  );
}
