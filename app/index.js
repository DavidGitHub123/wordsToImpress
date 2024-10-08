import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationLinks from "../Pages/NavigationLinks";
import init from "../components/init";
import { StyleSheet } from "react-native";

function App() {
  useEffect(() => {
    const asyncWrapper = async () => await init();
    asyncWrapper();
  }, []);

  return (
    <NavigationContainer independent={true} style={style.flex}>
      <NavigationLinks style={style.flex} />
    </NavigationContainer>
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
