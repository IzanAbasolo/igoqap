import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';

function EmailAcceso({navigation}) {
  const [usuario, setUsuario] = useState(null);
  const [cont, setCont] = useState(null);
  const [disabled, setDisabled] = useState();

  const [registro, setRegistro] = useState([]);

  useEffect(() => {
    isDisabled();
  });

  const acceder = () => {
    const nuevoRegistro = [usuario, cont];
    setRegistro(nuevoRegistro);
    Alert.alert('Bienvenide', 'Bienvenide de nuevo');
  };

  const isDisabled = () => {
    if (usuario === null || cont === null) {
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
        value={usuario}
        onChange={newUsuario => {
          setUsuario(newUsuario);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={cont}
        secureTextEntry={true}
        onChange={newPass => {
          setCont(newPass);
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
          acceder();
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
    fontSize: 22,
    color: '#000000',
    margin: 10,
    marginTop: 20,
    width: '90%',
  },
  input: {
    width: '95%',
    alignSelf: 'center',
    borderColor: '#767476',
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  enlace: {
    width: '40%',
    marginBottom: 30,
    marginRight: 10,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  texto3: {
    color: '#767476',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  disabled: {
    width: '95%',
    backgroundColor: '#F9D8B2',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  boton: {
    width: '95%',
    backgroundColor: '#f19d3f',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  disabled2: {
    fontWeight: 'bold',
    color: '#767476',
    fontSize: 15,
  },
  texto2: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 15,
  },
});

export default EmailAcceso;
