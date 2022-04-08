import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';

const usuarioDropdown = [
  {label: 'usuario1', value: 'usuario1'},
  {label: 'usuario2', value: 'usuario2'},
];

export default function FacebookCrearCuenta() {
  const [value, setValue] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [email, setEmail] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [disabled, setDisabled] = useState();
  const [isFocusDropdown, setIsFocusDropdown] = useState(false);
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [isFocusInput2, setIsFocusInput2] = useState(false);
  const [isFocusInput3, setIsFocusInput3] = useState(false);

  const [registro, setRegistro] = useState([]);

  useEffect(() => {
    isDisabled();
  });

  const registrarse = () => {
    const nuevoRegistro = [value, nombre, usuario, email];
    setRegistro(nuevoRegistro);
    Alert.alert('Bienvenide', 'su cuenta ha sido creada');
  };

  const isDisabled = () => {
    if (
      value === null ||
      nombre === null ||
      usuario === null ||
      email === null ||
      toggleCheckBox === false ||
      toggleCheckBox2 === false
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  return (
    <View style={styles.body}>
      <Dropdown
        style={!isFocusDropdown ? styles.dropdown : styles.dropdownFocus}
        placeholder={!isFocusDropdown ? 'Tipo de usuario' : '...'}
        data={usuarioDropdown}
        labelField="label"
        valueField="value"
        value={value}
        maxHeight={120}
        onFocus={() => setIsFocusDropdown(true)}
        onBlur={() => setIsFocusDropdown(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocusDropdown(false);
        }}
      />
      <TextInput
        style={!isFocusInput ? styles.input : styles.inputFocus}
        placeholder="Nombre completo"
        value={nombre}
        onFocus={() => setIsFocusInput(true)}
        onBlur={() => setIsFocusInput(false)}
        onChange={newNombre => {
          setNombre(newNombre);
          setIsFocusInput(false);
        }}
      />
      <TextInput
        style={!isFocusInput2 ? styles.input : styles.inputFocus}
        placeholder="Usuario"
        value={usuario}
        onFocus={() => setIsFocusInput2(true)}
        onBlur={() => setIsFocusInput2(false)}
        onChange={newUsuario => {
          setUsuario(newUsuario);
          setIsFocusInput2(false);
        }}
      />
      <TextInput
        style={!isFocusInput3 ? styles.input : styles.inputFocus}
        placeholder="Email"
        value={email}
        onFocus={() => setIsFocusInput3(true)}
        onBlur={() => setIsFocusInput3(false)}
        onChange={newEmail => {
          setEmail(newEmail);
          setIsFocusInput3(false);
        }}
      />
      <TouchableOpacity
        disabled={disabled}
        style={disabled === true ? styles.disabled : styles.boton}
        onPress={() => {
          registrarse();
        }}>
        <Text style={disabled === true ? styles.disabled2 : styles.texto2}>
          Registrarse
        </Text>
      </TouchableOpacity>
      <View style={styles.body2}>
        <View style={styles.row}>
          <CheckBox
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: 'black'}}
          />
          <Text style={styles.texto3}>He leido y acepto el aviso legal</Text>
        </View>
        <View style={styles.row}>
          <CheckBox
            value={toggleCheckBox2}
            onValueChange={newValue => setToggleCheckBox2(newValue)}
            tintColors={{true: 'black'}}
          />
          <Text style={styles.texto3}>
            He leido y acepto la politica de privacidad
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000000',
    margin: 10,
    marginTop: 20,
    width: '90%',
  },
  dropdown: {
    width: '95%',
    alignSelf: 'center',
    borderColor: '#767476',
    borderRadius: 5,
    borderWidth: 0.8,
    padding: 5,
    marginBottom: 20,
  },
  dropdownFocus: {
    width: '95%',
    alignSelf: 'center',
    borderColor: '#f19d3f',
    borderRadius: 5,
    borderWidth: 0.8,
    padding: 5,
    marginBottom: 20,
  },
  input: {
    width: '95%',
    alignSelf: 'center',
    borderColor: '#767476',
    borderRadius: 5,
    borderWidth: 0.8,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  inputFocus: {
    width: '95%',
    alignSelf: 'center',
    borderColor: '#f19d3f',
    borderRadius: 5,
    borderWidth: 0.8,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  boton: {
    width: '95%',
    backgroundColor: '#f19d3f',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  disabled: {
    width: '95%',
    backgroundColor: '#F9D8B2',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  texto2: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 15,
  },
  disabled2: {
    fontWeight: 'bold',
    color: '#767476',
    fontSize: 15,
  },
  body2: {
    width: '90%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texto3: {
    color: '#000000',
  },
});
