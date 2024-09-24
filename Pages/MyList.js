import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import { NavButtonWord } from "../components/NavButtonWord";
import { LinearGradient } from "expo-linear-gradient";
import {
  defaultList,
  getList,
  removeOneWordFromList,
} from "../components/listHelpers";
import PieChart from "react-native-pie-chart";
import IconButton from "../components/IconButton";

export default function MyList({ navigation }) {
  const [masteredWordCount, setMasteredWordCount] = useState(0);
  const [unMasteredWordCount, setUnMasteredWordCount] = useState(0);
  const [listLength, setListLength] = useState(0);

  const handleDelete = async (word) => {
    await removeOneWordFromList(defaultList, word);
    await getAndParseList();
  };

  const [listOrLoading, setListOrLoading] = useState([
    <Text key={0}>Loading...</Text>,
  ]);

  async function getAndParseList() {
    const list = await getList(defaultList);
    if (list === null || list.length === 0) {
      return;
    }
    const parsedList = list.map((el, i) => (
      <View key={i} style={style.wordDeleteContainer}>
        <NavButtonWord
          navigation={navigation}
          title={el.word}
          destination="Word"
        />
        <IconButton
          name="trash"
          onPress={() => handleDelete(el.word)}
          style={style.deleteButton}
        />
      </View>
    ));
    setListOrLoading(parsedList);

    const amountOfMasteredWords = list.filter((el) => el.mastery >= 5).length;
    setMasteredWordCount(amountOfMasteredWords);
    setUnMasteredWordCount(list.length - amountOfMasteredWords);
    setListLength(list.length);
  }

  useEffect(() => {
    getAndParseList();
  }, []);
  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#6699FF", "#335C81"]}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 0.5 }}
          opacity={1.0}
          style={style.page}
        >
          <View>
            <Text style={style.header}>My List</Text>
          </View>
          <View style={style.donutContainer}>
            <Text style={style.donutText}>
              {masteredWordCount}/{listLength} mastered
            </Text>
            {masteredWordCount === 0 && listLength === 0 ? null : (
              <PieChart
                style={style.donut}
                widthAndHeight={200}
                series={[masteredWordCount, unMasteredWordCount]}
                sliceColor={["#4cf03a", "#5ba653"]}
                coverRadius={0.8}
              />
            )}
          </View>

          <View style={style.buttons}>
            <HomeButton navigation={navigation} />
            <NavButton
              navigation={navigation}
              title="Vocab Mastery"
              destination="VocabMastery"
            />
            {/* <NavButton
              navigation={navigation}
              title="A-Z Words"
              destination="AtoZButtons"
            /> */}
          </View>

          <View style={style.section}>{listOrLoading}</View>


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
    paddingBottom: 100,
    paddingTop: 100,
  },

  donut: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  donutText: {
    lineHeight: 200,
    verticalAlign: "middle",
    color: "#fff",
    textAlign: "center",
  },

  donutContainer: {
    width: 200,
    height: 200,
    position: "relative",
  },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: "2vh",
  },

  buttons: {
    paddingTop: 20,
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

  wordDeleteContainer: {
    width: "2000",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    marginLeft: 5,
  },
});
