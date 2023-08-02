import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native'

export default function Page2Screen() {
  const navigator = useNavigation()

  useEffect(() => {
    navigator.setOptions({
      title: 'Title of page 2',
      headerBackTitle: '' // if left empty, gets the back word of the language of the phone
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2 content</Text>
      <Button
        title="Go to page 3"
        onPress={() => navigator.navigate("Page3")}
      />
    </View>
  )
}