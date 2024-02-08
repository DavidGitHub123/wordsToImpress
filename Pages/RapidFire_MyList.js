import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import { NavButtonWord } from "../components/NavButtonWord";
import { LinearGradient } from "expo-linear-gradient";
// import { onSnapshot } from "firebase/firestore" -- firebase database

export default function RapidFire_MyListMyList({ navigation }) {
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
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        {/* <ImageBackground source={blue3} imageStyle={style.image} resizeMode="cover" style={style.page}> */}
        <LinearGradient
          colors={["#335C81", "#6699FF"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.5, y: 0.25 }}
          opacity={0.95}
          style={style.page}
        >
          <View>
            <Text style={style.header}>RapidFire My List</Text>
          </View>

          <View>
            <Text style={style.text}>Circle/XX% Mastery</Text>
          </View>

          <View>
            <Text style={style.textOrange}>Mastered Words (x/50)</Text>
            <Text style={style.textYellow}>Unmastered Words (x/50)</Text>
          </View>

          <View>
            <Text style={style.text}>
              After word has been correctly identified 10 times, word is moved
              into your mastery category. Master all words in your list, begin a
              new list of 50 words.
            </Text>
            <Text style={style.textYellow}>Unmastered Words (x/50)</Text>
          </View>

          {/* Once word has been answered correctly 10 times, put in mastery category and word appears in Orange*/}
          {/* Once 50 words are in mastered category, congratulations. 
      Button to start new list of 50 appears on this page.
      Button simply takes them to AtoZ page.
      From this point, now button to see previous list of 50 appears. */}

          <View style={style.section}>
            <NavButtonWord
              navigation={navigation}
              title="Abate"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Abate"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Abate"
              destination="Word"
            />
            <NavButtonWord
              navigation={navigation}
              title="Abate"
              destination="Word"
            />
          </View>

          <View style={style.buttons}>
            {/* <NavButton navigation={navigation} title="1st List of 50" destination=""/> */}
            <NavButton
              navigation={navigation}
              title="Vocab Mastery"
              destination="VocabMastery"
            />
            <NavButton
              navigation={navigation}
              title="A-Z Words"
              destination="AtoZButtons"
            />
            <HomeButton navigation={navigation} />
          </View>

          {/* </ImageBackground> */}
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
    paddingBottom: 300,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  header: {
    fontSize: 30,
    color: "#f0f8ff",
    fontWeight: "800",
  },

  text: {
    fontSize: 24,
    color: "#f0f8ff",
    fontWeight: "600",
  },

  textYellow: {
    fontSize: 24,
    color: "yellow",
    fontWeight: "600",
  },

  textOrange: {
    fontSize: 24,
    color: "orange",
    fontWeight: "600",
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
    width: 250,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
});
