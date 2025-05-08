import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { NavButton } from "../components/NavButton";
import { mainStyles } from "../components/mainStyles";
import { LinearGradient } from "expo-linear-gradient";

export default function VocabMastery({ navigation }) {
  return (
    <LinearGradient
      colors={["#1e1e2f", "#121216"]}
      style={mainStyles.flexOne}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={style.container}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Vocab Mastery</Text>

          <Text style={mainStyles.subText}>
            Here you can learn to make words part of your everyday Vocabulary.
            Once correctly identified 10 times, a word appears in your Mastered
            Lists.
          </Text>
        </View>

        <View style={style.section}>
          <NavButton
            navigation={navigation}
            title="Rapid Fire"
            destination="RapidFire"
          />
          <NavButton
            navigation={navigation}
            title="Word Match"
            destination="WordMatch"
          />
          <NavButton
            navigation={navigation}
            title="Quick Quiz"
            destination="QuickQuiz"
          />
          <NavButton
            navigation={navigation}
            title="Fill in the Blank"
            destination="BlankGame"
          />
          <NavButton
            navigation={navigation}
            title="Schedule Challenges"
            destination="Notifications"
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 12,
  },
});
