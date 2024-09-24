import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeButton from "../components/HomeButton.js";
import { NavButton } from "../components/NavButton.js";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered, defaultList } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import MultipleChoiceGame from "../components/MultipleChoiceGame.js";

export default function QuickQuiz({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);

  useEffect(() => {
    async function getAndSetList() {
      const userList = await getNLeastMastered(defaultList, 10);
      setList(userList);
    }
    getAndSetList();
  }, [gameRestart]);

  const AppButtonGreen = ({ onPress, icon, title }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="green"
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

  const AppButtonHead = ({ onPress, icon, title }) => (
    <View style={style.appButtonHead}>
      <Icon.Button
        name={icon}
        backgroundColor="transparent"
        borderRadius={10}
        borderWidth={3}
        borderColor="#fff"
        onPress={onPress}
        style={style.appButtonHead}
      >
        <Text style={style.appButtonHeadText}>{title}</Text>
      </Icon.Button>
    </View>
  );

  const AppButtonRed = ({ onPress, icon, title }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="red"
        borderRadius={40}
        borderWidth={3}
        borderColor="#fff"
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

  return isGameStarted ? (
    <MultipleChoiceGame
      list={list}
      navigation={navigation}
      setGameRestart={setGameRestart}
      gameRestart={gameRestart}
    />
  ) : (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#6699FF", "#335C81"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.25, y: 0.5 }}
          opacity={1.0}
          style={style.page}
        >
          <View style={style.spacing}>
            <Text style={style.header}>Quick Quiz</Text>
            <AppButton
              onPress={() => setIsGameStarted(true)}
              title="Play Game"
              icon="sign-in"
            />
          </View>

          <View>
            <Text style={style.mocktext}>New Screen with 1st question</Text>

            <Text style={style.mocktext}>
              Counter at top 1/10... Next screen 2/10... and so forth
            </Text>

            <Text style={style.text}>
              Identity the correct word that matches this definition.
            </Text>

            <Text style={style.text}>1 of 10</Text>

            <View>
              <AppButtonHead title="Definition: The highest point attained."></AppButtonHead>
            </View>

            <View style={style.center}>
              <AppButtonGreen title="Zenith" />

              <AppButton title="Writhe"></AppButton>

              <AppButton title="Wend"></AppButton>

              <AppButton title="Wayfaring"></AppButton>
            </View>

            <View style={style.space2}>
              <Text style={style.text2}>Correct</Text>
              <NavButton
                navigation={navigation}
                title="Next Word"
              // destination="Quiz"
              />
            </View>
          </View>

          <View style={style.space3}>
            <Text style={style.text}>
              Identity the correct word that matches this definition. 1 of 10
            </Text>

            <Text style={style.text}>help</Text>

            <View>
              <AppButtonHead title="The highest point attained."></AppButtonHead>
            </View>

            <View style={style.center}>
              <AppButton title="Zenith" color="black" />

              <AppButtonRed title="Writhe" />

              <AppButton title="Wend"></AppButton>

              <AppButton title="Wayfaring"></AppButton>
            </View>

            <View style={style.space2}>
              <Text style={style.text2}>Incorrect</Text>
              <NavButton
                navigation={navigation}
                title="Next Word"
              // destination="Quiz"
              />
            </View>
          </View>

          <View style={style.lastscreen}>
            <Text style={style.mocktext}>Final Screen</Text>
            <Text style={style.text2}>You scored 8/10</Text>
            <NavButton
              navigation={navigation}
              title="Play Again"
            // destination="Quiz"
            />
            <NavButton
              navigation={navigation}
              title="Word Mastery"
            // destination="Quiz"
            />
          </View>

          <View></View>

          <View style={style.buttons}>
            <HomeButton navigation={navigation} />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    paddingBottom: 350,
  },

  spacing: {
    paddingBottom: 100,
  },

  space2: {
    paddingTop: 20,
  },

  space3: {
    paddingTop: 100,
  },

  center: {
    alignItems: "center",
  },

  lastscreen: {
    paddingTop: 200,
  },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: 10,
    paddingTop: 30,
    textAlign: "center",
  },

  mocktext: {
    fontSize: 18,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
  },

  text: {
    fontSize: 24,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
    fontWeight: 700,
  },

  textScale: {
    marginTop: -10,
    fontSize: 24,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
    fontWeight: 700,
  },

  text2: {
    fontSize: 24,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
    fontWeight: 700,
    textAlign: "center",
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
    paddingVertical: 5,
    width: 250,
  },

  appButtonHead: {
    padding: 20,
  },

  appButtonHeadText: {
    fontSize: 26,
    color: "#fff",
  },
});
