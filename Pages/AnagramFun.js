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
import RadioButton from "../components/RadioButton.js";
import { NavButton } from "../components/NavButton.js";

export default function AnagramFun({ navigation }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [list, setList] = useState([]);
  const [gameRestart, setGameRestart] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [error, setError] = useState(null);
  const [isEasyMode, setIsEasyMode] = useState(true);

  const getShortDef = (word) => data.find((el) => el.Word === word)?.Shortdef;

  useEffect(() => {
    async function getAndSetList() {
      if (!selectedList) return;
      let userList = await getNLeastMastered(selectedList, 10);

      if (!userList.length) {
        setError(
          `${selectedList} is empty, add some words or use another list`,
        );
        return;
      } else {
        setError(null);
      }

      userList = userList.map((el) => ({
        Word: el.word,
        mastery: el.mastery,
        Shortdef: getShortDef(el.word),
      }));

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
      isEasyMode={isEasyMode}
      navigation={navigation}
    />
  ) : (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      style={mainStyles.page}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={mainStyles.page}>
        <ScrollView contentContainerStyle={mainStyles.screen}>
          <Text style={mainStyles.header}>Anagram Fun</Text>
          <Text style={mainStyles.subheader}>
            Fix the jumbled word to increase your mastery.
          </Text>

          <View style={style.timingMode}>
            <Pressable
              style={style.timingButton}
              onPress={() => setIsEasyMode(true)}
            >
              <Text style={mainStyles.text}>Easy</Text>
              <RadioButton selected={isEasyMode} />
            </Pressable>
            <Pressable
              style={style.timingButton}
              onPress={() => setIsEasyMode(false)}
            >
              <Text style={mainStyles.text}>Hard</Text>
              <RadioButton selected={!isEasyMode} />
            </Pressable>
          </View>

          {error && <Text style={mainStyles.error}>{error}</Text>}

          <View style={{ margin: "auto" }}>
            <ListDropdown setParent={setSelectedList} />
          </View>
          <View style={{ margin: "auto" }}>
            <AppButton title="Play Game" onPress={handleSubmit} icon="play" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

function AnagramGame({
  list,
  gameRestart,
  setGameRestart,
  isEasyMode,
  navigation,
}) {
  const generateLetterKey = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
    const key = {};
    while (alphabet.length) {
      const letter = alphabet.pop();
      const pair = shuffled[0] === letter ? shuffled.pop() : shuffled.shift();
      key[letter] = pair;
    }
    return key;
  };

  const formatChosenWord = () => {
    const wordObj = list[Math.floor(Math.random() * list.length)];
    wordObj.anagram = isEasyMode
      ? wordObj.Word.toLowerCase().replace(/[^a-z]/g, "")
      : wordObj.Shortdef.toLowerCase().replace(/[^a-z]/g, "");
    wordObj.uniqueLetters = new Set(wordObj.anagram.replace(/\s/g, "")).size;
    return wordObj;
  };

  const shuffleString = (str) =>
    [...str].sort(() => 0.5 - Math.random()).join("");

  const initShownLetters = () => {
    if (isEasyMode) return [];
    const letters = chosenWordRef.current.anagram.replace(/[^a-z]/g, "");
    const unique = [...new Set(letters)];
    const vowels = unique.filter((c) => "aeiou".includes(c));
    const consonants = unique.filter((c) => !"aeiou".includes(c));
    return [shuffleString(vowels)[0], ...shuffleString(consonants).slice(0, 4)];
  };

  const letterKeyRef = useRef(generateLetterKey());
  const chosenWordRef = useRef(formatChosenWord());
  const [showModal, setShowModal] = useState(false);
  const [shownLetters, setShownLetters] = useState(initShownLetters());
  const [selectedLetter, setSelectedLetter] = useState({
    letter: letterKeyRef.current[chosenWordRef.current.anagram[0]],
    index: 0,
  });

  const findNextFreeIndex = () => {
    const length = chosenWordRef.current.anagram.length;
    let index = (selectedLetter.index + 1) % length;
    let start = index;

    while (shownLetters.includes(chosenWordRef.current.anagram[index])) {
      index = (index + 1) % length;
      if (index === start) {
        return null;
      }
    }
    return index;
  };

  const handleLetterPress = (letter) => {
    if (letterKeyRef.current[letter] === selectedLetter.letter) {
      if (shownLetters.length + 1 === chosenWordRef.current.uniqueLetters) {
        setShowModal(true);
      }
      setShownLetters((prev) => [...new Set([...prev, letter])]);
      const index = findNextFreeIndex();
      setSelectedLetter(() => ({
        letter: letterKeyRef.current[chosenWordRef.current.anagram[index]],
        index,
      }));
    }
  };

  const renderBlanks = () =>
    chosenWordRef.current.anagram.split("").map((char, i) => (
      <Pressable
        key={i}
        onPress={() =>
          setSelectedLetter({ letter: letterKeyRef.current[char], index: i })
        }
      >
        <View style={style.letterSlot}>
          <Text style={mainStyles.text}>
            {shownLetters.includes(char) ? char : ""}
          </Text>
          {char !== " " && (
            <View
              style={
                selectedLetter.index === i
                  ? style.selectedUnderline
                  : style.underline
              }
            />
          )}
          <Text style={mainStyles.subText}>{letterKeyRef.current[char]}</Text>
        </View>
      </Pressable>
    ));

  const renderLetterButtons = () =>
    "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .filter((l) => !shownLetters.includes(l))
      .map((l) => (
        <Pressable
          key={l}
          style={style.letterButton}
          onPress={() => handleLetterPress(l)}
        >
          <Text style={style.letterButtonText}>{l}</Text>
        </Pressable>
      ));

  const handlePlayAgain = () => {
    letterKeyRef.current = generateLetterKey();
    chosenWordRef.current = formatChosenWord();
    setShownLetters([]);
    setGameRestart(!gameRestart);
    setShowModal(false);

    setSelectedLetter({
      letter: letterKeyRef.current[chosenWordRef.current.anagram[0]],
      index: 0,
    });
  };

  const handleNav = () => {
    handlePlayAgain();
    navigation.navigate("VocabMastery");
  };

  return (
    <LinearGradient colors={["#1e3c72", "#2a5298"]} style={mainStyles.page}>
      <SafeAreaView style={mainStyles.page}>
        <Modal visible={showModal} transparent animationType="slide">
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={mainStyles.header}>Nice Work!</Text>
              <AppButton title="Play Again" onPress={handlePlayAgain} />
              <AppButton
                title="Word Mastery"
                icon="sign-in"
                onPress={handleNav}
              />
            </View>
          </View>
        </Modal>

        <ScrollView contentContainerStyle={mainStyles.screen}>
          <Text style={[mainStyles.text, { marginVertical: 20 }]}>
            {isEasyMode
              ? chosenWordRef.current.Shortdef
              : chosenWordRef.current.Word}
          </Text>

          <View style={style.wordRow}>{renderBlanks()}</View>
          <View style={style.lettersGrid}>{renderLetterButtons()}</View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  timingMode: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    gap: 20,
  },
  timingButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
  },
  wordRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    marginVertical: 40,
  },
  letterSlot: {
    alignItems: "center",
    padding: 10,
  },
  underline: {
    borderBottomColor: "#888",
    borderBottomWidth: 2,
    width: 15,
    marginVertical: 4,
  },
  selectedUnderline: {
    borderBottomColor: "#fff",
    borderBottomWidth: 3,
    width: 15,
    marginVertical: 4,
  },
  lettersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    paddingBottom: 50,
  },
  letterButton: {
    backgroundColor: "#FF8C00",
    borderRadius: 12,
    padding: 12,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  letterButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalView: {
    width: "85%",
    padding: 25,
    borderRadius: 20,
    backgroundColor: "rgba(66, 66, 200, 0.95)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Optional dim overlay
  },
});
