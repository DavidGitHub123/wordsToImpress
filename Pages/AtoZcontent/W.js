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

export default function WWords({ navigation }) {
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
              <Text style={style.header}>W Words</Text>
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
                title="Wallow"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Wanton"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Watershed"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Wayfaring"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Wend"
                destination="Word"
              />
              <NavButtonWord
                navigation={navigation}
                title="Writhe"
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
    paddingBottom: 200,
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
