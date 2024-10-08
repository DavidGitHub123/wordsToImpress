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
import IconButton from "../components/IconButton";
import { mainStyles } from "../components/mainStyles";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={mainStyles.backgroundImage}
      resizeMode="cover"
      source={phone}
    >
      <SafeAreaView>
        <View style={mainStyles.topHeader}>
          <IconButton
            name="bell"
            onPress={() => navigation.navigate("Notifications")}
          />
          <AppButton
            viewStyle={{ width: 100 }}
            backgroundColor="transparent"
            borderColor="#fff"
            borderWidth="1"
            icon="table"
            title="About"
            onPress={() => navigation.navigate("System")}
          />
        </View>

        <View style={style.seperator} />

        <View style={style.heroHeader}>
          <Image style={style.imageHeader} source={logo} />
        </View>

        <View style={style.screen}>
          <Text style={mainStyles.headLine}>Build Your</Text>
          <Text style={mainStyles.headLine2}>Vocabulary</Text>
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

  prowess: {
    fontSize: 50,
    color: "#f0f8ff",
    fontWeight: "900",
    textShadowColor: "black",
    textShadowRadius: 5,
    marginTop: -10,
    paddingBottom: 30,
    textAlign: "center",
  },
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
  },
});
