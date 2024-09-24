import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
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

  const { list, navigation, setGameRestart, gameRestart } = Props;
  const MAX_INCORRECT_ANSWERS = 3;

  let definition;
  if (listIndex < list.length - 1) {
    const wordIndex = data.findIndex((el) => el.Word === list[listIndex].word);

    definition = data[wordIndex].Shortdef;
  }

  useEffect(() => {
    const getRandomIndex = () => Math.floor(Math.random() * data.length);

    let wrongAnswers = [];
    const rightAnswerWord = list[listIndex].word;

    while (wrongAnswers.length < MAX_INCORRECT_ANSWERS) {
      const randomWord = data[getRandomIndex()].Word;
      if (!randomWord.includes(randomWord) || randomWord !== rightAnswerWord) {
        wrongAnswers.push(randomWord);
      }
    }

    const answerArray = wrongAnswers.map((el) => ({
      correct: false,
      word: el,
      highlighted: false,
    }));

    answerArray.push({
      correct: true,
      word: rightAnswerWord,
      highlighted: false,
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
      incrementMastery(defaultList, anwsers[index].word);
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
    <View>
      {anwsers.map((el, i) => {
        let style = {};
        if (el.highlighted && el.correct) {
          style = { backgroundColor: "green", borderColor: "#BBC2CC" };
        } else if (el.highlighted) {
          style = { backgroundColor: "red", borderColor: "#fff" };
        }

        return (
          <AppButton
            key={i}
            title={el.word}
            style={style}
            onPress={() => handleAnwser(i)}
          />
        );
      })}
    </View>
  );

  const renderCorrectandNextButton = () => (
    <View>
      <Text>{isCorrect ? "Correct" : "Incorrect"}</Text>
      <AppButton title="Next Word" icon="sign-in" onPress={handleNext} />
    </View>
  );

  return (
    <View>
      {gameOver ? (
        <View>
          <Text>You scored {score}/10</Text>
          <AppButton
            icon="sign-in"
            title="Play Again"
            onPress={handleStartOver}
          />
          <NavButton
            navigation={navigation}
            title="Word Mastery"
            destination="WordMastery"
          />
          <HomeButton navigation={navigation} />
        </View>
      ) : (
        <View>
          <Text>{listIndex + 1}/10</Text>
          <Text>Identify the correct word that matches this definition.</Text>
          <Text>Definition: {definition}</Text>
          {renderAnwsers()}
          {displayNext ? renderCorrectandNextButton() : null}
        </View>
      )}
    </View>
  );
}
