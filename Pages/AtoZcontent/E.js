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

export default function EWords({ navigation }) {
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
              <Text style={style.header}>E Words</Text>
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
                title="Ebullience"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Eccentric"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Echelon"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Eclectic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Educe"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Effete"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Efflorescent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Effrontery"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Effulgent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Egalitarian"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Egocentric"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Egregious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Eke"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Elicit"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Elocution"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Eloquent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Elucidate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Elusive"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Emanate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Emancipate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Embellish"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Embodiment"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Eminence"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Emissary"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Empathize"
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
                title="Encomium"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Endemic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Enervate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Enigmatic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="En Masse"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Enmity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ennui"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Enshrine"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Enthrall"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Entity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Enunciate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Envisage"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Epicure"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Equanimity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Equivocal"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Eradicate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Erratic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ersatz"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Erudite"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Esoteric"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Espouse"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Estrange"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Etymology"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Euphemism"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Euphony"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Evasive"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Evince"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Eviscerate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Evoke"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Exacerbate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Excoriate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Exculpate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Exigency"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Expeditious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Expletive"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Extenuate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Extrapolate"
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
