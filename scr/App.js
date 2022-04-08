import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Splash from './screens/Splash';
import Info from './screens/Info';
import Registro from './screens/Registro';
import Facebook from './screens/Facebook';
import FacebookCrearCuenta from './screens/FacebookCrearCuenta';
import EmailRegistro from './screens/EmailRegistro';
import EmailAcceso from './screens/EmailAcceso';
import RecuperarCont from './screens/RecuperarCont';

const Tab = createMaterialTopTabNavigator();

function RegistroTab() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#767476',
        tabBarIndicatorStyle: {
          backgroundColor: '#F19D3F',
          height: 5,
          borderRadius: 5,
          marginLeft: 76,
          width: 55,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })}>
      <Tab.Screen name="Registro" component={EmailRegistro} />
      <Tab.Screen name="Acceso" component={EmailAcceso} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            elevation: 0,
          },
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Facebook"
          component={Facebook}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Crear cuenta" component={FacebookCrearCuenta} />
        <Stack.Screen name="Continuar con email" component={RegistroTab} />
        <Stack.Screen
          name="Recuperar contraseña"
          component={RecuperarCont}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
