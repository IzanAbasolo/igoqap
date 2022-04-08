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

function RecuperarCont({navigation}) {
  const [usuario, setUsuario] = useState(null);
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    isDisabled();
  });

  const enviar = () => {
    Alert.alert('Enviado', 'Su contraseña ha sido enviada');
  };

  const isDisabled = () => {
    if (usuario === null) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.caja1}
        onPress={() => {
          navigation.goBack();
        }}>
        <FontAwesome5
          name={'times'}
          size={30}
          color={'#000000'}
          style={styles.x}
        />
      </TouchableOpacity>
      <Text style={styles.titulo}>Recuperar contraseña</Text>
      <Text style={styles.texto}>
        Introduce tu email para recuperar la contraseña.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email / Usuario"
        value={usuario}
        onChange={newUsuario => {
          setUsuario(newUsuario);
        }}
      />
      <TouchableOpacity
        disabled={disabled}
        style={disabled === true ? styles.disabled : styles.boton}
        onPress={() => {
          enviar();
        }}>
        <Text style={disabled === true ? styles.disabled2 : styles.texto2}>
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
  caja1: {
    padding: 5,
  },
  x: {
    marginLeft: 5,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000000',
    margin: 10,
    marginTop: 20,
    width: '90%',
    textAlign: 'center',
  },
  texto: {
    fontSize: 15,
    color: '#000000',
    alignSelf: 'flex-start',
    margin: 15,
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

export default RecuperarCont;
