import React from "react";
import { Text, View, StyleSheet } from "react-native";
import data from "../data";

import { mainStyles } from "../components/mainStyles";

export default function RapidFireCards(Props) {
  const { words, front, cardIndex } = Props;

  const getDef = (w) => data.find((el) => el.Word === w).Shortdef;

  const Cards = words.map((el, i) => {
    return {
      front: (
        <View key={i} style={mainStyles.screen}>
          <Text style={style.header}>{el.word}</Text>
        </View>
      ),
      back: (
        <View key={i} style={mainStyles.screen}>
          <Text style={style.header}>{el.word}</Text>
          <Text style={style.subHead}>{getDef(el.word)}</Text>
        </View>
      ),
    };
  });

  return front ? Cards[cardIndex].front : Cards[cardIndex].back;
}

const style = StyleSheet.create({
  screen: {
    opacity: 0.5,
    backgroundColor: "black",
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 30,
  },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },

  subHead: {
    fontSize: 28,
    color: "#f0f8ff",
    paddingVertical: 40,
    paddingHorizontal: 20,
    fontWeight: "600",
    textAlign: "left",
  },
});
