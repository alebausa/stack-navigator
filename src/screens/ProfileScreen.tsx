import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
// FORMA 3: importar tipo
import { RootStackParams } from '../navigator/StackNavigator'

// Maneras de tipar los params que vienen
// FORMA 1. "GUARRA"
// interface Props extends StackScreenProps<any, any> { };

// export default function ProfileScreen({ route }: Props) {
//   const params = route.params;
//   return (
//     <View style={styles.globalMargin}>
//       <Text style={styles.title}>{params!.name}'s profile screen</Text>
//     </View>
//   )
// }

// FORMA 2. "SENCILLA"
// interface RouteParams {
//   id: number,
//   name: string
// }

// export default function ProfileScreen({ route }) {
//   const params = route.params as RouteParams;
//   return (
//     <View style={styles.globalMargin}>
//       <Text style={styles.title}>{params!.name}'s profile screen</Text>
//     </View>
//   )
// }

// FORMA 3. LA BUENA: DEFINIMOS DE ENTRADA RUTAS Y PARAMS POR RUTA EN STACK NAVIGATOR
interface Props extends StackScreenProps<RootStackParams, 'Profile'> { };

export default function ProfileScreen({ route, navigation }: Props) {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{params!.name}'s profile screen</Text>
    </View>
  )
}