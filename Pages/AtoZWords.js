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
    <SafeAreaView>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 0.25 }}
          opacity={1.0}
        >
          <View style={style.container}>
            <View>
              <Text style={mainStyles.header}>{selectedWord} Words</Text>
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
  container: {
    paddingBottom: 500,
  },
  bottomButtons: {
    paddingTop: 40,
    paddingBottom: 40,
  },
});
