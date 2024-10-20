import { StyleSheet, Dimensions, StatusBar } from "react-native";

const StatusBarHeight = StatusBar.currentHeight;
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const mainStyles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingTop: 20,
    textAlign: "center",
  },
  subheader: {
    fontSize: 30,
    color: "#f0f8ff",
    fontWeight: "600",
    paddingVertical: 20,
    textAlign: "center",
  },
  subText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    paddingVertical: 10,
  },
  copyText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  page: {
    flex: 1,
  },
  section: {
    paddingVertical: 30,
  },
  homeButton: {
    paddingVertical: 30,
  },
  text: {
    fontSize: 24,
    color: "#f0f8ff",
    fontWeight: "700",
  },
  flexOne: {
    flex: 1,
  },
  screen: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    marginBottom: 30,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  topHeader: {
    marginTop: StatusBarHeight,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor: "#FF8C00",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
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
    textAlign: "center",
  },
  greenText: {
    color: "#4cf03a",
    fontSize: 24,
    fontWeight: 900,
    textAlign: "center",
  },
  greenColor: {
    color: "#4cf03a",
  },
  greenBackground: {
    backgroundColor: "#4cf03a",
  },

  greenText2: {
    color: "#4cf03a",
    fontSize: 30,
    fontWeight: '900',
    textAlign: "center",
  },
});

export { mainStyles };
