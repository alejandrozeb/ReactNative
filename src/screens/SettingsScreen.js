import { SafeAreaView, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {
    const { navigation } = props;
    const goToHome = () => {
        navigation.navigate("Home");
      };
  return (
    <SafeAreaView>
      <Text> Hola SettingsScreen</Text>
      <Text> Hola SettingsScreen</Text>
      <Text> Hola SettingsScreen</Text>
      <Text> Hola SettingsScreen</Text>
      <Text> Hola SettingsScreen</Text>
      <Text> Hola SettingsScreen</Text>
      <Text> Hola SettingsScreen</Text>
      <Button onPress={goToHome} title="Ir a Home" />
    </SafeAreaView>
  )
}