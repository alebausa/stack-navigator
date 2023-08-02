import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LateralMenu } from './src/navigator/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <LateralMenu />
    </NavigationContainer>
  )
}

export default App;
