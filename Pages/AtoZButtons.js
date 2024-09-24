import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";

export default function AtoZButtons({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 0.25 }}
          opacity={1.0}
          style={style.page}
        >
          <View>
            <Text style={style.header}>Words A to Z</Text>
          </View>

          <View style={style.homeButton}>
            <HomeButton navigation={navigation} />
          </View>

          <View style={style.section}>
            <NavButton navigation={navigation} title="A" destination="A" />
            <NavButton navigation={navigation} title="B" destination="B" />
            <NavButton navigation={navigation} title="C" destination="C" />
            <NavButton navigation={navigation} title="D" destination="D" />
            <NavButton navigation={navigation} title="E" destination="E" />
            <NavButton navigation={navigation} title="F" destination="F" />
            <NavButton navigation={navigation} title="G" destination="G" />
            <NavButton navigation={navigation} title="H" destination="H" />
            <NavButton navigation={navigation} title="I" destination="I" />
            <NavButton navigation={navigation} title="J" destination="J" />
            <NavButton navigation={navigation} title="K" destination="K" />
            <NavButton navigation={navigation} title="L" destination="L" />
            <NavButton navigation={navigation} title="M" destination="M" />
            <NavButton navigation={navigation} title="N" destination="N" />
            <NavButton navigation={navigation} title="O" destination="O" />
            <NavButton navigation={navigation} title="P" destination="P" />
            <NavButton navigation={navigation} title="Q" destination="Q" />
            <NavButton navigation={navigation} title="R" destination="R" />
            <NavButton navigation={navigation} title="S" destination="S" />
            <NavButton navigation={navigation} title="T" destination="T" />
            <NavButton navigation={navigation} title="U" destination="U" />
            <NavButton navigation={navigation} title="V" destination="V" />
            <NavButton navigation={navigation} title="W" destination="W" />
            <NavButton navigation={navigation} title="Z" destination="Z" />
          </View>

          <View>
            <HomeButton navigation={navigation} />
          </View>
        </LinearGradient>
        {/* </ImageBackground> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#000",
    paddingBottom: 100,
  },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingTop: 40,
    textAlign: "center",
  },

  homeButton: {
    paddingTop: 30,
  },

  image: {
    // opacity: .5,
  },

  section: {
    paddingVertical: 30,
  },

  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },

  appButtonContainer: {
    width: 270,
    opacity: 0.75,
    marginVertical: 2,
  },

  bottomButtons: {
    paddingTop: 20,
  },
});
