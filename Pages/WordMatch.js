import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered, defaultList } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";
import { mainStyles } from "../components/mainStyles.js";
import ListDropdown from "../components/ListDropdown";
import AdBanner from "../components/AdBanner.js";
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = TestIds.INTERSTITIAL;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ["fashion", "clothing"],
});

export default function WordMatch({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  async function getAndSetList() {
    if (!selectedList) {
      console.log("early return");
      return;
    }
    let userList = await getNLeastMastered(selectedList, 10);
    if (userList.length === 0) {
      setError(`${selectedList} is empty, add some words or use another list`);
      return;
    } else {
      setError(null);
    }
    userList = userList.map((el) => {
      return {
        Word: el.word,
        mastery: el.mastery,
      };
    });

    setList(userList);
  }
  const handleSubmit = () => {
    if (!error && selectedList && loaded) {
      interstitial.show();
      setIsGameStarted(true);
    }
  };
  useEffect(() => {
    getAndSetList(selectedList);
  }, [selectedList, gameRestart]);

  return isGameStarted ? (
    <MultipleChoiceGame
      list={list}
      questionType="Shortdef"
      answerType="Word"
      navigation={navigation}
      setGameRestart={setGameRestart}
      gameRestart={gameRestart}
      selectedList={selectedList}
    />
  ) : (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={mainStyles.page}
    >
      <View style={[mainStyles.startGameContainer, mainStyles.screen]}>
        <Text style={mainStyles.header}>Word Match</Text>
        <Text style={mainStyles.subheader}>
          Identify the correct word that matches each definition.
        </Text>
        {error && (
          <View style={[mainStyles.error, { marginVertical: 20 }]}>
            <Text>{error}</Text>
          </View>
        )}
        <ListDropdown
          setParent={(n) => setSelectedList(n)}
          initialList={defaultList}
        />
        <AppButton onPress={handleSubmit} title="Play Game" icon="sign-in" />
      </View>
      <AdBanner />
    </LinearGradient>
  );
}
