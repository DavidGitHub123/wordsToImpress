import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from "../components/HomeButton";
import AppButton from "../components/AppButton";
import { mainStyles } from "../components/mainStyles";

export default function System({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const hideButton = (
    <Pressable>
      <AppButton
        icon="sign-in"
        title="Hide"
        onPress={() => setSelectedWord(null)}
      />
    </Pressable>
  );

  const About = () => (
    <View style={mainStyles.centerContainer}>
      <Text style={style.componentHead}>About</Text>
      <Text style={mainStyles.copyText}>
        Your language defines you, whether a professional, student studying for
        the SATs, or learning English as a second language. The Words to Impress
        App quickly and efficiently helps you develop an impressive vocabulary.
      </Text>
      {hideButton}
    </View>
  );

  const Rule = () => (
    <View style={mainStyles.centerContainer}>
      <Text style={style.componentHead}>Rule of 50</Text>
      <Text style={mainStyles.copyText}>
        We each have a unique vocabulary. Most successful people have mastered
        50 to 100 “big” vocabulary words. The Words to Impress App helps you
        build a list unique to you. Once your list is complete, study those
        words, making them your own. If you&apos;re an overachiever, add more
        words.
      </Text>
      {hideButton}
    </View>
  );

  const Help = () => (
    <View style={mainStyles.centerContainer}>
      <Text style={style.componentHead}>Targeted Learning</Text>
      <Text style={mainStyles.copyText}>
        Unlike other vocabulary-building systems that present you with hundreds
        of words to learn, this App helps you build the right list for you. The
        Build My List tool analyzes your writing for common words unique to you.
        Then provides you with a list of upgraded words based on familiar
        concepts and ideas.
      </Text>
      {hideButton}
    </View>
  );

  const Situations = () => (
    <View style={mainStyles.centerContainer}>
      <Text style={style.componentHead}>Word Situations</Text>
      <Text style={mainStyles.copyText}>
        Imagine yourself in an important situation. What do you say? Word
        Situations identifies words unique to politics, business, job
        interviews, etc. from 10 different categories. Look up words quickly for
        particular situations and be ready to impress.
      </Text>
      {hideButton}
    </View>
  );

  const Reinforcement = () => (
    <View style={mainStyles.centerContainer}>
      <Text style={style.componentHead}>Learning Reinforcement</Text>
      <Text style={mainStyles.copyText}>
        The Vocabulary Mastery section provides games and quizzes to help you
        learn your list of words. Then reinforce your list of words to make them
        part of your everyday speech and writing.
      </Text>
      {hideButton}
    </View>
  );

  return (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={mainStyles.flexOne}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={style.container}>
        <ScrollView contentContainerStyle={style.scrollView}>
          <View style={mainStyles.screen}>
            <Text style={style.headerSmall}>
              Increase your powers of persuasion and comprehension
            </Text>
            <Text style={mainStyles.subText}>
              The Words to Impress App includes the most impressive words as
              identified by the author of the best-selling Words You Should Know
              series of books.
            </Text>
          </View>

          {selectedWord ? (
            <View style={mainStyles.centerContainer}>{selectedWord}</View>
          ) : (
            <View>
              <View style={mainStyles.centerContainer}>
                <AppButton
                  title="About"
                  icon="sign-in"
                  onPress={() => setSelectedWord(<About />)}
                />
                <AppButton
                  title="Rule of 50"
                  icon="sign-in"
                  onPress={() => setSelectedWord(<Rule />)}
                />
                <AppButton
                  title="Targeted Learning"
                  icon="sign-in"
                  onPress={() => setSelectedWord(<Help />)}
                />
                <AppButton
                  title="Word Situations"
                  icon="sign-in"
                  onPress={() => setSelectedWord(<Situations />)}
                />
                <AppButton
                  title="Reinforcement"
                  icon="sign-in"
                  onPress={() => setSelectedWord(<Reinforcement />)}
                />
              </View>

              <View
                style={[mainStyles.homeButton, { marginHorizontal: "auto" }]}
              >
                <HomeButton navigation={navigation} />
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 40,
  },
  componentHead: {
    fontSize: 30,
    color: "#f0f8ff",
    fontWeight: "600",
    paddingBottom: 10,
    textAlign: "center",
  },
  headerSmall: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "600",
    paddingTop: 20,
    textAlign: "center",
  },
});
