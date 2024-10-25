import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "./AppButton";
import { NavButton } from "./NavButton";
import HomeButton from "./HomeButton";
import data from "../data";
import { incrementMastery, defaultList } from "./listHelpers";
import { mainStyles } from "./mainStyles";
import ChatBubble from "react-native-chat-bubble";

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
          style={
            isHighlighted(el)
              ? mainStyles.greenText2
              : { ...mainStyles.subheader, paddingVertical: 2 }
          }
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
  }, [list, listIndex]);

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
      prev[index].highlighted = true;
      return [...prev];
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

  const textSize = questionType === "Shortdef" ? 26 : 20;

  const renderAnwsers = () => (
    <View style={style.answerContainer}>
      {anwsers.map((el, i) => {
        let style = {};
        if (el.highlighted && el.correct) {
          style = { backgroundColor: "green", borderColor: "#BBC2CC" };
        } else if (el.highlighted) {
          style = { backgroundColor: "#FF0000", borderColor: "#fff" };
        }

        return (
          <AppButton
            size="full-screen"
            textSize={textSize}
            key={i}
            title={el.answer}
            style={style}
            onPress={() => handleAnwser(i)}
          />
        );
      })}
    </View>
  );

  const renderCorrectandNextButton = () => {
    const wordData = data.find(
      (el) => el[answerType] === list[listIndex][answerType],
    );
    return (
      <View style={style.centerContainer}>
        <Text style={style.text}>{isCorrect ? "Correct" : "Incorrect"}</Text>
        <Text style={style.text}>
          {wordData.Word}: {wordData.Shortdef}
        </Text>
        <AppButton title="Next Word" icon="sign-in" onPress={handleNext} />
      </View>
    );
  };

  const renderProgressBar = () => (
    <View style={style.outerProgressBar}>
      <View
        style={{
          ...style.innerProgressBar,
          ...{ width: `${((listIndex + 1) / list.length) * 100}%` },
        }}
      />
    </View>
  );

  const questionContainer =
    questionType === "Shortdef" ? (
      <View
        style={{ ...mainStyles.screen, ...style.flexQuestion, width: "100%" }}
      >
        {question}
      </View>
    ) : (
      <ChatBubble
        style={style.chatBubble}
        withTail={true}
        bubbleColor="rgba(0, 0, 0, .5)"
        tailColor="rgba(0, 0, 0, .5)"
      >
        {question}
      </ChatBubble>
    );

  return (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={style.flexOne}
    >
      <View style={style.progressView}>
        <Text style={style.progressText}>
          {listIndex + 1}/{list.length}
        </Text>
        {renderProgressBar()}
      </View>
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
          {questionContainer}
          {renderAnwsers()}
          <Modal
            animationType="slide"
            transparent={true}
            visible={displayNext}
            onRequestClose={() => setDisplayNext(false)}
          >
            <View style={style.centeredView}>
              <View style={style.modalView}>
                {renderCorrectandNextButton()}
              </View>
            </View>
          </Modal>
        </View>
      )}
    </LinearGradient>
  );
}

const dimensions = Dimensions.get("screen");
const style = StyleSheet.create({
  progressView: {
    marginTop: 75,
  },
  progressText: {
    margin: "auto",
    color: "#fff",
    fontSize: 28,
  },
  outerProgressBar: {
    width: "90%",
    height: 20,
    margin: "auto",
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  innerProgressBar: {
    backgroundColor: "#4cf03a",
    height: "100%",
    borderRadius: 2,
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

  text: {
    fontSize: 28,
    color: "#f0f8ff",
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 20,
  },

  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingBottom: 40,
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
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: 2,
    columnGap: 4,
    borderRadius: "20%",
    textAlign: "center",
    justifyContent: "center",
  },
  chatBubble: {
    width: dimensions.width * 0.95,
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: 2,
    columnGap: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "#2350a8",
    borderRadius: 20,
    paddingVertical: 10,
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
