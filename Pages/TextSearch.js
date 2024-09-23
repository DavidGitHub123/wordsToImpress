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

export default function TextSearch({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#6699FF", "#335C81"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.25, y: 0.5 }}
          opacity={1.0}
          style={style.page}
        >
          <View>
            <Text style={style.header}>Text Search</Text>
            <Text style={style.text}>
              Copy text from your emails, communications, proposals, etc. into
              this box and let our AI tools analyze your communication patterns
              to suggest new vocabulary words that correspond to your speaking
              style and context. Then add these words to My Vocab List.
            </Text>
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
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 450,
    // backgroundColor: '#000',
  },

  // image: {
  //   opacity: .5,
  // },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: 10,
    textAlign: "center",
  },

  text: {
    fontSize: 18,
    color: "#f0f8ff",
    paddingHorizontal: 50,
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
