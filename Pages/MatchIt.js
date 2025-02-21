import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Modal,
} from "react-native";
import { mainStyles } from "../components/mainStyles";
import { LinearGradient } from "expo-linear-gradient";
import ListDropdown from "../components/ListDropdown.js";
import AppButton from "../components/AppButton.js";
import { getNLeastMastered } from "../components/listHelpers";
import data from "../data.js";
import HomeButton from "../components/HomeButton.js";

export default function SwipeIt({ navigation }) {
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
        {isGameStarted ? (
          <SwipeItGame
            list={list}
            navigation={navigation}
            setGameRestart={setGameRestart}
            gameRestart={gameRestart}
          />
        ) : (
          <View style={[mainStyles.startGameContainer, mainStyles.screen]}>
            <Text style={mainStyles.header}>Match It</Text>
            <Text style={mainStyles.subheader}>
              Find pairs and try to clear the screen as fast as possible.
            </Text>
            {error && (
              <View style={[mainStyles.error, { marginVertical: 20 }]}>
                <Text>{error}</Text>
              </View>
            )}
            {!selectedList && <Text style={mainStyles.text}>Loading</Text>}
            <ListDropdown setParent={setSelectedList} />
            <AppButton
              onPress={handleSubmit}
              title="Play Game"
              icon="sign-in"
            />
            <View>
              {error && (
                <View style={[mainStyles.error, { marginVertical: 20 }]}>
                  <Text>{error}</Text>
                </View>
              )}
            </View>
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

function SwipeItGame(Props) {
  const { list, navigation, gameRestart, setGameRestart } = Props;

  const DISPLAYED_VALUE = 4;

  // This function seperates randomizes 4 sets of questions and anwsers.
  // this ensures that there is always a valid question anwser set on the screen
  const setInitialBoxes = () => {
    const splitArrays = Array.from(
      { length: Math.ceil(list.length / DISPLAYED_VALUE) },
      (_, i) =>
        list.slice(i * DISPLAYED_VALUE, i * DISPLAYED_VALUE + DISPLAYED_VALUE),
    );

    return splitArrays
      .map((arr) =>
        arr
          .map((el) => [
            { content: el.Word, answer: el.Shortdef },
            { content: el.Shortdef, answer: el.Word },
          ])
          .flat()
          .map((el) => ({ data: el, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ data }) => {
            return { content: data.content, answer: data.answer };
          }),
      )
      .flat();
  };

  const [boxes, setBoxes] = useState(() => setInitialBoxes());
  const [selectedBox, setSelectedBox] = useState(-1);
  const [totalScore, setTotalScore] = useState(0);
  const [roundScore, setRoundScore] = useState(1000);
  const [showResults, setShowResults] = useState(false);
  const timerID = useRef(-1);

  useEffect(() => {
    timerID.current = setInterval(() => {
      setRoundScore((prev) => (prev <= 50 ? prev : prev - 50));
    }, 500);
  }, [totalScore]);

  const handleSelected = (index) => {
    if (selectedBox === -1) {
      setSelectedBox(index);
      return;
    }

    if (boxes[index].answer === boxes[selectedBox].content) {
      clearTimeout(timerID.current);
      if (boxes.length === 2) {
        setShowResults(true);
      }

      //Handle Score
      setTotalScore((prev) => prev + roundScore);
      setRoundScore(1000);

      // Remove question/anwser
      const filters = [boxes[index].content, boxes[selectedBox].content];
      setBoxes((prev) => {
        return prev.filter((el) => !filters.includes(el.content));
      });
    }

    setSelectedBox(-1);
  };

  const restartGame = () => {
    setGameRestart(!gameRestart);
    setTotalScore(0);
    setRoundScore(1000);
    setSelectedBox(-1);
    setBoxes(setInitialBoxes());
    setShowResults(false);
    clearTimeout(timerID.current);
  };

  const renderBoxes = () =>
    boxes.slice(0, DISPLAYED_VALUE * 2).map((el, i) => (
      <TouchableHighlight key={i} onPress={() => handleSelected(i)}>
        <View style={selectedBox === i ? style.selectedBox : style.box}>
          <Text style={style.smallText}>{el.content}</Text>
        </View>
      </TouchableHighlight>
    ));

  return (
    <View>
      {!showResults && (
        <View style={style.pointContainer}>
          <Text style={mainStyles.text}>Score {totalScore}</Text>
          <Text style={mainStyles.text}>Points {roundScore}</Text>
        </View>
      )}
      <View style={style.boxContainer}>{renderBoxes()}</View>

      <Modal visible={showResults} transparent={true}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View>
              <Text style={[mainStyles.text, { marginHorizontal: "auto" }]}>
                Score: {totalScore}
              </Text>
              <AppButton title="Play Again" onPress={() => restartGame()} />
              <HomeButton navigation={navigation} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#282a36",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  pointContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  boxContainer: {
    marginVertical: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 2,
    flexWrap: "wrap",
    paddingVertical: "10%",
  },
  selectedBox: {
    backgroundColor: "#c76f04",
    width: 160,
    height: 160,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#FF8C00",
    width: 160,
    height: 160,
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
