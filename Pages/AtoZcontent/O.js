import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from "../../components/HomeButton";
import { NavButtonWord } from "../../components/NavButtonWord";
import { navStyle } from "../../components/NavButton.js";

export default function OWords({ navigation }) {
  const AppButton = ({ onPress, icon, title }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="#4682B4"
        borderRadius={20}
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
      <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 0.25 }}
          opacity={1.0}
        >
          <View style={style.page}>
            <View>
              <Text style={style.header}>O Words</Text>
            </View>

            <View>
              <Pressable style={navStyle.appButton}>
                <AppButton
                  title="Back"
                  onPress={() => navigation.goBack()}
                ></AppButton>
              </Pressable>
            </View>

            <View>
              <NavButtonWord
                navigation={navigation}
                title="Obfuscate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Obligatory"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Oblique"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Oblivion"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Oblivious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Obsequious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Obstinate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Obtuse"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Obviate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Occlude"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Odious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Odyssey"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Officious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Omnious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Omniscient"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Onerus"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Onus"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Opaque"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Opine"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Opprobrium"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Optimal"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Opulent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ornate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Oscillate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Osmosis"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ostensibly"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ostentatious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ostracize"
                destination="Word"
              />
            </View>

            <View style={style.bottomButtons}>
              <HomeButton navigation={navigation} />
            </View>
          </View>
        </LinearGradient>
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
    paddingBottom: 100,
  },

  header: {
    fontSize: 30,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: 20,
  },

  bottomButtons: {
    paddingTop: 50,
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
    width: 120,
    paddingTop: 10,
    paddingBottom: 40,
  },
});
