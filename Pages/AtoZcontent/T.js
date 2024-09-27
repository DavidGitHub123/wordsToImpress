import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from "../../components/HomeButton";
import { NavButtonWord } from "../../components/NavButtonWord";
import { navStyle } from "../../components/NavButton.js";
import AppButton from "../../components/AppButton";

export default function TWords({ navigation }) {
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
              <Text style={style.header}>T Words</Text>
            </View>

            <View style={style.bottomButtons}>
              <Pressable style={navStyle.appButton}>
                <AppButton
                  title="Back"
                  onPress={() => navigation.goBack()}
                ></AppButton>
              </Pressable>
              <View>
                <HomeButton navigation={navigation} />
              </View>
            </View>

            <View>
              <NavButtonWord
                navigation={navigation}
                title="Taciturn"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Tandem"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Tantamount"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Tautology"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Technocracy"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Teetotaler"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Temerity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Tenable"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Tenacious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Tenuous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Tirade"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Titillate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Toothsome"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Trajectory"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Transcendental"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Translucent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Transpire"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Travail"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Travesty"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Trenchant"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Trepidation"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Trifling"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Tumultuous "
                destination="Word"
              />
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
    paddingTop: 40,
    paddingBottom: 40,
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
