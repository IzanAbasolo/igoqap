import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Theme from '../styles/Theme.style';

function RecuperarCont({navigation}) {
  const [user, setUser] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    isDisabled();
  });

  const send = () => {
    Alert.alert('Enviado', 'Su contraseña ha sido enviada');
  };

  const isDisabled = () => {
    if (user === null) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.box1}
        onPress={() => {
          navigation.goBack();
        }}>
        <FontAwesome5
          name={'times'}
          size={30}
          color={'#000000'}
          style={styles.out}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Recuperar contraseña</Text>
      <Text style={styles.text}>
        Introduce tu email para recuperar la contraseña.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email / Usuario"
        value={user}
        onChange={newUsuario => {
          setUser(newUsuario);
        }}
      />
      <TouchableOpacity
        disabled={disabled}
        style={disabled === true ? styles.disabled : styles.button}
        onPress={() => {
          send();
        }}>
        <Text style={disabled === true ? styles.disabled2 : styles.text2}>
          Enviar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  box1: {
    padding: 5,
  },
  out: {
    marginLeft: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: Theme.FONT_SIZE_3,
    color: '#000000',
    margin: 10,
    marginTop: 20,
    width: '90%',
    textAlign: 'center',
  },
  text: {
    fontSize: Theme.FONT_SIZE_5,
    color: '#000000',
    alignSelf: 'flex-start',
    margin: 15,
  },
  input: {
    width: '95%',
    alignSelf: 'center',
    borderColor: Theme.BASE_3,
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 20,
    fontSize: Theme.FONT_SIZE_4,
  },
  disabled: {
    width: '95%',
    backgroundColor: Theme.PRIMRY_6,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  button: {
    width: '95%',
    backgroundColor: Theme.PRIMARY_4,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  disabled2: {
    fontWeight: 'bold',
    color: Theme.BASE_3,
    fontSize: Theme.FONT_SIZE_5,
  },
  text2: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: Theme.FONT_SIZE_5,
  },
});

export default RecuperarCont;
