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

export default function GWords({ navigation }) {
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
              <Text style={style.header}>G Words</Text>
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
                title="Gainsay"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Gallantry"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Galvanize"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Gamut"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Gargantuan"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Garner"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Garrulity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Gauche"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Gaudy"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Gauntlet"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Genial"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Genteel"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Gestation"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Globular"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Goad"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Gormandize"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Gradation"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Graft"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Grandeur"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Grandiloquence"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Grandiose"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Gratuitous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Gregarious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Grimace"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Grope"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Grovel"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Guile"
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
