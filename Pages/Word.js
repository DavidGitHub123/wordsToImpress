import React from "react";
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import data from "../data.js";
import HomeButton from "../components/HomeButton";
import ListenButton from "../components/ListenButton";
import AddButton from "../components/AddButton";
import { useRoute } from "@react-navigation/native";
import { navStyle } from "../components/NavButton.js";
import backgrounds from "../backgrounds.js";
import AppButton from "../components/AppButton.js";
import { mainStyles } from "../components/mainStyles.js";
import AdBanner from "../components/AdBanner.js";

export const isWordConjugate = (wordCanidate, dataWord) => {
  const trucatedWord = dataWord
    .substring(0, dataWord.length - 1)
    .toLowerCase()
    .replace(/\W$/, "");

  if (dataWord.split(" ").length >= 2) {
    return dataWord.split(" ").some((w) => {
      return (
        wordCanidate.length - w.length <= 3 &&
        wordCanidate
          .toLowerCase()
          .replace(/\W$/, "")
          .includes(w.toLowerCase().replace(/\W$/, ""))
      );
    });
  } else {
    return wordCanidate.replace(/\W$/, "").toLowerCase().includes(trucatedWord);
  }
};

export default function Word({ navigation }) {
  const route = useRoute();
  const { selectedWord } = route.params;

  const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
  const backgroundImage = backgrounds[randomBackgroundIndex];

  function populate(selectedWord) {
    const wordData = data.find((el) => el.Word === selectedWord);

    if (!wordData) {
      throw new Error(`Error: Could not find ${selectedWord} in data file.`);
    }

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
          <Text style={mainStyles.header}>{wordData.Word}</Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Pron. </Text>
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
          <AddButton word={wordData.Word} />
          <Pressable style={navStyle.appButton}>
            <AppButton
              title="Back"
              onPress={() => navigation.goBack()}
            ></AppButton>
          </Pressable>
          <HomeButton navigation={navigation} />
          <AdBanner />
        </View>
      </View>
    );
  }

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={mainStyles.flexOne}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>{populate(selectedWord)}</View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  space: {
    paddingTop: 20,
  },

  subHead: {
    fontSize: 24,
    color: "#FF8C00",
    fontWeight: "700",
  },

  flexSentence: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",
    alignItems: "baseline",
    flexWrap: "wrap",
    rowGap: 2,
    columnGap: 4,
    paddingTop: 30,
  },

  highlightedText: {
    fontSize: 24,
    color: "#FF8C00",
    fontWeight: "800",
  },

  buttons: {
    paddingTop: 20,
  },
});
