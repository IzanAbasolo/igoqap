import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Facebook({navigation}) {
  const nombre = 'Ibai';
  return (
    <View style={styles.body}>
      <View style={styles.caja1}>
        <FontAwesome5
          name={'facebook'}
          size={30}
          color={'#ffffff'}
          style={styles.f}
        />
      </View>
      <View style={styles.caja2}>
        <Text style={styles.texto1}>Igoqap</Text>
        <View style={styles.caja3}>
          <Text style={styles.texto2}>Igoqap recibirá:</Text>
          <Text style={styles.texto2}>
            tu perfil público, lista de amigos, clics en "Me gusta" y dirección
            de correo electrónico
          </Text>
        </View>
        <TouchableOpacity style={styles.boton} onPress={() => {}}>
          <Text style={styles.texto3}>Continuar como {nombre}</Text>
        </TouchableOpacity>
        <View style={styles.caja4}>
          <FontAwesome5 name={'lock'} size={10} color={'#212121'} />
          <Text style={styles.texto4}>
            No permitire que la aplicación publique en Facebook
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.texto5}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  caja1: {
    backgroundColor: '#1559a3',
    padding: 5,
  },
  f: {
    marginLeft: 20,
  },
  caja2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto1: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 15,
  },
  caja3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 70,
  },
  texto2: {
    color: '#484549',
    fontSize: 18,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#f19d3f',
    width: '95%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 70,
  },
  texto3: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 15,
  },
  caja4: {
    flexDirection: 'row',
    marginBottom: 40,
    alignItems: 'center',
  },
  texto4: {
    color: '#484549',
    fontSize: 12,
    marginLeft: 5,
  },
  texto5: {
    color: '#000000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
});
