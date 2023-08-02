import { DrawerContentComponentProps, createDrawerNavigator, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Settings } from '../screens/Settings';
import { useWindowDimensions } from 'react-native';
import { Text, View, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const InternMenu = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar container */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: "https://www.shutterstock.com/image-vector/default-placeholder-avatar-profile-on-260nw-490458535.jpg" }}
          style={styles.avatar} />
      </View>
      {/* Menu options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuBtn} >
          <Text style={styles.menuText} onPress={() => navigation.navigate('StackNavigator')} >Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuText} onPress={() => navigation.navigate('Settings')} > Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView >
  )
}

export const AdvancedLateralMenu = () => {

  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <InternMenu {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}