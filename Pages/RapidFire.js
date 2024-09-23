import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  // ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeButton from "../components/HomeButton";
import { NavButton, navStyle } from "../components/NavButton";
// import blue8 from "../assets/blue8.jpg";
import RadioButton from "../components/RadioButton";
import {
  getNLeastMastered,
  defaultList,
  incrementMastery,
} from "../components/listHelpers";
import RapidFireCards from "./RapidFireCards";
import { LinearGradient } from "expo-linear-gradient";

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

  const AppButton = ({ onPress, icon }) => (
    <SafeAreaView style={style.appButtonContainer}>
      <ScrollView>
        <Icon.Button
          name={icon}
          backgroundColor="#FF8C00"
          borderRadius={40}
          borderWidth={3}
          borderColor="#BBC2CC"
          onPress={onPress}
        ></Icon.Button>
        {/* <ImageBackground
          source={blue8}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        > */}
        <LinearGradient
          colors={["#6699FF", "#335C81"]}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.25, y: 0.5 }}
          opacity={1.0}
          style={style.page}
        >
          <View>
            <Text style={style.header}>RapidFire</Text>
            <Text style={style.text}>
              Test your vocab speed and recall. Select 10 words from your Vocab
              List and play the game.
            </Text>
            <NavButton
              navigation={navigation}
              title="Play Game"
              destination="RapidFireCards"
            />
          </View>

          <View style={style.buttons}>
            <Pressable style={navStyle.appButton}>
              <AppButton
                title="Back"
                onPress={() => navigation.goBack()}
              ></AppButton>
            </Pressable>
            <HomeButton navigation={navigation} />
          </View>
          {/* </ImageBackground> */}
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );

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
