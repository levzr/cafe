import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Bienvenido a Café del Valle
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 500,
    height: 500,
    resizeMode: "contain",
  },
  text: {
    marginTop: 20,
    color: Colors.white,
    fontSize: 18,
  },
});