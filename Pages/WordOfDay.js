import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import data from "../data.js";
import HomeButton from "../components/HomeButton";
import ListenButton from "../components/ListenButton";
import AddButton from "../components/AddButton";
import backgrounds from "../backgrounds.js";
import { mainStyles } from "../components/mainStyles.js";

export function GetWordOfTheDay() {
  // Multiple to make more random
  const day = new Date().getDate() * 3;
  const month = new Date().getMonth() * 5;
  const year = new Date().getFullYear() * 7;
  const randomIndex = (day + month + year) % data.length;
  return data[randomIndex];
}
export default function WordOfDay({ navigation }) {
  const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
  const backgroundImage = backgrounds[randomBackgroundIndex];

  function formatWordOfTheDay() {
    const wordData = GetWordOfTheDay();
    const selectedWord = wordData.Word;

    const sentence = wordData.Longdef.split(" ").map((el, i) => {
      const trucatedWord = selectedWord
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
          .includes(trucatedWord);
      }
      return (
        <Text
          key={i}
          style={isHighlighted ? style.highlightedText : mainStyles.text}
        >
          {el}
        </Text>
      );
    });
    return (
      <View style={mainStyles.page}>
        <View style={mainStyles.screen}>
          <Text style={{ ...mainStyles.header, paddingBottom: 10 }}>
            {wordData.Word}
          </Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Pron: </Text>
            <Text style={mainStyles.text}>{wordData.Pronunciation}</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Def: </Text>
            <Text style={mainStyles.text}>{wordData.Shortdef}</Text>
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
          <AddButton />
          <HomeButton navigation={navigation} />
        </View>
      </View>
    );
  }

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={mainStyles.backgroundImage}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>Word of the Day</Text>
            {formatWordOfTheDay()}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const sentenceWidth = Dimensions.get("screen").width * 0.9;

const style = StyleSheet.create({
  space: {
    paddingBottom: 10,
  },

  subHead: {
    fontSize: 24,
    color: "#FF8C00",
    fontWeight: "600",
  },

  flexSentence: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",
    alignItems: "baseline",
    flexWrap: "wrap",
    rowGap: 2,
    columnGap: 4,
    width: sentenceWidth,
  },

  highlightedText: {
    fontSize: 24,
    color: "#FF8C00",
    fontWeight: "800",
  },

  buttons: {
    paddingTop: 50,
  },
});
