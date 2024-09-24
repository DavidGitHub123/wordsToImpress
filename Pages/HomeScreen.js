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
import logo from "../assets/logoborderradius.jpg";
import phone from "../assets/phone.jpg";
import AppButton from "../components/AppButton";
import IconButton from "../components/IconButton";

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
          source={phone}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View style={style.page}>
            <View style={style.topHeader}>
              <IconButton name="bell" />
              <AppButton
                icon="table"
                title="About"
                onPress={() => navigation.navigate("System")}
              />
            </View>

            <Seperator />

            <View style={style.heroHeader}>
              <Image style={style.imageHeader} source={logo} />
            </View>

            <View style={style.screen}>
              <Text style={style.headLine}>Build Your Vocabulary</Text>
              <Text style={style.prowess}>PROWESS</Text>
            </View>
            <View>
              <View style={style.buttons}>
                <AppButton
                  size="large"
                  icon="list"
                  title="My List"
                  onPress={() => navigation.navigate("MyList")}
                />
                <AppButton
                  size="large"
                  icon="signal"
                  title="My Progress"
                  onPress={() => navigation.navigate("MyProgress")}
                />
              </View>

              <View style={style.buttons}>
                <AppButton
                  size="large"
                  icon="wrench"
                  title="Build My List"
                  onPress={() => navigation.navigate("BuildMyList")}
                />
                <AppButton
                  size="large"
                  icon="clipboard"
                  title="Pre-Built List"
                  onPress={() => navigation.navigate("PreBuiltListNew")}
                />
              </View>

              <View style={style.buttons}>
                <AppButton
                  size="large"
                  icon="address-book"
                  title="Word Situations"
                  onPress={() => navigation.navigate("WordSituations")}
                />
                <AppButton
                  size="large"
                  icon="trophy"
                  title="Vocab Mastery"
                  onPress={() => navigation.navigate("VocabMastery")}
                />
              </View>

              <View style={style.buttons}>
                <AppButton
                  size="large"
                  icon="calendar"
                  title="Word of Day"
                  onPress={() => navigation.navigate("WordOfDay")}
                />
                <AppButton
                  size="large"
                  icon="book"
                  title="A-Z Words"
                  onPress={() => navigation.navigate("AtoZButtons")}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    paddingBottom: 100,
  },

  topHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 10,
    margin: 3,
  },

  heroHeader: {
    alignItems: "center",
  },

  // heroHeader: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   flexDirection: "row",
  //   marginRight: 25,
  //   textShadowColor: "#000",
  //   textShadowRadius: 5,
  //   marginBottom: 20,
  // },

  buttons: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 3,
    paddingVertical: 3,
    margin: 3,
    justifyContent: "center",
    gap: 10,
  },

  imageHeader: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  screen: {
    opacity: 7,
    backgroundColor: "000",
  },

  headLine: {
    fontSize: 34,
    color: "#f0f8ff",
    fontWeight: "700",
    textShadowColor: "gray",
    textShadowRadius: 5,
    marginTop: -36,
    textAlign: "center",
  },

  prowess: {
    fontSize: 60,
    color: "#f0f8ff",
    fontWeight: "700",
    textShadowColor: "gray",
    textShadowRadius: 5,
    paddingBottom: 30,
    textAlign: "center",
  },

  // section: {
  //   paddingTop: 20,
  // },
});
