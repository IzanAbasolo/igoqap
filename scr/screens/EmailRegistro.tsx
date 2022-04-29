import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';
import Theme from '../styles/Theme.style';
import InputComponent from '../components/InputComponent';

const usuarioDropdown = [
  {label: 'usuario1', value: 'usuario1'},
  {label: 'usuario2', value: 'usuario2'},
];

function EmailRegistro() {
  const [value, setValue] = useState(null);
  const [name, setName] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isFocusDropdown, setIsFocusDropdown] = useState(false);

  const [registro, setRegistro] = useState([]);

  useEffect(() => {
    isDisabled();
  });

  const registrarse = () => {
    const nuevoRegistro = [value, name, user, email, pass];
    setRegistro(nuevoRegistro);
    Alert.alert('Bienvenide', 'su cuenta ha sido creada');
  };

  const isDisabled = () => {
    if (
      value === null ||
      name === null ||
      user === null ||
      email === null ||
      pass === null ||
      toggleCheckBox === false ||
      toggleCheckBox2 === false
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <View>
      <Text style={styles.text}>Crear una cuenta</Text>
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
      <InputComponent 
        placeholder="Nombre completo" 
        value={name}
        onChange={newNombre => {
          setName(newNombre);
        }}
      />
      <InputComponent 
        placeholder="Nombre de usuario" 
        value={user} 
        onChange={newUsuario => {
          setUser(newUsuario);
        }}
      />
      <InputComponent 
        placeholder="Email" 
        value={email} 
        onChange={newEmail => {
          setEmail(newEmail);
        }}
      />
      <InputComponent 
        placeholder="Contraseña" 
        value={pass} 
        onChange={newPass => {
          setPass(newPass);
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
    backgroundColor: '#ffffff',
  },
  text: {
    fontWeight: 'bold',
    fontSize: Theme.FONT_SIZE_4,
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
    fontSize: 15,
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

export default EmailRegistro;
