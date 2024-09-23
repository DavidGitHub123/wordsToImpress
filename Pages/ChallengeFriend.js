import React from "react";
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import { navStyle } from "../components/NavButton.js";
import challengeafriend from "../assets/challengeafriend.jpg";
import AppButton from "../components/AppButton";

export default function ChallengeFriend({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={challengeafriend}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>Challenge A Friend</Text>
            <Text style={style.text}>
              Do a friend of a favor and help them build an impressive
              vocabulary. Select 10 words from your list of 50 and send them a
              challenge.
            </Text>
          </View>
          <View>
            <NavButton
              navigation={navigation}
              title="Select Words"
              destination="MyList"
            />
            <Pressable
              style={style.appButton}
              onPress={() => navigation.navigate("")}
            >
              <AppButton icon="sign-in" title="Send Challenge" />
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
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 330,
    backgroundColor: "#000",
  },

  image: {
    opacity: 0.5,
  },

  header: {
    fontSize: 35,
    textShadowColor: "#000",
    textShadowRadius: 5,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 18,
    textShadowColor: "#000",
    textShadowRadius: 5,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 20,
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
