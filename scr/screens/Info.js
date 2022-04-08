import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

export default function Info({navigation}) {
  const [texto, setTexto] = useState('');
  const [texto2, setTexto2] = useState('');
  const [num, setNum] = useState(1);
  const [foto, setFoto] = useState('');
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');

  useEffect(() => {
    cambiarTexto();
  });

  const cambiarTexto = () => {
    switch (num) {
      case 1:
        setTexto('Invierte en quien admiras');
        setTexto2('Podrás invertir de una forma novedosa en gente que conoces');
        setFoto(require('../../assets/onboarding2.png'));
        setColor1('#f19d3f');
        setColor2('#adacad');
        setColor3('#adacad');
        break;
      case 2:
        setTexto('Nuevo índice de popularidad');
        setTexto2(
          'Ser popular tendrá un sentido ahora totalmente diferente, crecerás junto a tus seguidores',
        );
        setFoto(require('../../assets/onboarding3.png'));
        setColor1('#adacad');
        setColor2('#f19d3f');
        setColor3('#adacad');
        break;
      default:
        navigation.replace('Registro');
    }
  };

  const saltar = () => {
    navigation.replace('Registro');
  };

  const siguiente = () => {
    setNum(num + 1);
  };

  return (
    <View style={styles.body}>
      <Image style={styles.foto} source={foto} />
      <Text style={styles.texto}>{texto}</Text>
      <Text style={styles.texto2}>{texto2}</Text>
      <View style={styles.row}>
        <Octicons
          name={'dot-fill'}
          size={20}
          color={color1}
          style={styles.dot}
        />
        <Octicons
          name={'dot-fill'}
          size={20}
          color={color2}
          style={styles.dot}
        />
        <Octicons
          name={'dot-fill'}
          size={20}
          color={color3}
          style={styles.dot}
        />
      </View>
      <View style={styles.body2}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            saltar();
          }}>
          <Text style={styles.texto3}>Saltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            siguiente();
          }}>
          <Text style={styles.texto3}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  foto: {
    height: '45%',
    width: '100%',
    marginBottom: 30,
    backgroundColor: '#000000',
  },
  texto: {
    color: '#000000',
    width: '65%',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'OpenSans',
  },
  texto2: {
    color: '#000000',
    width: '80%',
    height: '15%',
    fontSize: 18,
    textAlign: 'center',
  },
  body2: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  dot: {
    margin: 8,
  },
  button1: {
    width: '40%',
    backgroundColor: '#d1d1d1',
    margin: 15,
    alignItems: 'center',
  },
  button2: {
    width: '40%',
    backgroundColor: '#f19d3f',
    margin: 15,
    alignItems: 'center',
  },
  texto3: {
    color: '#000000',
    fontWeight: 'bold',
    padding: 10,
  },
});
