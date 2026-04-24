import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { db } from "../../services/firebaseConfig";

export default function PromoScreen() {
  const [promos, setPromos] = useState<any[]>([]);

  useEffect(() => {
    const getPromos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "promociones"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setPromos(data);
      } catch (error) {
        console.log("Error cargando promociones:", error);
      }
    };

    getPromos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promociones</Text>

      <FlatList
        data={promos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.image} />

            <Text style={styles.name}>{item.titulo}</Text>
            <Text style={styles.desc}>{item.descripcion}</Text>
            <Text style={styles.price}>L. {item.precio}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EFE6",
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4B2E2B",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  desc: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  price: {
    marginTop: 8,
    color: "#6B8E4E",
    fontWeight: "bold",
  },
});