import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationLinks from "../Pages/NavigationLinks";
import init from "../components/init";
import { StyleSheet } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import logo from "../asset/logo_sm.png";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
      <Text>SplashScreen Demo! 👋</Text>
      <Entypo name="rocket" size={30} />
      <Image style={style.imageHeader} source={logo} />
    </View>
  );
}

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

// export default App;

const style = StyleSheet.create({
  flex: { flex: 1 },
});
