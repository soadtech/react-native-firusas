import React, {useState} from 'react';
import {styles} from './styles';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Form({values, onChange}) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          value={values.userName}
          onChangeText={text => onChange('userName', text)}
          placeholder="Usermame"
        />
      </View>
      <View
        style={{
          ...styles.containerInput,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput
          style={{width: '90%'}}
          value={values.password}
          onChangeText={text => onChange('password', text)}
          secureTextEntry={secureTextEntry}
          placeholder="***********"
        />
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Icon name={secureTextEntry ? 'eye' : 'eye-off'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
