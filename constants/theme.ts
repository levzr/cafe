import { Colors } from "./colors";

export const Theme = {
  colors: Colors,

  text: {
    title: {
      fontSize: 26,
      fontWeight: "bold",
      color: Colors.primary,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: Colors.accent,
    },
    body: {
      fontSize: 15,
      color: Colors.softBrown,
    },
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
};