import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";
import { mainStyles } from "../components/mainStyles";

export default function AtoZButtons({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 0.25 }}
          opacity={1.0}
          style={mainStyles.page}
        >
          <View>
            <Text style={mainStyles.header}>Words A to Z</Text>
          </View>

          <View style={mainStyles.homeButton}>
            <HomeButton navigation={navigation} />
          </View>

          <View style={mainStyles.section}>
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
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}
