import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import data from "../data.js";
import HomeButton from "../components/HomeButton";
import ListenButton from "../components/ListenButton";
import AddButton from "../components/AddButton";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { mainStyles } from "../components/mainStyles.js";

export const isWordConjugate = (wordCandidate, dataWord) => {
  const truncatedWord = dataWord
    .substring(0, dataWord.length - 1)
    .toLowerCase()
    .replace(/\W$/, "");

  if (dataWord.split(" ").length >= 2) {
    return dataWord.split(" ").some((w) => {
      return (
        wordCandidate.length - w.length <= 3 &&
        wordCandidate
          .toLowerCase()
          .replace(/\W$/, "")
          .includes(w.toLowerCase().replace(/\W$/, ""))
      );
    });
  } else {
    return wordCandidate
      .replace(/\W$/, "")
      .toLowerCase()
      .includes(truncatedWord);
  }
};

export default function Word({ navigation }) {
  const route = useRoute();
  const { selectedWord } = route.params;

  function populate(selectedWord) {
    const wordData = data.find((el) => el.Word === selectedWord);

    if (!wordData) {
      throw new Error(`Error: Could not find ${selectedWord} in data file.`);
    }

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
          style={isHighlighted ? style.highlightedText : style.bodyText}
        >
          {el + " "}
        </Text>
      );
    });

    return (
      <View style={mainStyles.page}>
        <View style={mainStyles.screen}>
          <Text style={style.title}>{wordData.Word}</Text>

          <Text style={style.space}>
            <Text style={style.subHead}>Pron. </Text>
            <Text style={style.bodyText}>{wordData.Pronunciation}</Text>
          </Text>

          <Text style={style.space}>
            <Text style={style.subHead}>Def: </Text>
            <Text style={style.bodyText}>{wordData.Shortdef}</Text>
          </Text>

          <Text style={style.space}>
            <View style={style.flexSentence}>
              <Text style={style.subHead}>Sentence: </Text>
              {sentence}
            </View>
          </Text>
        </View>

        <View style={style.buttons}>
          <ListenButton audio={wordData.Audio} />
          <AddButton word={wordData.Word} />
          <HomeButton navigation={navigation} />
        </View>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      style={mainStyles.flexOne}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={style.overlay}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={style.container}>
          <ScrollView>{populate(selectedWord)}</ScrollView>
        </SafeAreaView>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  overlay: {
    flex: 1,

  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "#FFAF40",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  wordCard: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  space: {
    marginHorizontal: "auto",
    marginTop: 18,
  },
  subHead: {
    fontSize: 20,
    color: "#FFAF40",
    fontWeight: "700",
  },
  bodyText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "400",
  },
  highlightedText: {
    fontSize: 22,
    color: "#FFAF40",
    fontWeight: "700",
  },
  flexSentence: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    gap: 4,
    marginTop: 10,
    justifyContent: "left",
  },
  buttons: {
    marginTop: 30,
    alignItems: "center",
    gap: 14,
  },
});
