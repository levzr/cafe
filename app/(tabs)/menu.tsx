import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export default function Menu() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Menú – Café del Valle</Text>

      {/* Bebidas Calientes */}
      <Text style={styles.section}>☕ Bebidas Calientes</Text>
      <Text style={styles.item}>Café Americano – L 45</Text>
      <Text style={styles.item}>Cappuccino – L 60</Text>
      <Text style={styles.item}>Latte – L 65</Text>
      <Text style={styles.item}>Chocolate Caliente – L 55</Text>

      {/* Bebidas Heladas */}
      <Text style={styles.section}>🧊 Bebidas Heladas</Text>
      <Text style={styles.item}>Café Frappé – L 75</Text>
      <Text style={styles.item}>Latte Helado – L 70</Text>
      <Text style={styles.item}>Té Helado Natural – L 40</Text>

      {/* Postres */}
      <Text style={styles.section}>🍰 Postres y Comida</Text>
      <Text style={styles.item}>Pastel de Chocolate – L 50</Text>
      <Text style={styles.item}>Cheesecake – L 60</Text>
      <Text style={styles.item}>Croissant – L 35</Text>
      <Text style={styles.item}>Emparedado de Jamón y Queso – L 55</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 20,
  },
  section: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.accent,
    marginTop: 15,
  },
  item: {
    fontSize: 16,
    color: Colors.softBrown,
    marginVertical: 5,
  },
});