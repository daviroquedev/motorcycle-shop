import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/mainScreen';
import Home from './pages/loginScreen';
import Register from './pages/registerScreen';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'MOTOS ESPORTIVAS',
            headerStyle: {
              backgroundColor: '#000B0D',
            },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'CATALOGO DE MOTOS',
            headerStyle: {
              backgroundColor: '#000B0D',
            },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'CADASTRO',
            headerStyle: {
              backgroundColor: '#000B0D',
            },
            headerTintColor: '#FFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
