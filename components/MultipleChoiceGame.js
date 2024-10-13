import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "./AppButton";
import { NavButton } from "./NavButton";
import HomeButton from "./HomeButton";
import data from "../data";
import { incrementMastery, defaultList } from "./listHelpers";

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
  const typeDictoinary = {
    Longdef: "sentence",
    Shortdef: "definition",
    Word: "word",
  };

  let question;
  if (listIndex <= list.length - 1) {
    const wordIndex = data.findIndex((el) => el.Word === list[listIndex].Word);
    console.log(questionType);
    question = data[wordIndex][questionType];
  }

  useEffect(() => {
    const getRandomIndex = () => Math.floor(Math.random() * data.length);

    let wrongAnswers = [];
    const rightAnswerWord = list[listIndex][answerType];
    console.log(rightAnswerWord);
    console.log(list[listIndex]);

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
        <View style={style.centerContainer}>
          <Text style={style.header}>You scored {score}/10</Text>
          <AppButton
            icon="sign-in"
            title="Play Again"
            onPress={handleStartOver}
          />
          <NavButton
            navigation={navigation}
            title="Word Mastery"
            destination="MyList"
          />
          <HomeButton navigation={navigation} />
        </View>
      ) : (
        <View style={style.centerContainer}>
          <Text style={style.header}>{listIndex + 1}/10</Text>
          <Text style={style.text}>
            Identify the correct word that matches this{" "}
            {typeDictoinary[questionType]}.
          </Text>
          <Text style={style.text}>{question}</Text>
          {renderAnwsers()}
          {displayNext ? renderCorrectandNextButton() : null}
        </View>
      )}
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  page: {
    backgroundColor: "#fff",
  },

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

  white: {
    color: "#f0f8ff",
  },

  text: {
    fontSize: 18,
    color: "#f0f8ff",
    padding: 5,
  },

  wordList: {
    fontSize: 18,
    color: "#f0f8ff",
    textAlign: "center",
    paddingTop: 20,
  },

  buttons: {
    paddingTop: 20,
  },

  timingButtonContainer: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    gap: 5,
  },

  gameContainer: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  timingOptionsContainer: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    margin: "auto",
  },
  centerContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  answerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 400,
    justifyContent: "space-evenly",
  },
});
