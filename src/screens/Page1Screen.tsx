import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'

// We add this interface to have the "typescript help" when typing 
interface Props extends DrawerScreenProps<any, any> { };

export default function Page1Screen({ navigation }: Props) {
  // destructure Props.navigation

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Menu"
          onPress={() => navigation.toggleDrawer()}

        />)
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Important information</Text>
      <Button title="Go to page2" onPress={() => {
        // you have to call the name of the component that you set on Stack Navigator
        navigation.navigate('Page2')
      }} />

      <Text>
        Navegar con argumentos
      </Text>
      <View style={{
        flexDirection: 'row'
      }}>
        <TouchableOpacity style={styles.bigButton
        } onPress={() => navigation.navigate('Profile', { id: 1, name: 'Peter' })}>
          <Text style={styles.btnText}>
            Peter's profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bigButton} onPress={() => navigation.navigate('Profile', { id: 1, name: 'Maria' })}>
          <Text style={styles.btnText}>
            Maria's profile
          </Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}
