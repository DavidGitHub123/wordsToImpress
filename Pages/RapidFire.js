import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import RadioButton from "../components/RadioButton";
import {
  getNLeastMastered,
  defaultList,
  incrementMastery,
} from "../components/listHelpers";
import RapidFireCards from "./RapidFireCards";

export default function RapidFire({ navigation }) {
  const [timing, setTiming] = useState(10);
  const [isStarted, setIsStarted] = useState(false);
  const [words, setWords] = useState(null);

  useEffect(() => {
    async function getWords() {
      setWords(await getNLeastMastered(defaultList, 10));
    }
    getWords();
  }, []);

  return (
    <View>
      {isStarted ? (
        <Game navigation={navigation} timing={timing} words={words} />
      ) : (
        <GameSetUp
          timing={timing}
          setTiming={setTiming}
          setIsStarted={setIsStarted}
        />
      )}
    </View>
  );
}

function Game(Props) {
  const { timing, words, navigation } = Props;

  const [timeLeft, setTimeLeft] = useState(timing);
  const [front, setFront] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);
  const timerID = useRef(-1);

  const exitGame = () => {
    setCardIndex(0);
    navigation.navigate("MyList");
  };

  const resetRound = () => {
    if (words.length <= cardIndex + 1) {
      exitGame();
      return;
    }
    setFront(true);
    setCardIndex(cardIndex + 1);
    setTimeLeft(timing);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      resetRound();
    } else {
      clearTimeout(timerID.current);
      timerID.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
  }, [timeLeft]);

  const handleNextCard = () => {
    if (words.length <= cardIndex + 1) {
      exitGame();
      return;
    }
    incrementMastery(defaultList, words[cardIndex].word);
    resetRound();
  };

  const flipOrNextButton = front ? (
    <Pressable onPress={() => setFront(false)}>
      <Text>Flip!</Text>
    </Pressable>
  ) : (
    <Pressable onPress={handleNextCard}>
      <Text>Next Card!</Text>
    </Pressable>
  );

  return (
    <View>
      <Text>Time left:</Text>
      <Text>{timeLeft}</Text>
      <RapidFireCards words={words} front={front} cardIndex={cardIndex} />
      {flipOrNextButton}
    </View>
  );
}

function GameSetUp(Props) {
  const { timing, setTiming, setIsStarted } = Props;

  const timingOptions = [1, 3, 5];

  const timingButtons = timingOptions.map((el, i) => (
    <Pressable
      style={style.timingButtonContainer}
      key={i}
      onPress={() => setTiming(el)}
    >
      <RadioButton selected={timing === el} />
      <Text>{el} Seconds</Text>
    </Pressable>
  ));

  return (
    <View style={style.timingOptionsContainer}>
      <Text>Select your speed:</Text>
      <View>{timingButtons}</View>

      <Pressable onPress={() => setIsStarted(true)}>
        <Text>Start!</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  page: {
    paddingTop: 350,
    paddingHorizontal: 100,
    backgroundColor: "#fff",
  },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    textAlign: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },

  text: {
    fontSize: 18,
    color: "#f0f8ff",
    paddingBottom: 30,
    paddingHorizontal: 30,
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

  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
  },

  appButtonContainer: {
    paddingVertical: 5,
    width: 250,
  },

  timingButtonContainer: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },

  timingOptionsContainer: {
    paddingTop: 100,
    height: "20vh",
    width: "30vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
