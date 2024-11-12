import { initLists } from "./listHelpers";
import mobileAds, { MaxAdContentRating } from "react-native-google-mobile-ads";

export default async function init() {
  const _DEV_MODE = false;
  await initLists(_DEV_MODE);
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
}
