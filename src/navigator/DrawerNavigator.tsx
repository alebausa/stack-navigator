import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Settings } from '../screens/Settings';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {

  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
      <Drawer.Screen name="Settings" options={{ title: 'Settings' }} component={Settings} />
    </Drawer.Navigator>
  );
}