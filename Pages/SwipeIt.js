import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { mainStyles } from "../components/mainStyles";
import { LinearGradient } from "expo-linear-gradient";
import ListDropdown from "../components/ListDropdown.js";
import AppButton from "../components/AppButton.js";
import { getNLeastMastered } from "../components/listHelpers";
import data from "../data.js";

export default function SwipeIt() {
  const [list, setList] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [error, setError] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameRestart, setGameRestart] = useState(false);

  const getShortDef = (word) => data.find((el) => el.Word === word).Shortdef;

  useEffect(() => {
    async function getAndSetList() {
      if (!selectedList) {
        return;
      }
      let userList = await getNLeastMastered(selectedList, 10);

      if (userList.length === 0) {
        setError(
          `${selectedList} is empty, add some words or use another list`,
        );
        return;
      } else {
        setError(null);
      }
      userList = userList.map((el) => {
        return {
          Word: el.word,
          mastery: el.mastery,
          Shortdef: getShortDef(el.word),
        };
      });

      setList(userList);
    }

    getAndSetList();
  }, [gameRestart, selectedList]);

  const handleSubmit = () => {
    if (!error && selectedList) {
      setIsGameStarted(true);
    }
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
          {isGameStarted ? (
            <SwipeItGame list={list} />
          ) : (
            <View>
              {error && (
                <View style={[mainStyles.error, { marginVertical: 20 }]}>
                  <Text>{error}</Text>
                </View>
              )}
              <Text style={mainStyles.text}>Select list to study</Text>
              <ListDropdown setParent={setSelectedList} />
              <AppButton
                onPress={handleSubmit}
                title="Play Game"
                icon="sign-in"
              />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

function SwipeItGame(Props) {
  const { list } = Props;

  const setInitialBoxes = () =>
    list
      .slice()
      .map((el, i) => {
        if (i % 2 === 0) {
          return { content: el.Word, selected: false };
        } else {
          return { content: el.Shortdef, selected: false };
        }
      })
      .map((el) => ({ data: el, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ data }) => {
        console.log(data);
        return { content: data.content, selected: data.selected };
      });

  const [boxes, setBoxes] = useState(() => setInitialBoxes());

  console.log(boxes);
  console.log(boxes.length);

  const renderBoxes = () =>
    boxes.slice(0, 8).map((el, i) => (
      <View key={i} style={style.box}>
        <Text style={style.smallText}>{el.content}</Text>
      </View>
    ));

  return <View style={style.boxContainer}>{renderBoxes()}</View>;
}

const style = StyleSheet.create({
  boxContainer: {
    marginVertical: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    flexWrap: "wrap",
  },
  box: {
    backgroundColor: "#FF8C00",
    width: 150,
    height: 150,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  smallText: {
    fontSize: 18,
    color: "#f0f8ff",
    fontWeight: "700",
    textAlign: "center",
  },
});
