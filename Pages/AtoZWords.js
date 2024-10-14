import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import data from "../data";
import { NavButtonWord } from "../components/NavButtonWord";
import AppButton from "../components/AppButton";
import { LinearGradient } from "expo-linear-gradient";
import { navStyle } from "../components/NavButton.js";
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
      />
    ));

  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 0.25 }}
          opacity={1.0}
        >
          <View style={style.page}>
            <View>
              <Text style={mainStyles.headLine2}>{selectedWord} Words</Text>
            </View>

            <View style={style.bottomButtons}>
              <Pressable style={navStyle.appButton}>
                <AppButton
                  title="Back"
                  onPress={() => navigation.goBack()}
                ></AppButton>
              </Pressable>
              <View>
                <HomeButton navigation={navigation} />
              </View>
            </View>

            <View>{renderWords()}</View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 200,
  },

  header: {
    fontSize: 10,
    color: "#f0f8ff",
    fontWeight: "800",
  },

  bottomButtons: {
    paddingTop: 40,
    paddingBottom: 40,
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
    width: 120,
    paddingTop: 10,
    paddingBottom: 40,
  },
});
