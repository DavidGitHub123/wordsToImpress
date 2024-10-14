import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import img122 from "../assets/img/img122.jpg";
import { mainStyles } from "../components/mainStyles";

export default function VocabMastery({ navigation }) {
  return (
    <ImageBackground
      source={img122}
      imageStyle={style.image}
      resizeMode="cover"
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <View style={style.screen}>
          <Text style={mainStyles.header}>Vocab Mastery</Text>

          <Text style={mainStyles.subHead2}>
            Here you can learn words to make them part of your everyday writing
            and understanding. Once correctly identied 5 times, a word moves
            into your Mastered List. Only words you have not mastered appear for
            more efficient learning.
          </Text>
        </View>

        <View style={style.section}>
          <NavButton
            navigation={navigation}
            title="RapidFire"
            destination="RapidFire"
          />
          <NavButton
            navigation={navigation}
            title="QuickQuiz"
            destination="QuickQuiz"
          />
          <NavButton
            navigation={navigation}
            title="SentenceID"
            destination="SentenceID"
          />
        </View>

        <View style={style.section}>
          <NavButton
            navigation={navigation}
            title="Schedule Quizzes"
            destination="Notifications"
          />
        </View>

        <View>
          <HomeButton navigation={navigation} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  screen: {
    opacity: 0.5,
    backgroundColor: "black",
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 30,
    borderRadius: 20,
  },

  section: {
    paddingVertical: 10,
  },
});
