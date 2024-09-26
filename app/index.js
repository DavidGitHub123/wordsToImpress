import React, { useEffect } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import NavigationLinks from "../Pages/NavigationLinks";
import init from "../components/init";

function App() {
  useEffect(() => {
    const asyncWrapper = async () => await init();
    asyncWrapper();
  }, []);

  return (
    <NavigationContainer independent={true}>
      <NavigationLinks />
    </NavigationContainer>
  );
}

export default App;
