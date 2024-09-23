import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import blue4 from "../assets/blue4.jpg";

export default function WordSituations({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={blue4}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>Word Situations</Text>
          </View>

          <View style={style.section}>
            <NavButton
              navigation={navigation}
              title="Boss"
              destination="WS_Boss"
            />
            <NavButton
              navigation={navigation}
              title="Business"
              destination="WS_Business"
            />
            <NavButton
              navigation={navigation}
              title="Dinner Party"
              destination="WS_DinnerParty"
            />
            <NavButton
              navigation={navigation}
              title="GettingRaise"
              destination="WS_GettingRaise"
            />
            <NavButton
              navigation={navigation}
              title="In Court"
              destination="WS_InCourt"
            />
            <NavButton
              navigation={navigation}
              title="Job Interview"
              destination="WS_JobInterview"
            />
            <NavButton
              navigation={navigation}
              title="Meeting Inlaws"
              destination="WS_MeetingInLaws"
            />
            <NavButton
              navigation={navigation}
              title="Negotiations"
              destination="WS_Negotiations"
            />
            <NavButton
              navigation={navigation}
              title="Politics"
              destination="WS_Politics"
            />
            <NavButton
              navigation={navigation}
              title="Speeding Ticket"
              destination="WS_SpeedingTicket"
            />
          </View>

          <View>
            <HomeButton navigation={navigation} />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: '#000',
    paddingTop: 30,
    paddingBottom: 100,
  },

  // image: {
  //   opacity: .5,
  // },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: 10,
    textAlign: "center",
  },

  section: {
    paddingVertical: 30,
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
