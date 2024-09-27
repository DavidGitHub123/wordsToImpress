import React from "react";
import { Text, View, StyleSheet } from "react-native";
import data from "../data";

export default function RapidFireCards(Props) {
  const { words, front, cardIndex } = Props;

  const getDef = (w) => data.find((el) => el.Word === w).Shortdef;

  console.log();

  const Cards = words.map((el, i) => {
    return {
      front: (
        <View key={i}>
          <Text style={style.header}>{el.word}</Text>
        </View>
      ),
      back: (
        <View key={i}>
          <Text style={style.header}>{getDef(el.word)}</Text>
        </View>
      ),
    };
  });

  return front ? Cards[cardIndex].front : Cards[cardIndex].back;
}

const style = StyleSheet.create({
  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
});
