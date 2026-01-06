import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { useEffect } from "react";
import AdBanner from "../components/AdBanner";
import mobileAds from "react-native-google-mobile-ads";

const Layout = () => {
  useEffect(() => {
    async function initAds() {
      await mobileAds().initialize();
    }
    initAds();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      <AdBanner />
    </View>
  );
};

export default Layout;
