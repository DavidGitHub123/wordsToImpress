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
import blue9 from "../assets/blue9.jpg";

export default function StackIt({ navigation }) {
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
          source={blue9}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>Quick Quiz</Text>
            <Text style={style.text}>
              Test your knowledge and swiping agility. Match the definitions
              between the two columns as fast as you can. Score 100% in less
              than 60 seconds and earn a token. 50 tokens you&#39ll be a vocab
              master!
            </Text>
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
            {/* User sees 2 columns ten words each. 1st column are words from their list. 2nd column synonyms.
            User taps word and blue color appears on the word. If they tap on the correct word in 2nd column that word turns blue.
            If they tap on incorrect word, that word turns red. Timer counts down from 60 secs. */}
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
    paddingBottom: 350,
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
    width: 250,
  },
});
