import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import data from "../data.js";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeButton from "../components/HomeButton";
import ListenButton from "../components/ListenButton";
import AddButton from "../components/AddButton";
import { navStyle } from "../components/NavButton.js";
import backgrounds from "../backgrounds.js";

export default function WordOfDay({ navigation }) {
  const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
  const backgroundImage = backgrounds[randomBackgroundIndex];

  const AppButton = ({ onPress, icon, title }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="#FF8C00"
        borderRadius={40}
        borderWidth={3}
        borderColor="#BBC2CC"
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

  function GetWordOfTheDay() {
    const randomIndex = Math.floor(Math.random() * data.length);
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
        <Text key={i} style={style.text}>
          {el}
        </Text>
      );
    });

    console.log("Selected Element:");
    console.log(selectedElement);
    return (
      <View style={style.page}>
        <View style={style.screen}>
          <Text style={style.word}>{selectedElement.Word}</Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Pron. </Text>
            <Text style={style.text}>{selectedElement.Pronunciation}</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Def: </Text>
            <Text style={style.text}>{selectedElement.Shortdef}</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Sentence: </Text>
            <View style={style.flexSentence}>{sentence}</View>
          </Text>
        </View>

        <View style={style.buttons}>
          {/* <ListenButton word={wordData.Word}/> */}
          <ListenButton audio={selectedElement.Audio} />
          <AddButton />
          <Pressable style={navStyle.appButton}>
            <AppButton
              title="Back"
              onPress={() => navigation.goBack()}
            ></AppButton>
          </Pressable>
          <HomeButton navigation={navigation} />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={style.image}
        >
          <View>
            <Text style={style.header}>Word of the Day</Text>
            {GetWordOfTheDay()}
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 200,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 38,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: 20,
    paddingTop: 20,
    textAlign: "center",
    opacity: 0.7,
    backgroundColor: "black",
  },

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

  text: {
    fontSize: 24,
    color: "#f0f8ff",
  },

  highlightedText: {
    fontSize: 24,
    color: "#FF8C00",
    fontWeight: "800",
  },

  buttons: {
    paddingTop: 50,
  },

  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
  },

  appButtonContainer: {
    paddingVertical: 5,
    width: 300,
  },
});
