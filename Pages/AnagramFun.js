import React, { useState, useEffect, useRef } from "react";
import {
  Pressable,
  Modal,
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

export default function AnagramFun({ navigation }) {
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
    <AnagramGame
      list={list}
      setGameRestart={setGameRestart}
      gameRestart={gameRestart}
    />
  ) : (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
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
  const { list, gameRestart, setGameRestart } = Props;

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
      ...randomWord.FormattedShortdef.replace(/\s/gm, ""),
    ]).size;
    return randomWord;
  };

  const shuffleString = (str) =>
    [...str].sort(() => Math.random() - 0.5).join("");

  const initShownLetters = () => {
    const letters = chosenWordRef.current.FormattedShortdef.replace(
      /[^a-z]/gm,
      "",
    );

    const uniqueLetters = String.prototype.concat.call(...new Set(letters));
    const uniqueVowels = uniqueLetters.replace(/[^aeiouy]/gm, "");
    const uniqueConst = uniqueLetters.replace(/[aeiouy]/gm, "");
    const randomizedVowels = shuffleString(uniqueVowels);
    const randomizedConst = shuffleString(uniqueConst);

    return [randomizedVowels[0], ...randomizedConst.slice(0, 4)];
  };

  const letterKeyRef = useRef(generateLetterKey());
  const chosenWordRef = useRef(formatChoseWordRef());

  const [showModal, setShowModal] = useState(false);
  const [shownLetters, setShownLetters] = useState(initShownLetters());
  const [selectedLetterAndIndex, setSelectedLetterAndIndex] = useState({
    letter:
      letterKeyRef.current[
      chosenWordRef.current.FormattedShortdef.split("")[0]
      ],
    index: 0,
  });

  const handleBlankPress = (letter, index) =>
    setSelectedLetterAndIndex({ letter, index });

  const incrementSelection = () =>
    setSelectedLetterAndIndex((prev) => {
      return {
        letter:
          letterKeyRef.current[
          chosenWordRef.current.FormattedShortdef.split("")[prev.index + 1]
          ],
        index: prev.index + 1,
      };
    });

  const handleLetterButtonPress = (letter) => {
    if (letterKeyRef.current[letter] === selectedLetterAndIndex.letter) {
      // Current letter hasnt been added to length yet so add one
      if (shownLetters.length + 1 === chosenWordRef.current.uniqueLetters) {
        setShowModal(true);
      }
      incrementSelection();
      setShownLetters((prev) => {
        if (prev.includes(letter)) {
          return prev;
        }
        prev.push(letter);
        return [...prev];
      });
    }
  };

  const handlePlayAgain = () => {
    setShownLetters([]);
    setSelectedLetterAndIndex({
      letter: null,
      index: 0,
    });
    letterKeyRef.current = generateLetterKey();
    chosenWordRef.current = formatChoseWordRef();
    setGameRestart(!gameRestart);
    setShowModal(false);
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
        <Pressable
          key={i}
          style={style.letterButton}
          onPress={() => handleLetterButtonPress(el)}
        >
          <Text style={style.buttonLetterText}>{el}</Text>
        </Pressable>
      ));

  return (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={style.flexOne}
    >
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={mainStyles.text}>
              The word was {chosenWordRef.current.Word}
            </Text>
            <AppButton title={"Play again"} onPress={() => handlePlayAgain()} />
          </View>
        </View>
      </Modal>

      <Text
        style={[mainStyles.text, { marginHorizontal: "auto", paddingTop: 100 }]}
      >
        {chosenWordRef.current.Word}
      </Text>
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
    paddingTop: 20,
  },
  flexOne: {
    flex: 1,
  },
  underlineLetterContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    paddingBottom: 20,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 100,
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

  letterButton: {
    backgroundColor: "#ff8c00",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#bbc2cc",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonLetterText: {
    fontSize: 20,
    color: "#f0f8ff",
    fontWeight: "700",
  },

  verticalPadding: {
    paddingVertical: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: 200,
    width: 350,
    margin: 10,
    backgroundColor: "#295094",
    borderRadius: 20,
    paddingVertical: 20,
    justifyContent: "space-evenly",
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
});
