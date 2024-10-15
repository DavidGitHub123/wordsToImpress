import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeButton from "../components/HomeButton";
import { NavButtonWord } from "../components/NavButtonWord";
import { LinearGradient } from "expo-linear-gradient";
import {
  defaultList,
  getList,
  removeOneWordFromList,
} from "../components/listHelpers";
import PieChart from "react-native-pie-chart";
import IconButton from "../components/IconButton";
import { mainStyles } from "../components/mainStyles";
import ListDropdown from "../components/ListDropdown";

export default function MyList({ navigation }) {
  const [masteredWordCount, setMasteredWordCount] = useState(0);
  const [unMasteredWordCount, setUnMasteredWordCount] = useState(0);
  const [listLength, setListLength] = useState(0);
  const [listOrLoading, setListOrLoading] = useState(null);

  const handleDelete = async (word) => {
    await removeOneWordFromList(defaultList, word);
    await getAndParseList();
  };

  async function getAndParseList(name = defaultList) {
    const list = await getList(name);
    if (list === null) {
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
      await getAndParseList();
    };
    asyncWrapper();
  }, []);

  const donutSeries = [
    masteredWordCount,
    unMasteredWordCount === 0 ? 1 : unMasteredWordCount,
  ];
  const GREEN_PERCENT = 0.7;
  const donutColor =
    GREEN_PERCENT <= masteredWordCount / listLength
      ? { highlight: "#4cf03a", base: "#5ba653" }
      : { highlight: "#ffbb00", base: "#cc9600" };

  const percentText = masteredWordCount / listLength;
  const formattedPercentText = isNaN(percentText)
    ? "0"
    : (percentText * 100).toFixed(0);

  const renderList = () => {
    if (listOrLoading === null) {
      return [
        <Text key={0} style={mainStyles.text}>
          Loading...
        </Text>,
      ];
    }

    return listOrLoading.map((el, i) => (
      <View key={i} style={style.wordDeleteContainer}>
        <NavButtonWord
          navigation={navigation}
          title={el.word}
          destination="Word"
          backgroundColor={el.mastery >= 10 ? "#5ba653" : null}
        />
        <IconButton
          name="trash"
          onPress={() => handleDelete(el.word)}
          style={style.deleteButton}
        />
      </View>
    ));
  };

  const testFunc = (name = ":c") => console.log(name);

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
            </View>
            <View style={style.donutContainer}>
              <Text style={style.percentText}>{formattedPercentText}%</Text>
              {
                <PieChart
                  style={style.donut}
                  widthAndHeight={200}
                  series={donutSeries}
                  sliceColor={[donutColor.highlight, donutColor.base]}
                  coverRadius={0.8}
                />
              }
            </View>
          </View>

          <ListDropdown setParent={getAndParseList} />
          <Text style={style.donutText}>
            {masteredWordCount}/{listLength}
          </Text>

          <View style={mainStyles.section}>{renderList()}</View>

          <View style={style.buttons}>
            <HomeButton style={style.homebutton} navigation={navigation} />
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
    top: 0,
    left: 0,
  },

  donutText: {
    lineHeight: 50,
    verticalAlign: "middle",
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
  },

  donutContainer: {
    width: 200,
    height: 200,
    position: "relative",
    margin: "auto",
  },

  mylistheader: {
    margin: "auto",
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingTop: 40,
  },

  buttons: {
    paddingTop: 30,
    paddingBottom: 10,
  },

  homebutton: {
    paddingBottom: 40,
  },

  wordDeleteContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  percentText: {
    color: "#4cf03a",
    fontSize: 60,
    fontWeight: "600",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
  },
});
