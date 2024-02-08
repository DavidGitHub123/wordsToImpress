import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import { navStyle } from "../components/NavButton.js";
import blue6 from "../assets/blue6.jpg";

export default function MutlipleChoice({ navigation }) {
  const AppButton = ({ onPress, icon, title }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="#FF8C00"
        borderRadius={40}
        borderWidth={3}
        borderColor="#BBC2CC"
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={blue6}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>StackIt</Text>
            <Text style={style.text}>
              Test your new vocab skills. Select 10 words from your list of 50
              to test your knowledge. For each 100% grade, earn a token. 50
              tokens and you&#39ll be a vocab master!{" "}
            </Text>
            {/* // Words from MyList populate 10 question multiple choice quiz.
          Shown 1 word. Below four rectangles with 1 answer/3 wrong answers. Click on correct word.
          If answer is correct, a brick is set in place. If 2nd answer is correct, second brick, etc.
          Timer counts down from 60 secs.
          Grade provided/Token for every 100% */}
          </View>

          <View>
            <NavButton
              navigation={navigation}
              title="Select Words"
              destination="MyList"
            />
            {/* List of 50 appears. User selects 10 words. Clicks play game. */}
            <NavButton
              navigation={navigation}
              title="Play Game"
              destination="Quiz"
            />
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
    paddingBottom: 350,
    backgroundColor: "#000",
  },

  // image: {
  //   opacity: .5,
  // },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    textAlign: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },

  text: {
    fontSize: 18,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 30,
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
    width: 250,
  },
});
