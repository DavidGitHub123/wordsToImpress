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

export default function MyList({ navigation }) {
  const [masteredWordCount, setMasteredWordCount] = useState(0);
  const [unMasteredWordCount, setUnMasteredWordCount] = useState(0);
  const [listLength, setListLength] = useState(0);

  const handleDelete = async (word) => {
    await removeOneWordFromList(defaultList, word);
    await getAndParseList();
  };

  const [listOrLoading, setListOrLoading] = useState([
    <Text key={0} style={mainStyles.text}>
      Loading...
    </Text>,
  ]);

  async function getAndParseList() {
    const list = await getList(defaultList);
    if (list === null) {
      return;
    } else if (list.length === 0) {
      setListLength(0);
      setListOrLoading(
        <Text style={{ ...mainStyles.text, ...style.textAlignCenter }} key={0}>
          No words in your list, go add some to see them here
        </Text>,
      );
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
          <View>
            <Text style={mainStyles.header}>My Mastery</Text>
          </View>
          <View style={style.donutContainer}>
            <Text style={style.percentText}>
              {(masteredWordCount / listLength).toFixed(2)}%
            </Text>
            <Text style={style.donutText}>
              {masteredWordCount}/{listLength}
            </Text>
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

          <Text style={style.mylistheader}>My List</Text>

          <View style={mainStyles.section}>{listOrLoading}</View>

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
    fontSize: 40,
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
    fontSize: 35,
    fontWeight: "600",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
  },
});
