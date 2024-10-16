import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from "../components/HomeButton";
import { NavButtonWord } from "../components/NavButtonWord";
import { mainStyles } from "../components/mainStyles";

export default function PreBuiltListNew({ navigation }) {
  return (
    <ScrollView alwaysBounceHorizontal={true}>
      <LinearGradient
        colors={["#6699FF", "#335C81"]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 0.5 }}
        opacity={1.0}
        style={style.page}
      >
        <SafeAreaView>
          <View style={mainStyles.screen}>
            <Text style={mainStyles.header}>Pre-Built List</Text>
            <Text style={style.subHead2}>
              Here&apos;s a pre-built list of 50 words. Add these words to
              create a quick starter list and begin learning.
            </Text>
            <Text style={style.subHead2}>
              Or use the Build My List feature to analyze your communications
              patterns to generate a list of vocabulary words unique to you.
            </Text>
          </View>

          <View style={style.HomeButton}>
            <HomeButton navigation={navigation} />
          </View>

          <View>
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
              title="Agnosticism"
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
              title="Cohort "
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
              title="Eurdite"
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
              title="Ostracized"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Pander"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Paradox"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Perjure"
              destination=""
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
              title="Protégé"
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
        </SafeAreaView>
      </LinearGradient>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  page: {
    paddingBottom: 50,
  },
  HomeButton: {
    paddingBottom: 20,
  },
  subHead2: {
    fontSize: 20,
    color: "#f0f8ff",
    fontWeight: "600",
    paddingVertical: 10,
  },
});
