import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered, defaultList } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";
import data from "../data.js";
import { mainStyles } from "../components/mainStyles.js";
import ListDropdown from "../components/ListDropdown.js";

export default function SentenceID({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);
  const [selectedList, setSelectedList] = useState(defaultList);

  const getShortDef = (word) => data.find((el) => el.Word === word).Shortdef;

  useEffect(() => {
    async function getAndSetList() {
      let userList = await getNLeastMastered(selectedList, 10);

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

  return isGameStarted ? (
    <MultipleChoiceGame
      list={list}
      questionType="Longdef"
      answerType="Shortdef"
      navigation={navigation}
      setGameRestart={setGameRestart}
      gameRestart={gameRestart}
    />
  ) : (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#6699FF", "#335C81"]}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 0.5 }}
          opacity={1.0}
          style={style.page}
        >
          <View style={mainStyles.startGameContainer}>
            <Text style={style.header}>Sentence ID</Text>
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
      </ScrollView>
    </SafeAreaView>
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
    fontSize: 50,
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
