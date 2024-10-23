import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RadioButton from "../components/RadioButton";
import {
  getNLeastMastered,
  defaultList,
  incrementMastery,
} from "../components/listHelpers";
import AppButton from "../components/AppButton";
import { mainStyles } from "../components/mainStyles";
import ListDropdown from "../components/ListDropdown";
import data from "../data";

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
              <Game
                navigation={navigation}
                timing={timing}
                words={words}
                selectedList={selectedList}
              />
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
  const { timing, words, navigation, selectedList } = Props;

  const [timeLeft, setTimeLeft] = useState(timing);
  const [front, setFront] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);
  const timerID = useRef(-1);

  if (words.length === 0) {
    exitGame();
  }

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
    if (timing !== "Unlimited") {
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
    incrementMastery(selectedList, words[cardIndex].word);
    resetRound();
  };

  const flipOrNextButton = front ? (
    <AppButton
      title="Flip"
      icon="undo"
      onPress={() => setFront(false)}
      viewStyle={style.marginAuto}
    />
  ) : (
    <AppButton
      title="Next card"
      icon="step-forward"
      onPress={handleNextCard}
      viewStyle={style.marginAuto}
    />
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
      m
    >
      <RadioButton selected={timing === el} />
      <Text style={mainStyles.text}>
        {el} {el === "Unlimited" ? "" : "Seconds"}
      </Text>
    </Pressable>
  ));

  return (
    <View style={style.timingOptionsContainer}>
      <Text style={{ ...mainStyles.header, marginBottom: 20 }}>Rapid Fire</Text>
      <ListDropdown
        setParent={(n) => setSelectedList(n)}
        initialList={defaultList}
      />
      <Text style={{ ...mainStyles.text, marginTop: 30, marginBottom: 5 }}>
        Select your speed:
      </Text>
      <View style={{ marginVertical: 20 }}>{timingButtons}</View>

      <AppButton
        style={style.startButton}
        title="Start"
        icon="play-circle"
        onPress={() => setIsStarted(true)}
      />
    </View>
  );
}
function RapidFireCards(Props) {
  const { words, front, cardIndex } = Props;

  const getDef = (w) => data.find((el) => el.Word === w).Shortdef;

  const Cards = words.map((el, i) => {
    return {
      front: (
        <View key={i} style={[mainStyles.screen, style.wordContainer]}>
          <Text style={[mainStyles.header, style.innerWordContainer]}>
            {el.word}
          </Text>
        </View>
      ),
      back: (
        <View key={i} style={[mainStyles.screen, style.wordContainer]}>
          <View style={style.innerWordContainer}>
            <Text style={mainStyles.header}>{el.word}</Text>
            <Text style={mainStyles.subheader}>{getDef(el.word)}</Text>
          </View>
        </View>
      ),
    };
  });

  return front ? Cards[cardIndex].front : Cards[cardIndex].back;
}
const dimensions = Dimensions.get("screen");
const style = StyleSheet.create({
  wordContainer: {
    width: dimensions.width * 0.9,
    height: dimensions.height * 0.5,
  },
  innerWordContainer: {
    margin: "auto",
  },
  startButton: {
    height: 50,
  },

  marginAuto: { margin: "auto" },

  timeleft: {
    paddingBottom: 20,
    fontSize: 20,
    color: "#fff",
  },

  timingButtonContainer: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    gap: 20,
    width: "90%",
  },

  timingOptionsContainer: {
    margin: "auto",
    display: "flex",
    width: Dimensions.get("screen").width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .5)",
    borderRadius: 20,
    paddingVertical: 50,
  },
});
