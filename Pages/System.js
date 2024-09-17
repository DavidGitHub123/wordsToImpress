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
import { useState } from "react";
// import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeButton from "../components/HomeButton";
import blue13 from "../assets/blue13.jpg";

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

export default function System({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const hideButton = (
    <Pressable style={style.appButton}>
      <AppButton
        icon="sign-in"
        title="Hide"
        onPress={() => setSelectedWord(null)}
      />
    </Pressable>
  );

  const About = () => {
    return (
      <View style={style.component}>
        <Text style={style.componentHead}>About</Text>
        <Text style={style.text}>
          Your language defines you - whether
          a professional, student studying for the SATs, 
          or learning English as a second language. The
          Words to Impress App quickly and efficiently helps you develop an
          impressive vocabulary.
        </Text>
        <Text style={style.text}>
          The
          Words to Impress App quickly and efficiently helps you develop an
          impressive vocabulary.
        </Text>
        <Text style={style.text}>
          The
          Words to Impress App quickly and efficiently helps you develop an
          impressive vocabulary.
        </Text>
        {hideButton}
      </View>
    );
  };

  const Rule = () => {
    return (
      <View style={style.component}>
        <Text style={style.componentHead}>Rule of 50</Text>
        <Text style={style.text}>
          We each have a unique vocabulary. Most successful people have
          mastered 50 to 100 “big” vocabulary words.
        </Text>
        <Text style={style.text}>
          The Words to Impress App helps
          you build a list unique to you. Once your list is complete, study
          those words, making them your own.
        </Text>
        {hideButton}
      </View>
    );
  };

  const Help = () => {
    return (
      <View style={style.component}>
        <Text style={style.componentHead}>Targeted Learning</Text>
        <Text style={style.text}>
          Unlike other vocabulary-building systems that present you with
          hundreds of words to learn, this App helps you build the right list
          for you.
        </Text>
        <Text style={style.text}>
          The Build My List tool anlyzes your
          writing for common words unique to you. Then provides you
          with a list of upgraded words based on concepts and ideas familiar to
          you.
        </Text>
        {hideButton}
      </View>
    );
  };

  const Situations = () => {
    return (
      <View style={style.component}>
        <Text style={style.componentHead}>Word Situations</Text>
        <Text style={style.text}>
          Imagine yourself in an important situation. What's the best thing to say? 
        </Text>
        <Text style={style.text}>
          Word Situations identifies words unique to politics,
          business, job interviews, etc. from 10 different categories. 
          Look up words quick for particular situations and be ready
          to impress.
        </Text>
        {hideButton}
      </View>
    );
  };

  const Reinforcement = () => {
    return (
      <View style={style.component}>
        <Text style={style.componentHead}>Learning Reinforcement</Text>
        <Text style={style.text}>
          The Vocabulary Mastery section provides tools to help you
          learn your list of words quickly.
        </Text>
        <Text style={style.text}>
          Then reinforce your list of words to make them part of your
          everyday speech and writing.
        </Text>
        {hideButton}
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={blue13}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
        {/* <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 0.25 }}
          opacity={1.0}
          style={style.page}
        > */}
          <View style={style.screen}>
            <Text style={style.subHead1}>
              Increase your powers of persuasion and
              comprehension
            </Text>
            <Text style={style.subHead2}>
              The Words to Impress App includes the most impressive words in the
              English language as identified by the author of the best-selling
              The Words You Should Know series of books.
            </Text>
            {/* <Text style={style.text}>
              Titles include The Words You Should Know, The Words You Should
              Know to Sound Smart, and more!
            </Text> */}
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View>
              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="About"
                    onPress={() => setSelectedWord(<About />)}
                  />
                </Pressable>

                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Rule of 50"
                    onPress={() => setSelectedWord(<Rule />)}
                  />
                </Pressable>

                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Targeted Learning"
                    onPress={() => setSelectedWord(<Help />)}
                  />
                </Pressable>

                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Word Situations"
                    onPress={() => setSelectedWord(<Situations />)}
                  />
                </Pressable>

                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Reinforcement"
                    onPress={() => setSelectedWord(<Reinforcement />)}
                  />
                </Pressable>
              </View>

              <View>
                <HomeButton navigation={navigation} />
              </View>
            </View>
          )}
          {/* </LinearGradient> */}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 300,
  },

  image: {
    opacity: 0.8,
  },

  header: {
    fontSize: 34,
    color: "#FF8C00",
    fontWeight: "800",
    paddingBottom: 10,
  },

  screen: {
    opacity: 0.6,
    backgroundColor: "black",
    marginBottom: 30,
  },

  subHead1: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 30,
    number: 10
  },

  subHead2: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },

  componentHead: {
    fontSize: 30,
    color: "#f0f8ff",
    fontWeight: "600",
  },

  component: {
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 20,
    color: "#f0f8ff",
    paddingBottom: 20,
    paddingHorizontal: 20,
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
