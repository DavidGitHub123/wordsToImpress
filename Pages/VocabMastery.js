import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
// import { LinearGradient } from "expo-linear-gradient";
import img122 from "../assets/img/img122.jpg";

export default function VocabMastery({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        {/* <LinearGradient
          colors={["#6699FF", "#335C81"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.25, y: 0.5 }}
          opacity={1.0}
          style={style.page}
        > */}
        <ImageBackground
          source={img122}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>Vocab Mastery</Text>

            <Text style={style.headerText}>
              Here you can learn words to make them part of your everyday
              writing and understanding. Once correctly identied 5 times, a word
              moves into your Mastered List. Only words you have not mastered
              appear for more efficient learning.
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
              destination="ScheduleQuizzes"
            />
          </View>

          <View>
            <HomeButton navigation={navigation} />
          </View>
          </ImageBackground>
        {/* </LinearGradient> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 600,
  },

  // image: {
  //   opacity: .5,
  // },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    textAlign: "center",
    paddingBottom: 20,
  },

  headerText: {
    fontSize: 24,
    color: "#f0f8ff",
    paddingBottom: 20,
    paddingHorizontal: 35,
  },

  section: {
    paddingVertical: 10,
  },

  appButton: {
    paddingHorizontal: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },

  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    width: 300,
  },
});
