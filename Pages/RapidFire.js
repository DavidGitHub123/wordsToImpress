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
import { mainStyles } from "../components/mainStyles";
import ListDropdown from "../components/ListDropdown";

export default function RapidFire({ navigation }) {
  const [timing, setTiming] = useState(10);
  const [isStarted, setIsStarted] = useState(false);
  const [words, setWords] = useState(null);
  const [selectedList, setSelectedList] = useState(defaultList);

  useEffect(() => {
    async function getWords() {
      setWords(await getNLeastMastered(selectedList, 10));
    }
    getWords();
  }, [selectedList]);

  return (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={mainStyles.backgroundImage}
    >
      <SafeAreaView style={mainStyles.centerContainer}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            {isStarted ? (
              <Game navigation={navigation} timing={timing} words={words} />
            ) : (
              <GameSetUp
                timing={timing}
                setTiming={setTiming}
                setIsStarted={setIsStarted}
                setSelectedList={setSelectedList}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
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
    navigation.navigate("VocabMastery");
  };

  const resetRound = () => {
    if (words.length <= cardIndex + 1) {
      exitGame();
      return;
    }
    setFront(true);
    setCardIndex(cardIndex + 1);
    if (timing === "Unlimited") {
      setTimeLeft(timing);
    }
  };

  useEffect(() => {
    if (timing === "Unlimited") {
      return;
    }

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
      <Text style={style.timeleft}>Time left: {timeLeft}</Text>
      <RapidFireCards words={words} front={front} cardIndex={cardIndex} />
      {flipOrNextButton}
    </View>
  );
}

function GameSetUp(Props) {
  const { timing, setTiming, setIsStarted, setSelectedList } = Props;

  const timingOptions = [1, 3, 5, "Unlimited"];

  const timingButtons = timingOptions.map((el, i) => (
    <Pressable
      style={style.timingButtonContainer}
      key={i}
      onPress={() => setTiming(el)}
    >
      <RadioButton selected={timing === el} />
      <Text style={mainStyles.text}>
        {el} {el === "Unlimited" ? "" : "Seconds"}
      </Text>
    </Pressable>
  ));

  return (
    <View style={style.timingOptionsContainer}>
      <Text style={mainStyles.header}>Rapid Fire </Text>
      <ListDropdown
        setParent={(n) => setSelectedList(n)}
        initialList={defaultList}
      />
      <Text style={mainStyles.text}>Select your speed:</Text>
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
  startButton: {
    height: 50,
  },

  timeleft: {
    paddingBottom: 20,
    fontSize: 20,
    color: "#fff",
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

  timingOptionsContainer: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .5)",
    borderRadius: 20,
    // paddingHorizontal: 30,
    paddingVertical: 50,
  },
});
