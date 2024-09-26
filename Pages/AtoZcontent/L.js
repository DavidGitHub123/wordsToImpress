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

export default function LWords({ navigation }) {
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
              <Text style={style.header}>L Words</Text>
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
                title="Laconic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Laggard"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Lambaste"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Lamentation"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Languid"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Largess"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Latent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Laudatory"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Laureate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Lethargic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Levity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Liaison"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Libation"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Litany"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Litigious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Livid"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Logistics"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Loquacious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Lothario"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Lucid"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ludicrous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="KeynotLurid"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Lustrous"
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
