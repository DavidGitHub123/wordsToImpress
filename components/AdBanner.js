import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const productionAdUnitId = {
  ios: "ca-app-pub-1040382127397444/9978763800",
  android: "ca-app-pub-1040382127397444/3321856116",
};

const adUnitId = __DEV__ ? TestIds.BANNER : productionAdUnitId[Platform.OS];

export default function AdBanner() {
  const insets = useSafeAreaInsets();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <View
      pointerEvents={isLoaded ? "auto" : "none"}
      style={[
        styles.bottomContainer,
        !isLoaded && styles.hiddenContainer,
        { paddingBottom: isLoaded ? insets.bottom : 0 },
      ]}
    >
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        onAdLoaded={() => setIsLoaded(true)}
        onAdFailedToLoad={() => setIsLoaded(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    zIndex: 1000,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  hiddenContainer: {
    backgroundColor: "transparent",
    elevation: 0,
    opacity: 0,
    shadowOpacity: 0,
  },
});
