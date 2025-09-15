import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../components/AppButton.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";
import data from "../data.js";
import { mainStyles } from "../components/mainStyles.js";

export default function VocabTest({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);

  useEffect(() => {
    async function getAndSetList() {
      let randomList = [];

      for (let i = 0; i < 25; i++) {
        randomList.push(data[Math.floor(Math.random() * data.length)]);
      }

      randomList = randomList.map((el) => {
        return {
          Word: el.Word,
          Shortdef: el.Shortdef,
        };
      });

      setList(randomList);
    }

    getAndSetList();
  }, [gameRestart]);

  const handleSubmit = () => setIsGameStarted(true);

  return isGameStarted ? (
    <MultipleChoiceGame
      list={list}
      questionType="Shortdef"
      answerType="Word"
      navigation={navigation}
      setGameRestart={setGameRestart}
      gameRestart={gameRestart}
      noMastery={true}
      showScoreModal={true}
    />
  ) : (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View style={[mainStyles.startGameContainer, mainStyles.screen]}>
            <Text style={mainStyles.header}>Vocab Test</Text>
            <Text style={mainStyles.subheader}>
              Take this test of 25 random vocabulary words to test your word
              knowledge.
            </Text>
            <AppButton
              onPress={handleSubmit}
              title="Start Test"
              icon="sign-in"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    paddingBottom: 700,
  },
  center: {
    alignItems: "center",
  },

  lastscreen: {
    paddingTop: 200,
  },

  mocktext: {
    fontSize: 18,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
  },

  textScale: {
    marginTop: -10,
    fontSize: 24,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
    fontWeight: 700,
  },

  buttons: {
    paddingTop: 20,
  },

  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
  },

  appButtonContainer: {
    paddingVertical: 5,
    width: 250,
  },

  appButtonHead: {
    padding: 20,
  },

  appButtonHeadText: {
    fontSize: 26,
    color: "#fff",
  },
  centerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
