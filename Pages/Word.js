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
import Icon from "react-native-vector-icons/FontAwesome";
import HomeButton from "../components/HomeButton";
import ListenButton from "../components/ListenButton";
import AddButton from "../components/AddButton";
import { useRoute } from "@react-navigation/native";
import { navStyle } from "../components/NavButton.js";
import backgrounds from "../backgrounds.js";

export default function Word({ navigation }) {
  const route = useRoute();
  const { selectedWord } = route.params;

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

  function populate(selectedWord) {
    const wordData = data.find((el) => el.Word === selectedWord);

    if (!wordData) {
      throw new Error(`Error: Could not find ${selectedWord} in data file.`);
    }

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

    return (
      <View style={style.page}>
        <View style={style.screen}>
          <Text style={style.header}>{wordData.Word}</Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Pron. </Text>
            <Text style={style.text}>{wordData.Pronunciation}</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.subHead}>Def: </Text>
            <Text style={style.text}>{wordData.Shortdef}</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.subHeadSentence}>Sentence: </Text>
            <View style={style.flexSentence}>{sentence}</View>
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
          <View>{populate(selectedWord)}</View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 300,
    paddingHorizontal: 30,
  },

  header: {
    fontSize: 38,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: 10,
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

  subHeadSentence: {
    fontSize: 40,
    color: "#FF8C00",
    fontWeight: "600",
    marginBottom: 30,
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
    fontWeight: "600",
  },

  highlightedText: {
    fontSize: 24,
    color: "#FF8C00",
    fontWeight: "800",
  },

  buttons: {
    paddingTop: 20,
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
    width: 300,
  },
});
