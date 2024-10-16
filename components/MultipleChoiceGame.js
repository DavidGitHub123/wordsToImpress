import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "./AppButton";
import { NavButton } from "./NavButton";
import HomeButton from "./HomeButton";
import data from "../data";
import { incrementMastery, defaultList } from "./listHelpers";
import { mainStyles } from "./mainStyles";

export default function MultipleChoiceGame(Props) {
  const [anwsers, setAnwsers] = useState([]);
  const [score, setScore] = useState(0);
  const [listIndex, setListIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [displayNext, setDisplayNext] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const {
    list,
    navigation,
    setGameRestart,
    gameRestart,
    questionType,
    answerType,
  } = Props;
  const MAX_INCORRECT_ANSWERS = 3;

  let question;
  if (listIndex <= list.length - 1) {
    const wordIndex = data.findIndex((el) => el.Word === list[listIndex].Word);
    question = data[wordIndex][questionType];

    question = question.split(" ").map((el, i) => {
      const isHighlighted = (w) =>
        w.toLowerCase().includes(data[wordIndex].Word.toLowerCase());
      return (
        <Text
          key={i}
          style={isHighlighted(el) ? mainStyles.greenText : style.definition}
        >
          {el}
        </Text>
      );
    });
  }

  useEffect(() => {
    const getRandomIndex = () => Math.floor(Math.random() * data.length);

    let wrongAnswers = [];
    const rightAnswerWord = list[listIndex][answerType];

    while (wrongAnswers.length < MAX_INCORRECT_ANSWERS) {
      const randomWord = data[getRandomIndex()][answerType];
      if (!randomWord.includes(randomWord) || randomWord !== rightAnswerWord) {
        wrongAnswers.push(randomWord);
      }
    }

    const answerArray = wrongAnswers.map((el) => ({
      correct: false,
      answer: el,
      highlighted: false,
    }));

    answerArray.push({
      correct: true,
      answer: rightAnswerWord,
      highlighted: false,
      Word: list[listIndex].Word,
    });

    const shuffledAnswers = answerArray
      .map((el) => ({ el, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ el }) => el);
    setAnwsers(shuffledAnswers);
  }, [listIndex]);

  const handleAnwser = (index) => {
    // if displayNext is true return early, as this function has already highlighted something
    if (displayNext) {
      return;
    }
    if (anwsers[index].correct) {
      incrementMastery(defaultList, anwsers[index].Word);
      setScore(score + 1);
    }

    setIsCorrect(anwsers[index].correct);
    setDisplayNext(true);
    setAnwsers((prev) => {
      const copy = prev.slice();
      copy[index].highlighted = true;

      return copy;
    });
  };

  const handleNext = () => {
    setDisplayNext(false);
    setIsCorrect(null);
    if (listIndex < list.length - 1) {
      setListIndex(listIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  const handleStartOver = () => {
    setScore(0);
    setDisplayNext(false);
    setGameOver(false);
    setListIndex(0);
    setGameRestart(!gameRestart);
  };

  const renderAnwsers = () => (
    <View style={style.answerContainer}>
      {anwsers.map((el, i) => {
        let style = {};
        if (el.highlighted && el.correct) {
          style = { backgroundColor: "green", borderColor: "#BBC2CC" };
        } else if (el.highlighted) {
          style = { backgroundColor: "red", borderColor: "#fff" };
        }

        return (
          <AppButton
            size="full-screen"
            key={i}
            title={el.answer}
            style={style}
            onPress={() => handleAnwser(i)}
          />
        );
      })}
    </View>
  );

  const renderCorrectandNextButton = () => (
    <View style={style.centerContainer}>
      <Text style={style.text}>{isCorrect ? "Correct" : "Incorrect"}</Text>
      <AppButton title="Next Word" icon="sign-in" onPress={handleNext} />
    </View>
  );

  return (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={style.flexOne}
    >
      {gameOver ? (
        <View style={style.endContainer}>
          <Text style={style.header}>
            You scored {score}/{list.length}
          </Text>
          <AppButton
            icon="sign-in"
            title="Play Again"
            onPress={handleStartOver}
          />
          <NavButton
            navigation={navigation}
            title="Word Mastery"
            destination="VocabMastery"
          />
          <HomeButton navigation={navigation} />
        </View>
      ) : (
        <View style={{ ...style.centerContainer, ...style.width90 }}>
          <Text style={style.header}>
            {listIndex + 1}/{list.length}
          </Text>
          {/* <Text style={mainStyles.subheader}>
            Identify the word that matches this {typeDictoinary[questionType]}:
          </Text> */}
          <View style={style.flexQuestion}>{question}</View>
          {renderAnwsers()}
          {displayNext ? renderCorrectandNextButton() : null}
        </View>
      )}
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  flexOne: {
    flex: 1,
  },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },

  text: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "600",
    textAlign: "center",
  },

  definition: {
    fontSize: 30,
    color: "#f0f8ff",
    fontWeight: "600",
    textAlign: "center",
  },

  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  endContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  answerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 400,
    justifyContent: "space-evenly",
    paddingBottom: 40,
  },
  width90: { width: "100%", margin: "auto" },

  flexQuestion: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",
    alignItems: "baseline",
    flexWrap: "wrap",
    rowGap: 2,
    columnGap: 4,
    paddingBottom: 30,
  },
});
