import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

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
        <Text style={styles.texto1}>Continuar con Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.apple} onPress={() => {}}>
        <Text style={styles.texto1}>Continuar con Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.email}
        onPress={() => {
          email();
        }}>
        <Text style={styles.texto2}>Continuar con Email</Text>
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
  texto1: {
    color: '#ffffff',
    textAlign: 'center',
  },
  texto2: {
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
    backgroundColor: '#f19d3f',
    padding: 10,
  },
});
