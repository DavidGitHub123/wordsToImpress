import React from "react";
import { Text, View } from "react-native";
import data from "../data";

export default function RapidFireCards(Props) {
  const { words, front, cardIndex } = Props;

  const getDef = () => data.find((el) => el.Word).Shortdef;

  const Cards = words.map((el, i) => {
    return {
      front: (
        <View key={i}>
          <Text>{el.word}</Text>
        </View>
      ),
      back: (
        <View key={i}>
          <Text>{getDef(el.word)}</Text>
        </View>
      ),
    };
  });

  return front ? Cards[cardIndex].front : Cards[cardIndex].back;
}
