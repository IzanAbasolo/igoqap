import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Info');
    }, 2000);
  });

  return (
    <View style={styles.body}>
      <Image
        style={styles.foto}
        source={require('../../assets/onboarding.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f19d3f',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: '100%',
    height: '100%',
  },
});
