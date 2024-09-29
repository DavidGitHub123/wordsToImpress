import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RadioButton from "../components/RadioButton";
import {
  getNLeastMastered,
  defaultList,
  incrementMastery,
} from "../components/listHelpers";
import RapidFireCards from "./RapidFireCards";
import AppButton from "../components/AppButton";

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
    <SafeAreaView style={style.mainContainer}>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#6699FF", "#335C81"]}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 0.5 }}
          opacity={1.0}
          style={style.page}
        >
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
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

function Game(Props) {
  const { timing, words, navigation } = Props;

  console.log(words);

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
    <AppButton title="Flip" icon="undo" onPress={() => setFront(false)} />
  ) : (
    <AppButton title="Next card" icon="step-forward" onPress={handleNextCard} />
  );

  return (
    <View style={style.gameContainer}>
      <Text style={style.header}>Time left: {timeLeft}</Text>
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
      <Text style={style.white}>{el} Seconds</Text>
    </Pressable>
  ));

  return (
    <View style={style.timingOptionsContainer}>
      <Text style={style.header}>Rapid fire </Text>
      <Text style={style.text}>Select your speed:</Text>
      <View>{timingButtons}</View>

      <AppButton
        style={style.startButton}
        title="Start"
        icon="play-circle"
        onPress={() => setIsStarted(true)}
      />
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  page: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    paddingBottom: 400,
  },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    textAlign: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },

  white: {
    color: "#f0f8ff",
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

  startButton: {
    height: 50,
    
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
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
});
