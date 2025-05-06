import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
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
      colors={["#1e1e2f", "#121216"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Text style={[styles.title, styles.neonGlow]}>
              Fill in the Blank
            </Text>
            <Text style={[styles.subtitle, styles.neonGlow]}>
              Identify the correct definition that matches the highlighted word.
            </Text>
            {error && (
              <View style={styles.errorWrapper}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}
            {!selectedList && (
              <Text style={styles.loadingText}>Loading...</Text>
            )}
            <ListDropdown setParent={setSelectedList} />
            <AppButton
              onPress={handleSubmit}
              title="Play Game"
              icon="sign-in"
              buttonStyle={styles.appButton}
              textStyle={styles.appButtonText}
            />
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
});
