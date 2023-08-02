import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import ProfileScreen from '../screens/ProfileScreen';

// Definimos qué rutas tenemos y qué params recibimos
export type RootStackParams = {
  Page1: undefined,
  Page2: undefined,
  Page3: undefined,
  Profile: { id: number, name: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName='Page2' to change which is the first one
      screenOptions={{
        headerStyle: {
          elevation: 0, // for Android
          shadowColor: 'transparent' // for iOS
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Page1" options={{ title: "Página 1" }} component={Page1Screen} />
      <Stack.Screen name="Page2" options={{ title: "Página 2" }} component={Page2Screen} />
      <Stack.Screen name="Page3" options={{ title: "Página 3" }} component={Page3Screen} />
      <Stack.Screen name="Profile" options={{ title: "Mi perfil" }} component={ProfileScreen} />
    </Stack.Navigator>
  );
}