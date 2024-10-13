import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import data from "../data.js";
import HomeButton from "../components/HomeButton";
import ListenButton from "../components/ListenButton";
import AddButton from "../components/AddButton";
import backgrounds from "../backgrounds.js";
import { mainStyles } from "../components/mainStyles.js";

export function GetWordOfTheDay() {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const randomIndex = (day + month + year) % data.length;
  return data[randomIndex];
}
export default function WordOfDay({ navigation }) {
  const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
  const backgroundImage = backgrounds[randomBackgroundIndex];

  function formatWordOfTheDay() {
    const wordData = GetWordOfTheDay();
    const sentence = wordData.Longdef.split(" ").map((el, i) => {
      if (el.toLowerCase().includes(wordData.Word.toLowerCase())) {
        return (
          <Text key={i} style={style.highlightedText}>
            {el}
          </Text>
        );
      }
      return (
        <Text key={i} style={mainStyles.text}>
          {el}
        </Text>
      );
    });

    return (
      <View style={mainStyles.page}>
        <View style={style.screen}>
          <Text style={style.word}>{wordData.Word}</Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Pron. </Text>
            <Text style={mainStyles.text}>{wordData.Pronunciation}</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Def: </Text>
            <Text style={mainStyles.text}>{wordData.Shortdef}</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Sentence: </Text>
            <View style={style.flexSentence}>{sentence}</View>
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

const style = StyleSheet.create({
  space: {
    paddingBottom: 10,
  },

  screen: {
    opacity: 0.7,
    backgroundColor: "black",
    padding: 20,
  },

  subHead: {
    fontSize: 24,
    color: "#FF8C00",
    fontWeight: "600",
  },

  word: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: 20,
  },

  flexSentence: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",
    alignItems: "flex-start",
    flexWrap: "wrap",
    rowGap: 2,
    columnGap: 4,
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
