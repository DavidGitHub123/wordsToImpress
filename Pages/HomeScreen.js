import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { NavButton } from "../components/NavButton";
import { LearnButton } from "../components/LearnButton";
import { MyProgressButton } from "../components/MyProgressButton";
import circles from "../assets/circles.jpg";
import logo from "../assets/logoborderradius.jpg";

export default function HomeScreen({ navigation }) {
  const seperatorStyles = {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
  };

  const Seperator = () => <View style={seperatorStyles} />;

  return (
    <SafeAreaView>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={circles}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View style={style.page}>
            <View style={style.topHeader}>
              <MyProgressButton
                navigation={navigation}
                title="MyProgress"
                destination="MyList"
              />
              <LearnButton
                navigation={navigation}
                title="Learn"
                destination="System"
              />
            </View>

            <Seperator />

            <View style={style.header}>
              <View style={style.heroHeader}>
                <Text style={style.headLine}>
                  Build Your Vocabulary PROWESS
                </Text>
                <Image style={style.imageHeader} source={logo} />
                {/* <Image style={style.imageHeader} source={require('../assets/logo.jpg')} /> */}
              </View>

              <View>
                <Text style={style.subHead}>
                  With an AI solution to master an impressive vocabulary!
                </Text>
                <NavButton
                  navigation={navigation}
                  title="My Vocab List"
                  destination="MyList"
                />
              </View>
            </View>

            <Seperator />

            <View style={style.section}>
              <NavButton
                navigation={navigation}
                title="Build My List"
                destination="BuildMyList"
              />
              <NavButton
                navigation={navigation}
                title="Pre-Built List"
                destination="PreBuiltListNew"
              />
              <NavButton
                navigation={navigation}
                title="Vocab Mastery"
                destination="VocabMastery"
              />
              <NavButton
                navigation={navigation}
                title="Word Situations"
                destination="WordSituations"
              />
              <NavButton
                navigation={navigation}
                title="A-Z Words"
                destination="AtoZButtons"
              />
              <NavButton
                navigation={navigation}
                title="Word of Day"
                destination="WordOfDay"
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    marginBottom: 100,
  },

  // image: {
  //   opacity: .5,
  // },

  topHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },

  header: {
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 20,
    textShadowColor: "#000",
    textShadowRadius: 5,
  },

  heroHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    textShadowColor: "#000",
    textShadowRadius: 5,
    marginBottom: -20,
  },

  imageHeader: {
    width: 170,
    height: 170,
    resizeMode: "contain",
    borderRadius: 20,
  },

  headLine: {
    fontSize: 32,
    color: "#f0f8ff",
    fontWeight: "800",
    marginRight: 10,
    textShadowColor: "#000",
    textShadowRadius: 5,
  },

  subHead: {
    fontSize: 24,
    color: "#f0f8ff",
    fontWeight: "500",
    paddingHorizontal: 20,
    paddingBottom: 20,
    textShadowColor: "#000",
    textShadowRadius: 5,
  },

  section: {
    paddingTop: 20,
  },
});
