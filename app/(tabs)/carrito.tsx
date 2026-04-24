import * as Linking from "expo-linking";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useCart } from "../context/CartContext";

export default function CarritoScreen() {
  const {
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
    total
  } = useCart();

  const enviarWhatsApp = () => {
    let mensaje = "🛒 Pedido - Café del Valle\n\n";

    carrito.forEach(item => {
      mensaje += `• ${item.nombre} x${item.cantidad} - L. ${item.precio * item.cantidad}\n`;
    });

    mensaje += `\nTotal: L. ${total}`;

    const url = `https://wa.me/50494664075?text=${encodeURIComponent(mensaje)}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Carrito</Text>

      <FlatList
        data={carrito}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nombre}</Text>
            <Text>L. {item.precio}</Text>

            {/* CONTROLES */}
            <View style={styles.controls}>
              <Pressable onPress={() => disminuirCantidad(item.id)}>
                <Text style={styles.btn}>➖</Text>
              </Pressable>

              <Text>{item.cantidad}</Text>

              <Pressable onPress={() => aumentarCantidad(item.id)}>
                <Text style={styles.btn}>➕</Text>
              </Pressable>
            </View>

            <Pressable onPress={() => eliminarDelCarrito(item.id)}>
              <Text style={styles.delete}>Eliminar</Text>
            </Pressable>
          </View>
        )}
      />

      {/* TOTAL */}
      <Text style={styles.total}>Total: L. {total}</Text>

      {/* BOTÓN WHATSAPP */}
      <Pressable style={styles.orderBtn} onPress={enviarWhatsApp}>
        <Text style={{ color: "#FFF", textAlign: "center" }}>
          Ordenar por WhatsApp
        </Text>
      </Pressable>
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
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  },
  btn: {
    fontSize: 20,
  },
  delete: {
    color: "red",
    marginTop: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  orderBtn: {
    backgroundColor: "#6B8E4E",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
});