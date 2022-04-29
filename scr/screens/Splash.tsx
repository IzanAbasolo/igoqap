import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Theme from '../styles/Theme.style';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Info');
    }, 2000);
  });

  return (
    <View style={styles.body}>
      <Image
        style={styles.photo}
        source={require('../../assets/onboarding.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Theme.PRIMARY_4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
});
