import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";

export default function Notifications({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 0.25 }}
          opacity={1.0}
          style={style.page}
        >
          <View>
            <Text style={style.header}>Notifications</Text>
          </View>
          <View style={style.section}>
            <View>
              <NavButton
                navigation={navigation}
                title="Schedule Word of the Day"
                destination="A"
              />
              <Text>Select Time: 12:34 am/pm Timezone</Text>
            </View>
            <View>
              <NavButton
                navigation={navigation}
                title="Schedule Word Reminders"
                destination="A"
              />
              <Text>Select as many Word Mastery notification as you like.</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
            </View>
            <View>
              <NavButton
                navigation={navigation}
                title="Schedule Word Mastery Challenges"
                destination="A"
              />
              <Text>Select Time: 12:34 am/pm Timezone</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
              <Text>Select Time: 12:34 am/pm Timezone</Text>
            </View>
          </View>
          <View>
            <HomeButton navigation={navigation} />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#000",
    paddingBottom: 100,
  },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingTop: 40,
    textAlign: "center",
  },

  image: {
    // opacity: .5,
  },

  section: {
    paddingVertical: 30,
  },

  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },

  appButtonContainer: {
    width: 270,
    opacity: 0.75,
    marginVertical: 2,
  },

  bottomButtons: {
    paddingTop: 20,
  },
});
