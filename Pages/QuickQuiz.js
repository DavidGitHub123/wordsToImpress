import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered, defaultList } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";

export default function QuickQuiz({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);

  useEffect(() => {
    async function getAndSetList() {
      let userList = await getNLeastMastered(defaultList, 10);

      userList = userList.map((el) => {
        return {
          Word: el.word,
          mastery: el.mastery,
        };
      });

      setList(userList);
    }
    getAndSetList();
  }, [gameRestart]);

  return isGameStarted ? (
    <MultipleChoiceGame
      list={list}
      questionType="Shortdef"
      answerType="Word"
      navigation={navigation}
      setGameRestart={setGameRestart}
      gameRestart={gameRestart}
    />
  ) : (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={style.page}
    >
      <View style={style.centerContainer}>
        <Text style={style.header}>Quick Quiz</Text>
        <AppButton
          onPress={() => setIsGameStarted(true)}
          title="Play Game"
          icon="sign-in"
        />
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    paddingBottom: 700,
  },

  spacing: {
    paddingBottom: 100,
  },

  space2: {
    paddingTop: 20,
  },

  space3: {
    paddingTop: 100,
  },

  center: {
    alignItems: "center",
  },

  lastscreen: {
    paddingTop: 200,
  },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: 10,
    paddingTop: 30,
    textAlign: "center",
  },

  mocktext: {
    fontSize: 18,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
  },

  text: {
    fontSize: 24,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
    fontWeight: 700,
  },

  textScale: {
    marginTop: -10,
    fontSize: 24,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
    fontWeight: 700,
  },

  text2: {
    fontSize: 24,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
    fontWeight: 700,
    textAlign: "center",
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
