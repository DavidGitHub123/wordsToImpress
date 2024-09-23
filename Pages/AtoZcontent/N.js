import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import AppButton from "../../components/AppButton";
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from "../../components/HomeButton";
import { NavButtonWord } from "../../components/NavButtonWord";
import { navStyle } from "../../components/NavButton.js";

export default function NWords({ navigation }) {
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
              <Text style={style.header}>N Words</Text>
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
                title="Nabob"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Narcissistic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Narcolepsy"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nascent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nebulous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ne Plus Ultra"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Necrology"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nefarious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nemesis"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Neolithic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Neophyte"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nepotism"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nether"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nexus"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nirvana"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Noblesse Oblige"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nocturnal"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nom De Guerre"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nomenclature"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Non Sequitur"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nonchalance"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nonentity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nonfeasance"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nonpareil"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nouveau Riche"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Noxious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nubile"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Nugatory"
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
