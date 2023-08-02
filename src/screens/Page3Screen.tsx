import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

export default function Page3Screen({ navigation }: Props) {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>More useful information</Text>
      <Button
        title="Go back"
        // Va a la anterior
        onPress={() => navigation.pop()}
      />
      <Button
        title="Go to page 1"
        // Va a la primera del stack
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}