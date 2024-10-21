import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
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
      />
    ));

  return (
    <LinearGradient
      colors={["#335C81", "#6699FF"]}
      start={{ x: 0.5, y: 0.25 }}
      end={{ x: 0.5, y: 0.25 }}
      opacity={1.0}
      style={mainStyles.page}
    >
      <SafeAreaView>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>Words A to Z</Text>
          </View>

          <View style={mainStyles.homeButton}>
            <HomeButton navigation={navigation} />
          </View>

          <View style={mainStyles.section}>{renderButtons()}</View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
