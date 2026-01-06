import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const productionAdUnitId = {
  ios: "ca-app-pub-1040382127397444/9978763800",
  android: "ca-app-pub-1040382127397444/3321856116",
};

const adUnitId = __DEV__ ? TestIds.BANNER : productionAdUnitId[Platform.OS];

export default function AdBanner() {
  return (
    <View style={styles.bottomContainer}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
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
    backgroundColor: "#fff", // White background for better visibility
    zIndex: 1000,
    elevation: 10, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
