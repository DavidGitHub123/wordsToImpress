import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { mainStyles } from "../components/mainStyles";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";
import data from "../data.js";
import ListDropdown from "../components/ListDropdown.js";

export default function BlankGame({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [error, setError] = useState(null);

  const getShortDef = (word) => data.find((el) => el.Word === word).Shortdef;

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
      colors={["#2a5298", "#121216"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={mainStyles.page}
    >
      <SafeAreaView style={mainStyles.page}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={mainStyles.centerContainer}>
            <View style={styles.setupContainer}>
              <Text style={{ ...mainStyles.header, marginBottom: 20 }}>
                Fill in the Blank
              </Text>
              <Text
                style={{
                  ...mainStyles.text,
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                Identify the correct definition that matches the highlighted
                word.
              </Text>

              {error && (
                <View style={mainStyles.error}>
                  <Text>{error}</Text>
                </View>
              )}

              {!selectedList && (
                <Text style={{ ...mainStyles.text, marginBottom: 10 }}>
                  Loading...
                </Text>
              )}

              <ListDropdown setParent={setSelectedList} />

              <AppButton
                onPress={handleSubmit}
                title="Play Game"
                icon="sign-in"
                viewStyle={styles.buttonSpacing}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: 40,
  },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  neonGlow: {
    textShadowColor: "#FFAF40",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    color: "#fff",
  },
  errorWrapper: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#f44336",
    borderRadius: 8,
  },
  errorText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  loadingText: {
    color: "#fff",
    fontSize: 16,
  },
  appButton: {
    marginTop: 20,
    backgroundColor: "#FFAF40",
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  appButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  setupContainer: {
    width: Dimensions.get("screen").width * 0.9,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  buttonSpacing: {
    marginTop: 30,
  },
});
