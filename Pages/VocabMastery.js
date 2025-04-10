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
            title="Anagram Fun"
            destination="AnagramFun"
          />

          <NavButton
            navigation={navigation}
            title="Schedule Challenges"
            destination="Notifications"
          />
        </View>

        <View style={mainStyles.section}>
          <HomeButton navigation={navigation} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({});
