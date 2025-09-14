import React, { useEffect } from "react";
import { View, StyleSheet, Platform } from "react-native";
import mobileAds, {
  BannerAd,
  BannerAdSize,
  TestIds,
  MaxAdContentRating,
} from "react-native-google-mobile-ads";

export default function AdBanner() {
  const productionAdUnitId = {
    ios: "ca-app-pub-1040382127397444/9978763800",
    android: "ca-app-pub-1040382127397444/3321856116",
  };
  const adUnitId = __DEV__ ? TestIds.BANNER : productionAdUnitId[Platform.OS];

  useEffect(() => {
    const asyncCallback = async () => {
      await mobileAds().setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,

        // An array of test device IDs to allow.
        testDeviceIdentifiers: ["EMULATOR"],
      });
      await mobileAds().initialize();
    };

    asyncCallback();
  }, []);

  return (
    <View style={styles.bottomContainer}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
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
