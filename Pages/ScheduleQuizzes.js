import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import HomeButton from "../components/HomeButton";
import { navStyle } from "../components/NavButton.js";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../components/AppButton";

export default function ScheduleQuizzes({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        {/* <ImageBackground
          source={blue3}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        > */}
        <LinearGradient
          colors={["#6699FF", "#335C81"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.25, y: 0.5 }}
          opacity={1.0}
          style={style.page}
        >
          <View>
            <Text style={style.header}>Schedule Quizzes</Text>
            <Text style={style.text}>
              Repetition is the key to learning. The more you study your list of
              50 words, and quiz yourself, the faster you will become a vocab
              master.
            </Text>
          </View>

          <View>
            <Pressable
              style={style.appButton}
              onPress={() => navigation.navigate("")}
            >
              <AppButton icon="sign-in" title="Schedule Multiple Choice" />
            </Pressable>
          </View>

          <View>
            <Pressable
              style={style.appButton}
              onPress={() => navigation.navigate("")}
            >
              <AppButton icon="sign-in" title="Schedule RapidFire Game" />
            </Pressable>
          </View>

          <View style={style.buttons}>
            <Pressable style={navStyle.appButton}>
              <AppButton
                title="Back"
                onPress={() => navigation.goBack()}
              ></AppButton>
            </Pressable>
            <HomeButton navigation={navigation} />
          </View>
          {/* </ImageBackground> */}
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#000",
    paddingBottom: 400,
  },

  // image: {
  //   opacity: .5,
  // },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: 10,
    paddingTop: 30,
    textAlign: "center",
  },

  text: {
    fontSize: 18,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 40,
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
    width: 300,
  },
});
