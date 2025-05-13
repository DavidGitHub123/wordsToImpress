import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import data from "../data";
import { NavButtonWord } from "../components/NavButtonWord";
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from "../components/HomeButton";
import { mainStyles } from "../components/mainStyles.js";

export default function AtoZWords({ route, navigation }) {
  const { selectedWord } = route.params;
  const filteredWords = data.filter(
    (el) => el.Word[0].toUpperCase() === selectedWord.toUpperCase(),
  );

  const renderWords = () =>
    filteredWords.map((el, i) => (
      <NavButtonWord
        navigation={navigation}
        key={i}
        title={el.Word}
        destination="Word"
        style={style.wordButton}
      />
    ));

  return (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      // start={{ x: 1, y: 1 }}
      // end={{ x: 1, y: 1 }}
      style={mainStyles.flexOne}
    >
      <SafeAreaView>
        <ScrollView alwaysBounceHorizontal={true}>
          <View style={style.container}>
            <View style={style.headerContainer}>
              <Text style={mainStyles.header}>{selectedWord} Words</Text>
            </View>

            <View style={style.wordListContainer}>{renderWords()}</View>

            <View style={style.bottomButtons}>
              <HomeButton navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  wordListContainer: {
    marginBottom: 60,
  },
  wordButton: {
    marginVertical: 10,
  },
  bottomButtons: {
    marginTop: 40,
    paddingBottom: 40,
    alignItems: "center",
    
  },
});
