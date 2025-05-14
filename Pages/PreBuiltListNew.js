import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from "../components/HomeButton";
import { NavButtonWord } from "../components/NavButtonWord";
import { mainStyles } from "../components/mainStyles";

export default function PreBuiltListNew({ navigation }) {
  return (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      // start={{ x: 1, y: 1 }}
      // end={{ x: 1, y: 1 }}
      style={mainStyles.page}
    >
      <SafeAreaView style={mainStyles.page}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={[mainStyles.centerContainer, style.contentContainer]}>
            <Text style={mainStyles.header}>Pre-Built List</Text>
            <Text style={style.subheader}>
              Here&apos;s a pre-built list of 50 words. Add these words to
              create a quick starter list and begin learning.
            </Text>
            <Text style={[style.subheader, { marginBottom: 20 }]}>
              Or use the Build My List feature to analyze your communication
              patterns and generate a vocabulary list unique to you.
            </Text>
          </View>
{/* 
          <View style={{ marginVertical: 20 }}>
            <HomeButton navigation={navigation} />
          </View> */}

          <View style={style.wordList}>
            <NavButtonWord
              navigation={navigation}
              title="Abstemious"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Acrid"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Acrimonious"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Adamant"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Alacrity"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Animosity"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Anomaly"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Ardent"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Ascetic"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Avarice"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Biogenesis"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Bovine"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Cognition"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Deplorable"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Dexterous"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Discomfit"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Disparate"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Emphatic"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Emulate"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Enigmatic"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Erratic"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Espouse"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Evince"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Febrile"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Foray"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Grimace"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Hubris"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Impugn"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Inane"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Indelible"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Intercession"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Jurisprudence"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Livid"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Mundane"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Myriad"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Ostracize"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Pander"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Paradigm"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Perjure"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Pinnacle"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Placate"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Protege"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Provocative"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Rectify"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Renege"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Reprobate"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Rhetoric"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Stalemate"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Vanguard"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Vehement"
              destination="Word"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  contentContainer: {
    width: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  wordList: {
    width: "100%",
    marginTop: 10,
  },
  subheader: {
    fontSize: 20,
    color: "white",
    textAlign: "left",
  },
});
