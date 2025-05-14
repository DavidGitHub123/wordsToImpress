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
import { getNLeastMastered, incrementMastery } from "../components/listHelpers";
import AppButton from "../components/AppButton";
import { mainStyles } from "../components/mainStyles";
import ListDropdown from "../components/ListDropdown";
import data from "../data";

export default function RapidFire({ navigation }) {
  const [timing, setTiming] = useState(10);
  const [isStarted, setIsStarted] = useState(false);
  const [words, setWords] = useState(null);
  const [selectedList, setSelectedList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getWords() {
      if (!selectedList) return;
      const list = await getNLeastMastered(selectedList, 10);
      if (!list || list.length === 0) {
        setError(
          `${selectedList} is empty, add some words or use another list`,
        );
        setIsStarted(false);
      } else {
        setError(null);
        setWords(list);
      }
    }
    getWords();
  }, [selectedList]);

  return (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={mainStyles.page}
    >
      <SafeAreaView style={mainStyles.page}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={mainStyles.centerContainer}>
            {isStarted ? (
              <Game
                navigation={navigation}
                timing={timing}
                words={words}
                selectedList={selectedList}
              />
            ) : (
              <GameSetUp
                error={error}
                timing={timing}
                setTiming={setTiming}
                setIsStarted={setIsStarted}
                setSelectedList={setSelectedList}
                selectedList={selectedList}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

function Game({ timing, words, navigation, selectedList }) {
  const [timeLeft, setTimeLeft] = useState(timing);
  const [front, setFront] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);
  const timerID = useRef(-1);

  useEffect(() => {
    if (timing === "Unlimited") return;
    if (timeLeft === 0) {
      resetRound();
    } else {
      if (timerID.current !== -1) clearTimeout(timerID.current);
      timerID.current = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
  }, [timeLeft]);

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
    if (timing !== "Unlimited") setTimeLeft(timing);
  };

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
      <Text style={style.timeleft}>
        Time left: {timing === "Unlimited" ? "∞" : timeLeft}
      </Text>
      <RapidFireCards words={words} front={front} cardIndex={cardIndex} />
      {flipOrNextButton}
    </View>
  );
}

function GameSetUp({
  timing,
  setTiming,
  setIsStarted,
  setSelectedList,
  selectedList,
  error,
}) {
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

  const handleSubmit = () => {
    if (!error && selectedList) {
      setIsStarted(true);
    }
  };

  return (
    <View style={style.timingOptionsContainer}>
      {error && (
        <View style={mainStyles.error}>
          <Text>{error}</Text>
        </View>
      )}
      <Text style={{ ...mainStyles.header, marginBottom: 20 }}>Rapid Fire</Text>
      <ListDropdown setParent={setSelectedList} />
      <Text style={{ ...mainStyles.text, marginTop: 30, marginBottom: 5 }}>
        Select your speed:
      </Text>
      <View style={{ marginVertical: 20 }}>{timingButtons}</View>

      <AppButton
        style={style.startButton}
        title="Start"
        icon="play-circle"
        onPress={handleSubmit}
      />
    </View>
  );
}

function RapidFireCards({ words, front, cardIndex }) {
  const getDef = (w) =>
    data.find((el) => el.Word === w)?.Shortdef || "No definition found";

  const Cards = words.map((el, i) => {
    return {
      front: (
        <View key={i} style={[mainStyles.screen, style.card]}>
          <Text style={[mainStyles.header, style.wordText]}>{el.word}</Text>
        </View>
      ),
      back: (
        <View key={i} style={[mainStyles.screen, style.card]}>
          <Text style={[mainStyles.header, style.wordText]}>{el.word}</Text>
          <Text style={mainStyles.subheader}>{getDef(el.word)}</Text>
        </View>
      ),
    };
  });

  return front ? Cards[cardIndex].front : Cards[cardIndex].back;
}

const dimensions = Dimensions.get("screen");

const style = StyleSheet.create({
  card: {
    width: dimensions.width * 0.9,
    minHeight: dimensions.height * 0.4,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 30,
  },
  wordText: {
    textAlign: "center",
    color: "#fff",
  },
  startButton: {
    height: 50,
  },
  marginAuto: {
    marginTop: 20,
  },
  gameContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  timeleft: {
    paddingBottom: 20,
    fontSize: 20,
    color: "#fff",
  },
  timingButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 20,
    width: "90%",
  },
  timingOptionsContainer: {
    width: Dimensions.get("screen").width * 0.9,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    paddingVertical: 50,
  },
});
