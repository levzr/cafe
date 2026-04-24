import { useFocusEffect } from "@react-navigation/native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { db } from "../../services/firebaseConfig";
import { useCart } from "../context/CartContext";

export default function MenuScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [productos, setProductos] = useState<any[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [agregadoId, setAgregadoId] = useState<string | null>(null);

  const { agregarAlCarrito, totalItems } = useCart();

  // 📌 Capturar categoría del banner
  useEffect(() => {
    if (params.category) {
      setCategory(params.category as string);
    } else {
      setCategory(null);
    }
  }, [params.category]);

  // 📌 Obtener productos
  useEffect(() => {
    const getProductos = async () => {
      try {
        let q;

        if (category) {
          q = query(
            collection(db, "productos"),
            where("categoria", "==", category)
          );
        } else {
          q = collection(db, "productos");
        }

        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(data);
      } catch (error) {
        console.log("Error cargando productos:", error);
      }
    };

    getProductos();
  }, [category]);

  // 📌 Limpiar parámetro después de usarlo

  useFocusEffect(
  useCallback(() => {
    if (params.category) {
      setTimeout(() => {
        router.setParams({ category: undefined });
      }, 0);
    }
  }, [params.category])
);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {category
          ? `Menú - ${category.toUpperCase()}`
          : "Menú Café del Valle"}
      </Text>

      {/* 🔥 CHIPS HORIZONTALES */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsContainer}
      >
        {[
          { key: "todos", label: "Todos", icon: "" },
          { key: "caliente", label: "Caliente", icon: "" },
          { key: "helado", label: "Helado", icon: "" },
          { key: "comida", label: "Comida", icon: "" },
        ].map((cat) => {
          const isActive =
            (cat.key === "todos" && !category) ||
            category === cat.key;

          return (
            <Pressable
              key={cat.key}
              onPress={() =>
                setCategory(cat.key === "todos" ? null : cat.key)
              }
              style={[
                styles.chip,
                isActive && styles.chipActive,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  isActive && styles.chipTextActive,
                ]}
              >
                {cat.icon} {cat.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* 📦 LISTA DE PRODUCTOS */}
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nombre}</Text>
            <Text style={styles.price}>L. {item.precio}</Text>

            <Pressable
              onPress={() => {
                agregarAlCarrito(item);
                setAgregadoId(item.id);
                setTimeout(() => setAgregadoId(null), 1000);
              }}
              style={{
                backgroundColor:
                  agregadoId === item.id ? "#4B2E2B" : "#6B8E4E",
                padding: 10,
                borderRadius: 10,
                marginTop: 5,
              }}
            >
              <Text style={{ color: "#FFF", textAlign: "center" }}>
                {agregadoId === item.id ? "✔ Agregado" : "Agregar"}
              </Text>
            </Pressable>
          </View>
        )}
      />

      {/* 🛒 BOTÓN CARRITO */}
      {totalItems > 0 && (
        <Pressable
          onPress={() => router.push("/carrito")}
          style={styles.cartButton}
        >
          <Text style={styles.cartText}>🛒 {totalItems}</Text>
        </Pressable>
      )}
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  // 🔥 CHIPS
  chipsContainer: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 10,
  },

  chip: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 8,
  },  
  chipActive: {
    backgroundColor: "#4B2E2B",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  chipText: {
    color: "#333",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 16,
  },
  chipTextActive: {
    color: "#FFF",
    fontWeight: "600",
  },

  // 📦 PRODUCTOS
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    marginTop: 5,
    color: "#6B8E4E",
  },

  // 🛒 CARRITO
  cartButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#6B8E4E",
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
  cartText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});