import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import AdBanner from "../components/AdBanner";

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Your screens */}
      <Stack screenOptions={{ headerShown: false }} />

      {/* Banner at bottom of all screens */}
      <AdBanner />
    </View>
  );
};

export default Layout;
