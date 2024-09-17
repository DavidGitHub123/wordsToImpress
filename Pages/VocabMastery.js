import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import blue5 from "../assets/blue5.jpg";

export default function VocabMastery({ navigation }) {
  /*
  const AppButton = ({ onPress, icon, title, backgroundColor }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor={backgroundColor}
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );
  */
  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={blue5}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>Vocab Mastery</Text>
          </View>

          <View style={style.section}>
            {/* <NavButton
              navigation={navigation}
              title="StackIt"
              destination="StackIt"
            /> */}
            <NavButton
              navigation={navigation}
              title="RapidFire"
              destination="RapidFire"
            />
            <NavButton
              navigation={navigation}
              title="QuickMatch"
              destination="QuickMatch"
            />
          </View>

          <View style={style.section}>
            <NavButton
              navigation={navigation}
              title="Schedule Quizzes"
              destination="ScheduleQuizzes"
            />
            {/* <NavButton
              navigation={navigation}
              title="Challenge A Friend"
              destination="ChallengeFriend"
            /> */}
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
    paddingTop: 50,
    paddingBottom: 600,
  },

  // image: {
  //   opacity: .5,
  // },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    textAlign: "center",
    paddingBottom: 20,
  },

  section: {
    paddingVertical: 10,
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
