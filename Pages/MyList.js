import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import { NavButtonWord } from "../components/NavButtonWord";
import { LinearGradient } from "expo-linear-gradient";
import {
  defaultList,
  getList,
  makeNewList,
  removeList,
} from "../components/listHelpers";
import { useState, useEffect } from "react";
// import { onSnapshot } from "firebase/firestore" -- firebase database

export default function MyList({ navigation }) {
  const [listOrLoading, setListOrLoading] = useState([
    <Text key={0}>Loading...</Text>,
  ]);

  const makeMyListIfItDoesNotExist = async () => {
    if (!(await doesMyListExist())) {
      console.log("^_^");
      await makeNewList(defaultList);
    }
  };

  const doesMyListExist = async () => (await getList(defaultList)) !== null;

  useEffect(() => {
    async function getAndParseList() {
      //TODO: move this to an init file that runs on boot
      if (false) {
        await removeList(defaultList);
      }
      await makeMyListIfItDoesNotExist();

      console.log(await getList(defaultList));
      const list = JSON.parse(await getList(defaultList));
      console.log(list.length);
      console.log(typeof list);
      if (list === null || list.length === 0) {
        return;
      }
      const parsedList = list.map((el, i) => (
        <View key={i}>
          <NavButtonWord
            navigation={navigation}
            title={el.word}
            destination="Word"
          />
          <Text>{el.mastery}/5</Text>
          <Text>{el.mastery >= 5 ? "Mastered" : "Not Quite Mastered"}</Text>
        </View>
      ));
      setListOrLoading(parsedList);
    }

    getAndParseList();
  }, []);
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
            <Text style={style.header}>My List</Text>
          </View>

          <View>
            <Text style={style.text}>Circle/XX% Mastery</Text>
          </View>

          <View>
            <Text style={style.textOrange}>Mastered Words (x/50)</Text>
            <Text style={style.textYellow}>Unmastered Words (x/50)</Text>
          </View>

          {/* Once word has been answered correctly 10 times, put in mastery category */}
          {/* Once 50 words are in mastered category, congratulations. 
      Button to start new list of 50 appears on this page.
      Button simply takes them to AtoZ page.
      From this point, now button to see previous list of 50 appears. */}

          <View style={style.section}>{listOrLoading.map((el) => el)}</View>

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
