import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Theme from '../styles/Theme.style';

export default function Info({navigation}) {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [num, setNum] = useState(1);
  const [photo, setPhoto] = useState('');
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');

  useEffect(() => {
    changeText();
  });

  const changeText = () => {
    switch (num) {
      case 1:
        setText('Invierte en quien admiras');
        setText2('Podrás invertir de una forma novedosa en gente que conoces');
        setPhoto(require('../../assets/onboarding2.png'));
        setColor1(Theme.PRIMARY_4);
        setColor2(Theme.BASE_4);
        setColor3(Theme.BASE_4);
        break;
      case 2:
        setText('Nuevo índice de popularidad');
        setText2(
          'Ser popular tendrá un sentido ahora totalmente diferente, crecerás junto a tus seguidores',
        );
        setPhoto(require('../../assets/onboarding3.png'));
        setColor1(Theme.BASE_4);
        setColor2(Theme.PRIMARY_4);
        setColor3(Theme.BASE_4);
        break;
      default:
        navigation.replace('Registro');
    }
  };

  const skip = () => {
    navigation.replace('Registro');
  };

  const next = () => {
    setNum(num + 1);
  };

  return (
    <View style={styles.body}>
      <Image style={styles.photo} source={photo} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text2}>{text2}</Text>
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
            skip();
          }}>
          <Text style={styles.text3}>Saltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            next();
          }}>
          <Text style={styles.text3}>Siguiente</Text>
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
  photo: {
    height: '45%',
    width: '100%',
    marginBottom: 30,
    backgroundColor: '#000000',
  },
  text: {
    color: '#000000',
    width: '65%',
    fontSize: Theme.FONT_SIZE_2,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'OpenSans',
  },
  text2: {
    color: '#000000',
    width: '80%',
    height: '15%',
    fontSize: Theme.FONT_SIZE_4,
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
    backgroundColor: Theme.BASE_5,
    margin: 15,
    alignItems: 'center',
  },
  button2: {
    width: '40%',
    backgroundColor: Theme.PRIMARY_4,
    margin: 15,
    alignItems: 'center',
  },
  text3: {
    color: '#000000',
    fontWeight: 'bold',
    padding: 10,
  },
});
