import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import data from "../data.js";
import HomeButton from "../components/HomeButton";
import ListenButton from "../components/ListenButton";
import AddButton from "../components/AddButton";
import { LinearGradient } from "expo-linear-gradient";

export function GetWordOfTheDay() {
  // Multiple to make more random
  const day = new Date().getDate() * 3;
  const month = new Date().getMonth() * 5;
  const year = new Date().getFullYear() * 7;
  const randomIndex = (day + month + year) % data.length;
  return data[randomIndex];
}

export default function WordOfDay({ navigation }) {
  const wordData = GetWordOfTheDay();
  const selectedWord = wordData.Word;
  const sentence = wordData.Longdef.split(" ").map((el, i) => {
    const truncatedWord = selectedWord
      .substring(0, selectedWord.length - 1)
      .toLowerCase()
      .replace(/\W$/, "");

    let isHighlighted = false;
    if (selectedWord.split(" ").length >= 2) {
      isHighlighted = selectedWord.split(" ").some((w) => {
        return (
          el.length - w.length <= 3 &&
          el
            .toLowerCase()
            .replace(/\W$/, "")
            .includes(w.toLowerCase().replace(/\W$/, ""))
        );
      });
    } else {
      isHighlighted = el
        .replace(/\W$/, "")
        .toLowerCase()
        .includes(truncatedWord);
    }
    return (
      <Text
        key={i}
        style={isHighlighted ? styles.highlightedText : styles.text}
      >
        {el}{" "}
      </Text>
    );
  });

  return (
    <LinearGradient
      colors={["#1e1e2f", "#121216"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={[styles.title, styles.neonGlow]}>Word of the Day</Text>
          <Text style={styles.word}>{selectedWord}</Text>
          <Text style={styles.subText}>
            <Text style={styles.subHead}>Pron: </Text>
            {wordData.Pronunciation}
          </Text>
          <Text style={styles.subText}>
            <Text style={styles.subHead}>Def: </Text>
            {wordData.Shortdef}
          </Text>
          <View style={styles.sentenceContainer}>
            <Text style={styles.subHead}>Sentence: </Text>
            {sentence}
          </View>
        </View>

        <View style={styles.buttons}>
          <ListenButton audio={wordData.Audio} />
          <AddButton />
          <HomeButton navigation={navigation} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 1,
  },
  neonGlow: {
    textShadowColor: "#FFAF40",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    color: "#fff",
  },
  word: {
    fontSize: 36,
    fontWeight: "800",
    color: "#fff",
    marginTop: 15,
  },
  subText: {
    fontSize: 18,
    color: "#aaa",
    marginTop: 5,
    textAlign: "center",
  },
  subHead: {
    fontSize: 22,
    color: "#FF8C00",
    fontWeight: "600",
  },
  sentenceContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  highlightedText: {
    fontSize: 22,
    color: "#FF8C00",
    fontWeight: "800",
  },
  buttons: {
    paddingTop: 50,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
});
