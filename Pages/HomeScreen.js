import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import logo from "../assets/logoborderradius.jpg";
import phone from "../assets/phone.jpg";
import AppButton from "../components/AppButton";
import { mainStyles } from "../components/mainStyles";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={mainStyles.backgroundImage}
      resizeMode="cover"
      source={phone}
    >
      <View style={style.unsafeBanner} />
      <SafeAreaView>
        <View style={mainStyles.topHeader}>
          <AppButton
            viewStyle={{ width: 100 }}
            borderColor="transparent"
            icon="bell"
            title="Schedule"
            onPress={() => navigation.navigate("Notifications")}
            fontWeight="700"
          />
          <AppButton
            viewStyle={{ width: 100 }}
            borderColor="transparent"
            icon="table"
            title="About"
            fontWeight="700"
            onPress={() => navigation.navigate("System")}
          />
        </View>

        <View style={style.seperator} />

        <View style={style.heroHeader}>
          <Image style={style.imageHeader} source={logo} />
        </View>

        <View style={style.screen}>
          <Text style={style.buildyour}>Build Your</Text>
          <Text style={style.vocabulary}>Vocabulary</Text>
          <Text style={style.prowess}>PROWESS</Text>
        </View>
        <View>
          <View style={style.buttons}>
            <AppButton
              size="large"
              icon="list"
              title="My Lists"
              onPress={() => navigation.navigate("ManageLists")}
            />
            <AppButton
              size="large"
              icon="signal"
              title="My Mastery"
              onPress={() => navigation.navigate("MyList")}
            />
          </View>

          <View style={style.buttons}>
            <AppButton
              size="large"
              icon="wrench"
              title="Build My List"
              onPress={() => navigation.navigate("TextSearch")}
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
              title="Word Mastery"
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
      </SafeAreaView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  heroHeader: {
    alignItems: "center",
  },

  buttons: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },

  imageHeader: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  buildyour: {
    letterSpacing: 4,
    fontSize: 44,
    color: "#f0f8ff",
    fontWeight: "900",
    textShadowColor: "black",
    textShadowRadius: 5,
    textAlign: "center",
    marginTop: -40,
  },

  vocabulary: {
    letterSpacing: 4,
    fontSize: 38,
    color: "#f0f8ff",
    fontWeight: "900",
    textShadowColor: "black",
    textShadowRadius: 5,
    marginTop: -5,
    textAlign: "center",
  },

  prowess: {
    fontSize: 50,
    color: "#f0f8ff",
    fontWeight: "900",
    textShadowColor: "black",
    textShadowRadius: 5,
    paddingBottom: 30,
    textAlign: "center",
  },
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
  },
  unsafeBanner: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "10%",
    width: "100%",
    backgroundColor: "#FF8C00",
  },
});
