import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'

// We add this interface to have the "typescript help" when typing 
interface Props extends StackScreenProps<any, any> { };

export default function Page1Screen({ navigation }: Props) {
  // destructure Props.navigation
  return (
    <View style={styles.globalMargin}>
      <Text>Page1Screen</Text>
      <Button title="Go to page2" onPress={() => {
        // you have to call the name of the component that you set on Stack Navigator
        navigation.navigate('Page2')
      }} />
    </View>
  )
}
