import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from "../../components/HomeButton";
import { NavButtonWord } from "../../components/NavButtonWord";
import { navStyle } from "../../components/NavButton.js";

export default function RWords({ navigation }) {
  const AppButton = ({ onPress, icon, title }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="#4682B4"
        borderRadius={20}
        borderWidth={3}
        borderColor="#BBC2CC"
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

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
              <Text style={style.header}>R Words</Text>
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
                title="Ramification"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Rankle"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Rapport"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Rapprochement"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Rarefied"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ravenous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Reapportionment"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Recalcitrant"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Recant"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Recapitulate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Reciprocate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Recompense"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Reconcile"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Reconnoiter"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Rectify"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Recumbent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Redundant"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Refurbish"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Relentless"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Relevance"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Relinquish"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Remunerate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Renege"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Renounce"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Replete"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Replicate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Reprehensible"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Reprobate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Reprieve"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Reproach"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Reprobate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Reprove"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Repudiate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Repugnance"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Requisite"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Rescind"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Resolute"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Resonate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Resplendent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Restive"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Resurgence"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Resurrect"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Reticent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Retribution"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Retroactive"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Retrospect"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Revamp"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Revile"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Rhetoric"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ribald"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Rubicon"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Rueful"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Ruminate"
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
