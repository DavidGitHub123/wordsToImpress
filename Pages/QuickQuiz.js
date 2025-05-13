import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";
import data from "../data.js";
import { mainStyles } from "../components/mainStyles.js";
import ListDropdown from "../components/ListDropdown.js";

export default function QuickQuiz({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [error, setError] = useState(null);

  const getShortDef = (word) =>
    data.find((el) => el.Word === word)?.Shortdef || "No definition found";

  useEffect(() => {
    async function getAndSetList() {
      if (!selectedList) return;

      let userList = await getNLeastMastered(selectedList, 10);
      if (userList.length === 0) {
        setError(
          `${selectedList} is empty, add some words or use another list`,
        );
        return;
      }

      setError(null);
      userList = userList.map((el) => ({
        Word: el.word,
        mastery: el.mastery,
        Shortdef: getShortDef(el.word),
      }));

      setList(userList);
    }

    getAndSetList();
  }, [gameRestart, selectedList]);

  const handleSubmit = () => {
    if (!error && selectedList) {
      setIsGameStarted(true);
    }
  };

  if (isGameStarted) {
    return (
      <MultipleChoiceGame
        list={list}
        questionType="Longdef"
        answerType="Shortdef"
        navigation={navigation}
        setGameRestart={setGameRestart}
        gameRestart={gameRestart}
        selectedList={selectedList}
      />
    );
  }

  return (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={mainStyles.page}
    >
      <SafeAreaView style={mainStyles.page}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[mainStyles.centerContainer, style.contentContainer]}>
            <Text style={mainStyles.header}>Quick Quiz</Text>
            <Text style={[mainStyles.subheader, { marginBottom: 20 }]}>
              Identify the correct definition that matches the highlighted word.
            </Text>

            {error && (
              <View style={[mainStyles.error, { marginBottom: 20 }]}>
                <Text>{error}</Text>
              </View>
            )}

            <ListDropdown setParent={setSelectedList} />
            <AppButton
              onPress={handleSubmit}
              title="Play Game"
              icon="sign-in"
              viewStyle={{ marginTop: 50 }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  contentContainer: {
    paddingVertical: 40,
    width: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    alignItems: "center",
  },
});
