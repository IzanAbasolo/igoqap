import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Theme from '../styles/Theme.style';

const InputComponet = ({onChange, value, placeholder}) => {
    const [isFocusInput, setIsFocusInput] = useState(false);

    return(
        <View>
            <TextInput
                style={!isFocusInput ? styles.input : styles.inputFocus}
                placeholder={placeholder}
                value={value}
                onFocus={() => setIsFocusInput(true)}
                onBlur={() => setIsFocusInput(false)}
                onChange={onChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default InputComponet;