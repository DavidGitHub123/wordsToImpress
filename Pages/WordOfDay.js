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

export default function WordOfDay({ navigation }) {
  const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
  const backgroundImage = backgrounds[randomBackgroundIndex];

  function GetWordOfTheDay() {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const randomIndex = (day + month + year) % data.length;
    const selectedElement = data[randomIndex];
    const selectedWord = data[randomIndex].Word;

    const wordData = data.find((el) => el.Word === selectedWord);

    const sentence = wordData.Longdef.split(" ").map((el, i) => {
      if (el.toLowerCase().includes(selectedWord.toLowerCase())) {
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
          <Text style={style.word}>{selectedElement.Word}</Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Pron. </Text>
            <Text style={mainStyles.text}>{selectedElement.Pronunciation}</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Def: </Text>
            <Text style={mainStyles.text}>{selectedElement.Shortdef}</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Sentence: </Text>
            <View style={style.flexSentence}>{sentence}</View>
          </Text>
        </View>

        <View style={style.buttons}>
          <ListenButton audio={selectedElement.Audio} />
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
            {GetWordOfTheDay()}
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
