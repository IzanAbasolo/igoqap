import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Theme from '../styles/Theme.style';

export default function Facebook({navigation}) {
  const name = 'Ibai';
  return (
    <View style={styles.body}>
      <View style={styles.box1}>
        <FontAwesome5
          name={'facebook'}
          size={30}
          color={'#ffffff'}
          style={styles.f}
        />
      </View>
      <View style={styles.box2}>
        <Text style={styles.text1}>Igoqap</Text>
        <View style={styles.box3}>
          <Text style={styles.text2}>Igoqap recibirá:</Text>
          <Text style={styles.text2}>
            tu perfil público, lista de amigos, clics en "Me gusta" y dirección
            de correo electrónico
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.text3}>Continuar como {name}</Text>
        </TouchableOpacity>
        <View style={styles.box4}>
          <FontAwesome5 name={'lock'} size={10} color={Theme.BASE_1} />
          <Text style={styles.text4}>
            No permitire que la aplicación publique en Facebook
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.text5}>Cancelar</Text>
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
  box1: {
    backgroundColor: '#1559a3',
    padding: 5,
  },
  f: {
    marginLeft: 20,
  },
  box2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 15,
  },
  box3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 70,
  },
  text2: {
    color: Theme.BASE_2,
    fontSize: Theme.FONT_SIZE_4,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Theme.PRIMARY_4,
    width: '95%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 70,
  },
  text3: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: Theme.FONT_SIZE_5,
  },
  box4: {
    flexDirection: 'row',
    marginBottom: 40,
    alignItems: 'center',
  },
  text4: {
    color: Theme.BASE_2,
    fontSize: Theme.FONT_SIZE_6,
    marginLeft: 5,
  },
  text5: {
    color: '#000000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: Theme.FONT_SIZE_5,
  },
});
