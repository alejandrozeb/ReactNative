import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Saludar from "./src/components/Saludar";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>React Native</Text>
        <Saludar firstname="Carlos" lastname="Navarro" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
