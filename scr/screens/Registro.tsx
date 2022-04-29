import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Theme from '../styles/Theme.style';

export default function Registro({navigation}) {
  const facebook = () => {
    navigation.navigate('Facebook');
  };
  const email = () => {
    navigation.navigate('Continuar con email');
  };
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.facebook}
        onPress={() => {
          facebook();
        }}>
        <Text style={styles.text1}>Continuar con Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.apple} onPress={() => {}}>
        <Text style={styles.text1}>Continuar con Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.email}
        onPress={() => {
          email();
        }}>
        <Text style={styles.text2}>Continuar con Email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#ffffff',
    textAlign: 'center',
  },
  text2: {
    color: '#000000',
    textAlign: 'center',
  },
  facebook: {
    width: '90%',
    backgroundColor: '#1559a3',
    marginBottom: 15,
    padding: 10,
  },
  apple: {
    width: '90%',
    backgroundColor: '#000000',
    marginBottom: 15,
    padding: 10,
  },
  email: {
    width: '90%',
    backgroundColor: Theme.PRIMARY_4,
    padding: 10,
  },
});
