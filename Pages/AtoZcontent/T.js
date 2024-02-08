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

export default function TWords({ navigation }) {
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
              <Text style={style.header}>T Words</Text>
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
