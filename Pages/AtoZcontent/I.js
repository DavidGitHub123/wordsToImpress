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

export default function IWords({ navigation }) {
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
              <Text style={style.header}>I Words</Text>
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
                title="Iconoclastic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ignoble"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ignominious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Illicit"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Imbibe"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Imbroglio"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Imbue"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Immaculate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Immolate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Impalpable"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Imparity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Impasse"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Imperative"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Imperceptible"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Imperious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Impertinent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Impetuous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Implicit"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Implore"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Importunate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Impregnable"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Impropriety"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Impugn"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inadvertent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inane"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Incarnate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inception"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Incessant"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inchoate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Incipient"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Incisive"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inclement"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Incognito"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Incorporeal"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Incorrigible"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inculcate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inculpate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Indefatigable"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Indelible"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Indemnify"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Indolent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inebriated"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ineffable"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ineluctable"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inertia"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inexorable"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inexpliable"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Infallible"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Infernal"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ingrate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inherent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inimical"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Innate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Innocuous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Innoculate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inroad"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inscrutable"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Insidious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Insipid"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Insolent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Insubordinate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Insurgence"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Intercession"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Interim"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Intermittent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Intransigent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Intrepid"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Intrinsic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Introspection"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inundate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Invective"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inveigh"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Inveterate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Irascible"
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
