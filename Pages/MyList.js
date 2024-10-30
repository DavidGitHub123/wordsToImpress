import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButtonWord } from "../components/NavButtonWord";
import { LinearGradient } from "expo-linear-gradient";
import {
  defaultList,
  getList,
  getNamesOfLists,
  removeOneWordFromList,
} from "../components/listHelpers";
import PieChart from "react-native-pie-chart";
import IconButton from "../components/IconButton";
import { mainStyles } from "../components/mainStyles";
import data from "../data";
import { MASTERED_WORD_LIST } from "./ManageLists";
import AppButton from "../components/AppButton";

export default function MyList({ route, navigation }) {
  const [masteredWordCount, setMasteredWordCount] = useState(0);
  const [unMasteredWordCount, setUnMasteredWordCount] = useState(0);
  const [listLength, setListLength] = useState(0);
  const [listOrLoading, setListOrLoading] = useState(null);
  const [masteredWords, setMasteredWords] = useState(null);
  const showMasteredWords = useRef(false);
  const MASTERED_WORD_TITLE = "Mastered words";

  let selectedList = defaultList;
  if (route.params && route.params.listParam) {
    selectedList = route.params.listParam;
    if (selectedList === MASTERED_WORD_LIST) {
      showMasteredWords.current = true;
      selectedList = MASTERED_WORD_TITLE;
    }
  }

  const handleDelete = async (word) => {
    await removeOneWordFromList(selectedList, word);
    await getAndParseList(selectedList);
  };
  async function getAndParseMasterList() {
    const lists = await getNamesOfLists();
    const allListsPromises = lists.map((l) => getList(l));
    const allLists = await Promise.all(allListsPromises);

    const masteredFilteredArray = allLists
      .flat()
      .filter((el) => el.mastery >= 10);
    setMasteredWords([...new Set(masteredFilteredArray)]);
  }

  async function getAndParseList(name) {
    let list;
    if (name === MASTERED_WORD_TITLE) {
      list = await getAndParseMasterList();
    } else {
      list = await getList(name);
    }
    if (!list) {
      return;
    }
    const sortedList = list.sort((a, b) => {
      if (a.mastery >= 10 && b.mastery < 10) {
        return 1;
      } else if (b.mastery >= 10 && a.mastery < 10) {
        return -1;
      }
      return a.word.localeCompare(b.word);
    });

    setListOrLoading(sortedList);

    const amountOfMasteredWords = list.filter((el) => el.mastery >= 10).length;
    setMasteredWordCount(amountOfMasteredWords);
    setUnMasteredWordCount(list.length - amountOfMasteredWords);
    setListLength(list.length);
  }

  useEffect(() => {
    const asyncWrapper = async () => {
      if (selectedList) {
        await getAndParseList(selectedList);
        await getAndParseMasterList();
        return;
      }
    };
    asyncWrapper();
  }, []);

  const masteredWordLengthOrZero = masteredWords ? masteredWords.length : 0;
  const masteredDonutSeries = [
    masteredWordLengthOrZero,
    data.length - masteredWordLengthOrZero,
  ];

  const unMasteredDonutSeries = [
    masteredWordCount,
    unMasteredWordCount === 0 && masteredWordCount === 0
      ? 1
      : unMasteredWordCount,
  ];

  const donutSeries = showMasteredWords.current
    ? masteredDonutSeries
    : unMasteredDonutSeries;
  const GREEN_PERCENT = 0.7;
  const donutColor =
    GREEN_PERCENT <= masteredWordCount / listLength
      ? { highlight: "#4cf03a", base: "#5ba653" }
      : { highlight: "#ffbb00", base: "#cc9600" };

  const percentText = showMasteredWords.current
    ? masteredWordLengthOrZero / data.length
    : masteredWordCount / listLength;
  const formattedPercentText = isNaN(percentText)
    ? "0"
    : (percentText * 100).toFixed(0);

  const renderList = () => {
    const selectedList = showMasteredWords.current
      ? masteredWords
      : listOrLoading;

    if (selectedList === null) {
      return [
        <Text key={0} style={mainStyles.text}>
          Loading...
        </Text>,
      ];
    }

    return selectedList.map((el, i) => (
      <View key={i} style={style.wordDeleteContainer}>
        <NavButtonWord
          navigation={navigation}
          title={el.word}
          destination="Word"
          backgroundColor={el.mastery >= 10 ? "#5ba653" : null}
        />
        {!showMasteredWords.current && (
          <IconButton
            name="trash"
            onPress={() => handleDelete(el.word)}
            style={style.deleteButton}
          />
        )}
      </View>
    ));
  };

  return (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={mainStyles.page}
    >
      <SafeAreaView>
        <ScrollView alwaysBounceHorizontal={true}>
          <View style={mainStyles.screen}>
            <View>
              <Text style={mainStyles.header}>My Mastery</Text>
              <Text style={mainStyles.subText}>
                In games and quizzes, once correctly identified 10 times, a word
                moves into your Mastered List. Only words you have not mastered
                appear in games and quizzes for more efficient learning.
              </Text>
            </View>
          </View>
          <View style={style.donutContainer}>
            <Text style={style.percentText}>{formattedPercentText}%</Text>
            {
              <PieChart
                style={style.donut}
                widthAndHeight={180}
                series={donutSeries}
                sliceColor={[donutColor.highlight, donutColor.base]}
                coverRadius={0.8}
              />
            }
          </View>

          <Text style={[mainStyles.text, { marginHorizontal: "auto" }]}>
            {selectedList}
          </Text>
          <View style={mainStyles.section}>{renderList()}</View>

          <View style={style.buttons}>
            <AppButton
              viewStyle={{ margin: "auto" }}
              title="Back"
              onPress={() => navigation.goBack()}
            />
            <HomeButton navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  donut: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 10,
    left: 10,
  },
  donutContainer: {
    width: 200,
    height: 200,
    position: "relative",
    margin: "auto",
  },
  wordDeleteContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: 270,
    marginLeft: 70,
  },
  percentText: {
    color: "#4cf03a",
    fontSize: 50,
    fontWeight: "600",
    marginHorizontal: "auto",
    marginTop: 70,
  },
});
