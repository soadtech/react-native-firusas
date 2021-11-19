import React, {useState} from 'react';
import {styles} from './styles';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Form() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput placeholder="Your email" />
      </View>
      <View
        style={{
          ...styles.containerInput,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput
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
