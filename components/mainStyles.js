import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingTop: 40,
    textAlign: "center",
  },
  page: {
    flex: 1,
    backgroundColor: "#000",
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
});

export { mainStyles };
