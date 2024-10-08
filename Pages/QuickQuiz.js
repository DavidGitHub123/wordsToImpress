import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered, defaultList } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";
import { mainStyles } from "../components/mainStyles.js";

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
      style={mainStyles.page}
    >
      <View style={mainStyles.startGameContainer}>
        <Text style={mainStyles.header}>Quick Quiz</Text>
        <AppButton
          onPress={() => setIsGameStarted(true)}
          title="Play Game"
          icon="sign-in"
        />
      </View>
    </LinearGradient>
  );
}
