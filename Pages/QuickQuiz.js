import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered, defaultList } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";
import { mainStyles } from "../components/mainStyles.js";
import ListDropdown from "../components/ListDropdown";

export default function QuickQuiz({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);
  const [selectedList, setSelectedList] = useState(defaultList);

  async function getAndSetList() {
    let userList = await getNLeastMastered(selectedList, 10);

    userList = userList.map((el) => {
      return {
        Word: el.word,
        mastery: el.mastery,
      };
    });

    setList(userList);
  }
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
        <Text style={mainStyles.header}>Word Match</Text>
        <Text style={mainStyles.subheader}>
          Identify the correct word that matches each definition.
        </Text>
        <ListDropdown
          setParent={(n) => setSelectedList(n)}
          initialList={defaultList}
        />
        <AppButton
          onPress={() => setIsGameStarted(true)}
          title="Play Game"
          icon="sign-in"
        />
      </View>
    </LinearGradient>
  );
}
