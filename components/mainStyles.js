import { StyleSheet, Dimensions, StatusBar } from "react-native";

const StatusBarHeight = StatusBar.currentHeight;
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

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
  text2: {
    fontSize: 24,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
    fontWeight: 700,
    textAlign: "center",
  },

  subheader: {
    fontSize: 24,
    color: "#f0f8ff",
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },

  subHead1: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "600",
    paddingTop: 50,
    paddingHorizontal: 30,
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
  topHeader: {
    marginTop: StatusBarHeight,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  fullScreen: {
    height: screenHeight,
    width: screenWidth,
  },
  screenHeight: {
    height: screenHeight,
  },
  screenWidth: {
    width: screenWidth,
  },
  backgroundImage: {
    flex: 1,
  },
  startGameContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  centerContainer: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { mainStyles };
