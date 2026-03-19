import { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";


export default function Menu() {
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));

        const lista = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProductos(lista);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Menú</Text>

      {productos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.nombre}>{item.nombre}</Text>
          <Text style={styles.precio}>L. {item.precio}</Text>
          <Text style={styles.categoria}>{item.categoria}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#F5EFE6",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
  },
  precio: {
    fontSize: 16,
  },
  categoria: {
    fontSize: 14,
    color: "gray",
  },
});