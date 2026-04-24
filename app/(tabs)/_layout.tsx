import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
          headerStyle: {
          backgroundColor: "#4b2e2b",
          },
          headerTintColor: "#FFFFFF",
          tabBarStyle: {
            backgroundColor: "#4B2E2B",
          },
          tabBarActiveTintColor: "#6B8E4E",
          tabBarInactiveTintColor: "#F5EFE6",
        }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menú',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cafe" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="promo"
        options={{
          title: 'Promociones',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetag" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="about_us"
        options={{
          title: 'Sobre Nosotros',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="carrito"
        options={{
          title: "Carrito",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
