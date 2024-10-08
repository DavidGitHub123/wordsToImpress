import React from "react";
import { Text, View } from "react-native";
import data from "../data";
import { mainStyles } from "../components/mainStyles";

export default function RapidFireCards(Props) {
  const { words, front, cardIndex } = Props;

  const getDef = (w) => data.find((el) => el.Word === w).Shortdef;

  console.log();

  const Cards = words.map((el, i) => {
    return {
      front: (
        <View key={i}>
          <Text style={mainStyles.header}>{el.word}</Text>
        </View>
      ),
      back: (
        <View key={i}>
          <Text style={mainStyles.header}>{getDef(el.word)}</Text>
        </View>
      ),
    };
  });

  return front ? Cards[cardIndex].front : Cards[cardIndex].back;
}
