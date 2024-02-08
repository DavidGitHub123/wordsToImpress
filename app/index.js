import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationLinks from "../Pages/NavigationLinks";

function App() {
  return (
    <NavigationContainer independent={true}>
      <NavigationLinks />
    </NavigationContainer>
  );
}

export default App;
