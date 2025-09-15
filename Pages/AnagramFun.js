import React, { useState, useEffect, useRef } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import data from "../data.js";
import { mainStyles } from "../components/mainStyles.js";
import ListDropdown from "../components/ListDropdown.js";

export default function AnagramFun() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [error, setError] = useState(null);

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

  return isGameStarted ? (
    <AnagramGame list={list} />
  ) : (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      opacity={1.0}
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View style={[mainStyles.startGameContainer, mainStyles.screen]}>
            <Text style={mainStyles.header}>Anagram Fun</Text>
            <Text style={mainStyles.subheader}>
              Fix the jumbled word to increase your mastery
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

function AnagramGame(Props) {
  const { list } = Props;

  const generateLetterKey = () => {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    const alphabetTwo = alphabet.slice().sort(() => 0.5 - Math.random());

    const letterKey = {};
    while (alphabet.length) {
      const letterOne = alphabet.pop();
      const letterTwo =
        alphabetTwo[0] == letterOne ? alphabetTwo.pop() : alphabetTwo.shift();

      letterKey[letterOne] = letterTwo;
    }

    //Check to make sure there are no matches in key value pairs
    for (const letter in letterKey) {
      if (letter === letterKey[letter]) {
        generateLetterKey();
      }
    }

    return letterKey;
  };

  const formatChoseWordRef = () => {
    const randomWord = list[Math.floor(Math.random() * list.length)];
    randomWord.FormattedShortdef = randomWord.Shortdef.toLowerCase().replace(
      /[^a-z ]/g,
      "",
    );
    randomWord.uniqueLetters = new Set([
      ...randomWord.FormattedShortdef.replace(/\s/, ""),
    ]).size;
    return randomWord;
  };

  const [shownLetters, setShownLetters] = useState([]);
  const [selectedLetterAndIndex, setSelectedLetterAndIndex] = useState({
    letter: null,
    index: -1,
  });

  const letterKeyRef = useRef(generateLetterKey());
  const chosenWordRef = useRef(formatChoseWordRef());

  const handleBlankPress = (letter, index) =>
    setSelectedLetterAndIndex({ letter, index });

  const handleLetterButtonPress = (letter) => {
    if (letterKeyRef.current[letter] === selectedLetterAndIndex.letter) {
      if (shownLetters.length === chosenWordRef.current.uniqueLetters) {
        console.log("you win!!");
      }
      setShownLetters((prev) => {
        if (prev.includes(letter)) {
          return prev;
        }
        prev.push(letter);
        return [...prev];
      });
    }
  };

  const renderBlanksAndLetter = () =>
    chosenWordRef.current.FormattedShortdef.split("").map((el, i) => (
      <Pressable
        key={i}
        onPress={() => handleBlankPress(letterKeyRef.current[el], i)}
      >
        <View style={style.verticalPadding}>
          <Text style={[mainStyles.text, { textAlign: "center" }]}>
            {shownLetters.includes(el) ? el : ""}
          </Text>

          {el !== " " && (
            <View
              style={
                selectedLetterAndIndex.index === i
                  ? style.selectedUnderline
                  : style.underline
              }
            />
          )}
          <Text style={[mainStyles.text, { textAlign: "center" }]}>
            {letterKeyRef.current[el]}
          </Text>
        </View>
      </Pressable>
    ));

  const renderLetterButtons = () =>
    [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]
      .filter((el) => !shownLetters.includes(el))
      .map((el, i) => (
        <AppButton
          key={i}
          height={60}
          width={60}
          viewStyle={style.appButtonView}
          style={style.appButtonStyle}
          title={el}
          onPress={() => handleLetterButtonPress(el)}
        />
      ));

  return (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={style.flexOne}
    >
      <View style={style.underlineLetterContainer}>
        {renderBlanksAndLetter()}
      </View>

      <View style={style.letterButtonContainer}>{renderLetterButtons()}</View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  letterButtonContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    justifyContent: "space-evenly",
    paddingTop: 100,
  },
  flexOne: {
    flex: 1,
  },
  underlineLetterContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    paddingTop: 100,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  underline: {
    borderBottomColor: "black",
    borderBottomWidth: 5,
    width: 20,
  },
  selectedUnderline: {
    borderBottomColor: "white",
    borderBottomWidth: 5,
    width: 20,
  },

  appButtonView: {
    height: 50,
    width: 50,
  },

  appButtonStyle: {
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  verticalPadding: {
    paddingVertical: 20,
  },
});
