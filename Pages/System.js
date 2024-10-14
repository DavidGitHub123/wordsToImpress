import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useState } from "react";
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

  const About = () => {
    return (
      <View style={mainStyles.centerContainer}>
        <Text style={style.componentHead}>About</Text>
        <Text style={mainStyles.subHead2}>
          Your language defines you, whether a professional, student studying
          for the SATs, or learning English as a second language.
          The Words to Impress App quickly and efficiently helps you develop an
          impressive vocabulary.
        </Text>
        {hideButton}
      </View>
    );
  };

  const Rule = () => {
    return (
      <View style={mainStyles.centerContainer}>
        <Text style={style.componentHead}>Rule of 50</Text>
        <Text style={mainStyles.subHead2}>
          We each have a unique vocabulary. Most successful people have mastered
          50 to 100 “big” vocabulary words.
          The Words to Impress App helps you build a list unique to you. Once
          your list is complete, study those words, making them your own. If you're an 
          overachiever, add more and more words.
        </Text>
        {hideButton}
      </View>
    );
  };

  const Help = () => {
    return (
      <View style={mainStyles.centerContainer}>
        <Text style={style.componentHead}>Targeted Learning</Text>
        <Text style={mainStyles.subHead2}>
          Unlike other vocabulary-building systems that present you with
          hundreds of words to learn, this App helps you build the right list
          for you.
          The Build My List tool anlyzes your writing for common words unique to
          you. Then provides you with a list of upgraded words based on familiar
          concepts and ideas.
        </Text>
        {hideButton}
      </View>
    );
  };

  const Situations = () => {
    return (
      <View style={mainStyles.centerContainer}>
        <Text style={style.componentHead}>Word Situations</Text>
        <Text style={mainStyles.subHead2}>
      Imagine yourself in an important situation. What do you say?
          Word Situations identifies words unique to politics, business, job
          interviews, etc. from 10 different categories. Look up words quickly for
          particular situations and be ready to impress.
        </Text>
        {hideButton}
      </View>
    );
  };

  const Reinforcement = () => {
    return (
      <View style={mainStyles.centerContainer}>
        <Text style={style.componentHead}>Learning Reinforcement</Text>
        <Text style={mainStyles.subHead2}>
          The Vocabulary Mastery section provides games and quizes to help you
          learn your list of words.
          Then reinforce your list of words to make them part of your everyday
          speech and writing.
        </Text>
        {hideButton}
      </View>
    );
  };

  return (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.25 }}
      end={{ x: 0.25, y: 0.5 }}
      opacity={1.0}
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View style={mainStyles.screen}>
            <Text style={mainStyles.subHead1}>
              Increase your powers of persuasion and comprehension
            </Text>
            <Text style={mainStyles.subHead2}>
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
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="About"
                    onPress={() => setSelectedWord(<About />)}
                  />
                </Pressable>

                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Rule of 50"
                    onPress={() => setSelectedWord(<Rule />)}
                  />
                </Pressable>

                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Targeted Learning"
                    onPress={() => setSelectedWord(<Help />)}
                  />
                </Pressable>

                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Word Situations"
                    onPress={() => setSelectedWord(<Situations />)}
                  />
                </Pressable>

                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Reinforcement"
                    onPress={() => setSelectedWord(<Reinforcement />)}
                  />
                </Pressable>
              </View>

              <View style={style.homeButton}>
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

  componentHead: {
    fontSize: 30,
    color: "#f0f8ff",
    fontWeight: "600",
    paddingBottom: 10,
  },

  component: {
    paddingHorizontal: 20,
  },

  homeButton: {
    paddingTop: 30,
  },
});
