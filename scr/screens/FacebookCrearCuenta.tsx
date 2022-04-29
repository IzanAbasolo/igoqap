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
import Theme from '../styles/Theme.style';

const usuarioDropdown = [
  {label: 'usuario1', value: 'usuario1'},
  {label: 'usuario2', value: 'usuario2'},
];

export default function FacebookCrearCuenta() {
  const [value, setValue] = useState(null);
  const [name, setName] = useState(null);
  const [user, setUser] = useState(null);
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
    const nuevoRegistro = [value, name, user, email];
    setRegistro(nuevoRegistro);
    Alert.alert('Bienvenide', 'su cuenta ha sido creada');
  };

  const isDisabled = () => {
    if (
      value === null ||
      name === null ||
      user === null ||
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
        value={name}
        onFocus={() => setIsFocusInput(true)}
        onBlur={() => setIsFocusInput(false)}
        onChange={newNombre => {
          setName(newNombre);
          setIsFocusInput(false);
        }}
      />
      <TextInput
        style={!isFocusInput2 ? styles.input : styles.inputFocus}
        placeholder="Usuario"
        value={user}
        onFocus={() => setIsFocusInput2(true)}
        onBlur={() => setIsFocusInput2(false)}
        onChange={newUsuario => {
          setUser(newUsuario);
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
        style={disabled === true ? styles.disabled : styles.button}
        onPress={() => {
          registrarse();
        }}>
        <Text style={disabled === true ? styles.disabled2 : styles.text2}>
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
          <Text style={styles.text3}>He leido y acepto el aviso legal</Text>
        </View>
        <View style={styles.row}>
          <CheckBox
            value={toggleCheckBox2}
            onValueChange={newValue => setToggleCheckBox2(newValue)}
            tintColors={{true: 'black'}}
          />
          <Text style={styles.text3}>
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
  text: {
    fontWeight: 'bold',
    fontSize: Theme.FONT_SIZE_3,
    color: '#000000',
    margin: 10,
    marginTop: 20,
    width: '90%',
  },
  dropdown: {
    width: '95%',
    alignSelf: 'center',
    borderColor: Theme.BASE_3,
    borderRadius: 5,
    borderWidth: 0.8,
    padding: 5,
    marginBottom: 20,
  },
  dropdownFocus: {
    width: '95%',
    alignSelf: 'center',
    borderColor: Theme.PRIMARY_4,
    borderRadius: 5,
    borderWidth: 0.8,
    padding: 5,
    marginBottom: 20,
  },
  input: {
    width: '95%',
    alignSelf: 'center',
    borderColor: Theme.BASE_3,
    borderRadius: 5,
    borderWidth: 0.8,
    padding: 10,
    marginBottom: 20,
    fontSize: Theme.FONT_SIZE_4,
  },
  inputFocus: {
    width: '95%',
    alignSelf: 'center',
    borderColor: Theme.PRIMARY_4,
    borderRadius: 5,
    borderWidth: 0.8,
    padding: 10,
    marginBottom: 20,
    fontSize: Theme.FONT_SIZE_4,
  },
  button: {
    width: '95%',
    backgroundColor: Theme.PRIMARY_4,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  disabled: {
    width: '95%',
    backgroundColor: Theme.PRIMARY_6,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  text2: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: Theme.FONT_SIZE_5,
  },
  disabled2: {
    fontWeight: 'bold',
    color: Theme.BASE_3,
    fontSize: Theme.FONT_SIZE_5,
  },
  body2: {
    width: '90%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text3: {
    color: '#000000',
  },
});
