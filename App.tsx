import 'react-native-gesture-handler';
import React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { LateralMenu } from './src/navigator/DrawerNavigator';
import { AdvancedLateralMenu } from './src/navigator/AdvancedLateralMenu';

export const App = () => {
  return (
    <NavigationContainer>
      <AdvancedLateralMenu />
    </NavigationContainer>
  )
}

export default App;
