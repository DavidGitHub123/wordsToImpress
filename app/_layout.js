import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AdBanner from "../components/AdBanner";
import mobileAds from "react-native-google-mobile-ads";

const Layout = () => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    async function initAds() {
      await mobileAds().initialize();
    }
    initAds();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      <View style={{ paddingBottom: insets.bottom }}>
        <AdBanner />
      </View>
    </View>
  );
};

export default Layout;
