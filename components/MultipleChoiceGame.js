import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "./AppButton";
import { NavButton } from "./NavButton";
import HomeButton from "./HomeButton";
import data from "../data";
import { incrementMastery } from "./listHelpers";
import { mainStyles } from "./mainStyles";
import { isWordConjugate } from "../Pages/Word";

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
    selectedList,
    blank,
    noMastery,
    showScoreModal,
  } = Props;
  const MAX_INCORRECT_ANSWERS = 3;

  let question;
  if (listIndex <= list.length - 1) {
    const wordIndex = data.findIndex((el) => el.Word === list[listIndex].Word);
    question = data[wordIndex][questionType];

    question = question.split(" ").map((el, i) => {
      let isHighlighted = isWordConjugate(el, data[wordIndex].Word);

      return (
        <Text
          key={i}
          style={
            isHighlighted && !blank
              ? mainStyles.greenText2
              : { ...mainStyles.subheader, paddingVertical: 2 }
          }
        >
          {blank && isHighlighted ? "_".repeat(el.length) : el}
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
    if (displayNext) {
      return;
    }
    if (anwsers[index].correct) {
      if (!noMastery) {
        incrementMastery(selectedList, anwsers[index].Word);
      }
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

  const questionContainer = (
    <View
      style={{ ...mainStyles.screen, ...style.flexQuestion, width: "100%" }}
    >
      {question}
    </View>
  );
  const getSkillLevel = (score) => {
    if (score <= 5) {
      return "Novice";
    } else if (score <= 10) {
      return "Basic";
    } else if (score <= 15) {
      return "Intermediate";
    } else if (score <= 20) {
      return "Advanced";
    } else if (score <= 25) {
      return "Expert";
    }
  };

  return (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
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
          <Modal visible={!!showScoreModal} transparent={true}>
            <View style={style.centeredView}>
              <View style={style.modalView}>
                <Text style={[style.header, { paddingHorizontal: 15 }]}>
                  You scored {score}/{list.length}
                </Text>
                <Text style={style.modalText}>
                  Congratulations! you attained a {getSkillLevel(score)} level
                </Text>
                <Text style={style.modalText}>
                  Expert 21-25 correct answers
                </Text>
                <Text style={style.modalText}>
                  Advanced 16-20 correct answers
                </Text>
                <Text style={style.modalText}>
                  Intermediate 11-15 correct answers
                </Text>
                <Text style={style.modalText}>Basic 6-10 correct answers</Text>
                <Text style={style.modalText}>Novice 0-5 correct answers</Text>
                <HomeButton navigation={navigation} />
              </View>
            </View>
          </Modal>
          {!showScoreModal && (
            <View>
              <Text style={style.header}>
                You scored {score}/{list.length}
              </Text>

              <View style={{ margin: "auto" }}>
                <AppButton
                  viewStyle={style.center}
                  icon="sign-in"
                  title="Play Again"
                  onPress={handleStartOver}
                />
              </View>
              <View style={{ margin: "auto" }}>
                <NavButton
                  navigation={navigation}
                  title="Word Mastery"
                  destination="VocabMastery"
                />
              </View>
              <View style={{ margin: "auto" }}>
                <HomeButton navigation={navigation} />
              </View>
            </View>
          )}
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
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "#295094",
    borderRadius: 20,
    paddingVertical: 20,
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
  modalText: {
    fontSize: 20,
    color: "#f0f8ff",
    fontWeight: "700",
    textAlign: "center",
  },
  center: {
    margin: "auto",
  },
});
