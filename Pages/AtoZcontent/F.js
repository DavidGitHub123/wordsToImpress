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

export default function FWords({ navigation }) {
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
              <Text style={style.header}>F Words</Text>
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
                title="Fabulist"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Facet"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Facetious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fait Accompli"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fallacious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fastidious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fatuous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fealty"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Febrile"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Feckless"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Felcity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Feral"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fervent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fetid"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fiasco"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fiat"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fidelity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Flaunt"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fledgling"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Flippant"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Flout"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Flux"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Foible"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Foist"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Foray"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Formidable"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fractious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fratricide"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Frivolity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fruition"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Fulminate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Funereal"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Furtive"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Futility"
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
