import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import Theme from '../styles/Theme.style';

function EmailAcceso({navigation}) {
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [registro, setRegistro] = useState([]);

  useEffect(() => {
    isDisabled();
  });

  const access = () => {
    const nuevoRegistro = [user, pass];
    setRegistro(nuevoRegistro);
    Alert.alert('Bienvenide', 'Bienvenide de nuevo');
  };

  const isDisabled = () => {
    if (user === null || pass === null) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <View>
      <Text style={styles.texto}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email / Usuario"
        value={user}
        onChange={newUsuario => {
          setUser(newUsuario);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={pass}
        secureTextEntry={true}
        onChange={newPass => {
          setPass(newPass);
        }}
      />
      <TouchableOpacity
        style={styles.enlace}
        onPress={() => {
          navigation.navigate('Recuperar contraseña');
        }}>
        <Text style={styles.texto3}>Recuperar contraseña</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        style={disabled === true ? styles.disabled : styles.boton}
        onPress={() => {
          access();
        }}>
        <Text style={disabled === true ? styles.disabled2 : styles.texto2}>
          Acceder
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
  texto: {
    fontWeight: 'bold',
    fontSize: Theme.FONT_SIZE_3,
    color: '#000000',
    margin: 10,
    marginTop: 20,
    width: '90%',
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
  enlace: {
    width: '40%',
    marginBottom: 30,
    marginRight: 10,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  texto3: {
    color: Theme.BASE_3,
    textDecorationLine: 'underline',
    fontSize: Theme.FONT_SIZE_5,
  },
  disabled: {
    width: '95%',
    backgroundColor: Theme.PRIMARY_6,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  boton: {
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
  texto2: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: Theme.FONT_SIZE_5,
  },
});

export default EmailAcceso;
