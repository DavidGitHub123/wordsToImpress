import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";
import data from "../data.js";
import { mainStyles } from "../components/mainStyles.js";
import ListDropdown from "../components/ListDropdown.js";

export default function AnagramFun({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [error, setError] = useState(null);

  const getShortDef = (word) => data.find((el) => el.Word === word).Shortdef;

  useEffect(() => {
    async function getAndSetList() {
      if (!selectedList) {
        return;
      }
      let userList = await getNLeastMastered(selectedList, 10);

      if (userList.length === 0) {
        setError(
          `${selectedList} is empty, add some words or use another list`,
        );
        return;
      } else {
        setError(null);
      }
      userList = userList.map((el) => {
        return {
          Word: el.word,
          mastery: el.mastery,
          Shortdef: getShortDef(el.word),
        };
      });

      setList(userList);
    }

    getAndSetList();
  }, [gameRestart, selectedList]);

  const handleSubmit = () => {
    if (!error && selectedList) {
      setIsGameStarted(true);
    }
  };

  return isGameStarted ? (
    <MultipleChoiceGame
      list={list}
      questionType="Longdef"
      answerType="Word"
      navigation={navigation}
      setGameRestart={setGameRestart}
      gameRestart={gameRestart}
      selectedList={selectedList}
      blank={true}
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
            <Text style={mainStyles.header}>AnagramFun</Text>
            <Text style={mainStyles.subheader}>
              Read the definition, then rearrange the letters to identify the word.
              Add timer?
            </Text>
            {error && (
              <View style={[mainStyles.error, { marginVertical: 20 }]}>
                <Text>{error}</Text>
              </View>
            )}
            {!selectedList && <Text style={mainStyles.text}>Loading</Text>}
            <ListDropdown setParent={setSelectedList} />
            <AppButton
              onPress={handleSubmit}
              title="Play Game"
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
