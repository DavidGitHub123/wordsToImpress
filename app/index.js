import React, { useEffect } from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import NavigationLinks from "../Pages/NavigationLinks";
import init from "../components/init";
import { StyleSheet } from "react-native";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <NavigationIndependentTree>
      <NavigationContainer independent={true} style={style.flex}>
        <NavigationLinks style={style.flex} />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default App;

const style = StyleSheet.create({
  flex: { flex: 1 },
});
