import { useRouter } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View, } from "react-native";
import { db } from "../../services/firebaseConfig";

export default function HomeScreen() {
  const [banners, setBanners] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    obtenerBanners();
  }, []);

  const obtenerBanners = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "banners"));

      const datos: any[] = [];

      querySnapshot.forEach((doc) => {
        datos.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setBanners(datos);
    } catch (error) {
      console.log("Error cargando banners:", error);
    }
  };

  const irAlMenu = (categoria: string) => {
    router.push({
      pathname: "/menu",
      params: { category: categoria },
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>Café del Valle</Text>
      </View>

      {/* BANNERS */}
      {banners.map((item) => (
        <Pressable
          key={item.id}
          style={styles.banner}
          onPress={() => irAlMenu(item.categoria)}
        >
          {/* IMAGEN */}
          <Image
            source={{ uri: item.imagen }}
            style={styles.image}
          />

          {/* TEXTO ENCIMA */}
          <View style={styles.overlay}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5EFE6",
  },
  header: {
    backgroundColor: "#4B2E2B",
    padding: 15,
  },
  logo: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  banner: {
    margin: 20,
    borderRadius: 10,
    overflow: "hidden",
    height: 500,
  },
  image: {
    width: "100%",
    height: "100%",

  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 20,
  },
  titulo: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  descripcion: {
    color: "#FFF",
    fontSize: 14,
  },
});