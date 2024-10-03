import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingTop: 40,
    textAlign: "center",
  },
  header2: {
    fontSize: 36,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: "center",
  },
  page: {
    flex: 1,
    paddingBottom: 100,
  },
  section: {
    paddingVertical: 30,
  },
  homeButton: {
    paddingTop: 30,
  },
  headLine: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "900",
    textShadowColor: "black",
    textShadowRadius: 5,
    marginTop: -36,
    textAlign: "center",
  },

  headLine2: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "900",
    textShadowColor: "black",
    textShadowRadius: 5,
    marginTop: -10,
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "#f0f8ff",
    fontWeight: "600",
  },

  subheader: {
    fontSize: 24,
    color: "#f0f8ff",
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },

  subHead2: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
    textAlign: "justify",
  },
});

export { mainStyles };
