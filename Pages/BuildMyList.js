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
// import { LinearGradient } from "expo-linear-gradient";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import blue7 from "../assets/blue7.jpg";

export default function BuildMyList({ navigation }) {
  /*
  const AppButton = ({ onPress, icon, title }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor='#FF8C00'
        borderRadius={40}
        borderWidth={3}
        borderColor='#BBC2CC'
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );
  */

  return (
    <SafeAreaView style={style.page}>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={blue7}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          
        {/* <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 0.25 }}
          opacity={1.0}
          style={style.page}
        > */}

          <View style={style.screen}>
            <Text style={style.header}>Build My List</Text>
            <Text style={style.text}>
              Copy emails, proposals, letters, etc. and let our
              tools analyze your communication patterns to suggest new
              vocabulary words that correspond to your speaking and writing style.
            </Text>
          </View>

          <View style={style.buttonSpace}>
              <NavButton
                navigation={navigation}
                title="Text Search"
                destination="TextSearch"
              />
            </View>

          {/* <View style={style.section}>
            <Text style={style.subHead}>From Your Speech</Text>
            <Text style={style.text}>
              Record your conversations and let our AI tools suggest new
              vocabulary words that correspond to your speaking style and
              context.
            </Text>
            <View style={style.buttonSpace}>
              <NavButton
                navigation={navigation}
                title="Conversation Search"
                destination="ConversationSearch"
              />
            </View>
          </View> */}

          <View>
            <HomeButton navigation={navigation} />
          </View>

   
          {/* </LinearGradient> */}

        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 400,
  },

  // screen: {
  //   opacity: .7,
  //   backgroundColor: "#4682B4",
  //   marginBottom: 50,
  //   paddingBottom: 20,
  // },

  header: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "800",
    paddingTop: 60,
    textAlign: "center",
  },

  // subHead: {
  //   fontSize: 30,
  //   color: "#FF8C00",
  //   fontWeight: "600",
  //   paddingVertical: 20,
  // },

  text: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "600",
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 40,
    marginRight: 30,
  },

  buttonSpace: {
    paddingVertical: 10,
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
    paddingVertical: 5,
    width: 300,
  },
});
