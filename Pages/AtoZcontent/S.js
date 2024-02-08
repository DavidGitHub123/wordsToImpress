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

export default function SWords({ navigation }) {
  const AppButton = ({ onPress, icon, title }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="#FF8C00"
        borderRadius={40}
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
          colors={["#4682B4", "#6699CC"]}
          start={[0.25, 0.25]}
          opacity={0.95}
        >
          <View style={style.page}>
            <View>
              <Text style={style.header}>S Words</Text>
            </View>

            <View>
              <NavButtonWord
                navigation={navigation}
                title="Salacious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Salient"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Salutary"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sanguine"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sardonic"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Saturnine"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Savoir Faire"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Scapegoat"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Scathing"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Scrutinize"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sequester"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Serendipity"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sine Qua Non"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Skittish"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Smattering"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sobriquet"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Solace"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Solicitious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sophistry"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sordid"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sovereignty"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Spurious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Stalemate"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Stipulation"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Strident"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Stringent"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Stultify"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Stymie"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sublime"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Subservient"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sully"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sumptuous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Sundry"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Supercilious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Superfluous"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Superlative"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Supersede"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Supine"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Surcease"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Surreptitious"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Symbiotic"
                destination="Word"
              />
            </View>

            <View style={style.bottomButtons}>
              <Pressable style={navStyle.appButton}>
                <AppButton
                  title="Back"
                  onPress={() => navigation.goBack()}
                ></AppButton>
              </Pressable>
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
    paddingHorizontal: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },

  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    width: 300,
  },
});
