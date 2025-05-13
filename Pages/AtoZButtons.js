import React from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";
import { mainStyles } from "../components/mainStyles";

export default function AtoZButtons({ navigation }) {
  const renderButtons = () =>
    [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "Z",
    ].map((el, i) => (
      <NavButton
        key={i}
        navigation={navigation}
        title={el}
        destination={"AtoZWords"}
        style={style.navButton}
      />
    ));

  return (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      // start={{ x: 0, y: 0 }}
      // end={{ x: 1, y: 1 }}
      style={mainStyles.page}
    >
      <SafeAreaView>
        <ScrollView alwaysBounceHorizontal={true}>
          <View style={style.container}>
            <Text style={mainStyles.header}>Words A to Z</Text>
            <View style={style.buttonsContainer}>{renderButtons()}</View>
            <View style={mainStyles.homeButton}>
              <HomeButton navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
  navButton: {
    margin: 5,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
