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

export default function UWords({ navigation }) {
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
              <Text style={style.header}>U Words</Text>
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
                title="Ubiquitous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ulterior"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ultimatum"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Umbrage"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Undulate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Unilateral"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Upbraid"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ursine"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Usurp"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Utilitarian"
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
