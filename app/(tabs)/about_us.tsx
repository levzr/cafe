import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import { Theme } from "../constants/theme";

export default function History() {
  return (
    <ScrollView style={styles.container}>

      {/* Imagen / Logo */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.image}
        />
      </View>

      <Text style={Theme.text.title}>Café del Valle </Text>

      <Text style={Theme.text.body}>
        Café del Valle es una cafetería ubicada en Valle de Ángeles,
        Francisco Morazán. Fundada en 2026, nace con el objetivo de ofrecer
        una experiencia única, combinando café de calidad con un ambiente acogedor.
      </Text>

      {/* Historia */}
      <View style={styles.card}>
        <Text style={Theme.text.subtitle}>Nuestra Historia</Text>
        <Text style={Theme.text.body}>
          Inspirados por la belleza del valle, creamos un espacio donde las
          personas puedan relajarse y disfrutar productos de calidad.
        </Text>
      </View>

      {/* Misión */}
      <View style={styles.card}>
        <Text style={Theme.text.subtitle}>Misión</Text>
        <Text style={Theme.text.body}>
          Brindar una experiencia única a nuestros clientes mediante productos
          de calidad y un ambiente agradable.
        </Text>
      </View>

      {/* Visión */}
      <View style={styles.card}>
        <Text style={Theme.text.subtitle}>Visión</Text>
        <Text style={Theme.text.body}>
          Ser una cafetería reconocida en la región por su calidad y servicio.
        </Text>
      </View>

      {/* Valores */}
      <View style={styles.card}>
        <Text style={Theme.text.subtitle}>Valores</Text>
        <Text style={Theme.text.body}>
          • Calidad{"\n"}
          • Atención al cliente{"\n"}
          • Pasión por el café{"\n"}
          • Compromiso
        </Text>
      </View>

      {/* Aviso */}
      <View style={styles.warning}>
        <Text style={styles.warningText}>
          ⚠️ Esta aplicación ha sido desarrollada con fines educativos. 
          La cafetería “Café del Valle” y los productos mostrados no son reales.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.secondary,
    padding: 20,
  },

  imageContainer: {
    alignItems: "center",
    marginBottom: 15,
  },

  image: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },

  card: {
    ...Theme.card,
  },

  warning: {
    backgroundColor: "#ffe5e5",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  warningText: {
    color: "#a00000",
    textAlign: "center",
  },
});