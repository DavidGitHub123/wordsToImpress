import { useEffect } from "react";
import { InterstitialAd, AdEventType } from "react-native-google-mobile-ads";
import { Platform } from "react-native";

const adUnitId = Platform.select({
  android: "ca-app-pub-1040382127397444/6408558228",
  ios: "ca-app-pub-1040382127397444/YYYYYYYYYY",
});

export function useStartupAd() {
  useEffect(() => {
    const interstitial = InterstitialAd.createForAdRequest(adUnitId);

    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        interstitial.show();
      },
    );

    interstitial.load();

    return unsubscribe;
  }, []);
}
