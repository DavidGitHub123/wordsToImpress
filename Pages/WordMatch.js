import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered, defaultList } from "../components/listHelpers.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";
import ListDropdown from "../components/ListDropdown";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { mainStyles } from "../components/mainStyles";

const CARD_WIDTH = (Dimensions.get("window").width - 48) / 2;

export default function WordMatch({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [error, setError] = useState(null);

  async function getAndSetList() {
    if (!selectedList) {
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
      selectedList={selectedList}
    />
  ) : (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={mainStyles.page}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={mainStyles.page}>
        <View style={mainStyles.centerContainer}>
          <View style={styles.setupContainer}>
            <Text style={mainStyles.header}>Word Match</Text>
            <Text
              style={{
                ...mainStyles.text,
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              Identify the correct word that matches each definition.
            </Text>

            {error && (
              <View style={mainStyles.error}>
                <Text>{error}</Text>
              </View>
            )}

            <ListDropdown
              setParent={(n) => setSelectedList(n)}
              initialList={defaultList}
            />

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.buttonSpacing}
              onPress={handleSubmit}
            >
              <LinearGradient
                colors={["#cc9600", "#cc9600"]}
                style={styles.cardButton}
              >
                <Icon name="play" size={22} color="#fff" style={styles.icon} />
                <Text style={styles.cardText}>Play Game</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "white",
    textAlign: "center",
    letterSpacing: 1,
  },
  subheader: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
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
    paddingHorizontal: 20,
    backgroundColor: "#ff6b6b",
    borderRadius: 10,
  },
  errorText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
  },
  listContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardWrapper: {
    width: CARD_WIDTH,
    borderRadius: 18,
    overflow: "hidden",
    marginTop: 50,
  },

  setupContainer: {
    width: Dimensions.get("screen").width * 0.9,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  cardButton: {
    paddingVertical: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  cardText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  icon: {
    marginBottom: 6,
  },
  buttonSpacing: {
    width: CARD_WIDTH,
    marginTop: 30,
  },
});
