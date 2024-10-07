import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationLinks from "../Pages/NavigationLinks";
import init from "../components/init";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function App() {
  useEffect(() => {
    const asyncWrapper = async () => await init();
    asyncWrapper();
  }, []);

  return (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={style.flex}
    >
      <NavigationContainer independent={true} style={style.flex}>
        <NavigationLinks style={style.flex} />
      </NavigationContainer>
    </LinearGradient>
  );
}

export default App;

const style = StyleSheet.create({
  background: {
    flex: 1,
    zIndex: -1,
  },
  flex: { flex: 1 },
});
