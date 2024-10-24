import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered, defaultList } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";
import { mainStyles } from "../components/mainStyles.js";
import ListDropdown from "../components/ListDropdown";

export default function WordMatch({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [error, setError] = useState(null);

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
    if (!error && selectedList) {
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
    </LinearGradient>
  );
}
