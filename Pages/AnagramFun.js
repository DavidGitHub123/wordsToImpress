import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getNLeastMastered } from "../components/listHelpers.js";
import AppButton from "../components/AppButton.js";
import data from "../data.js";
import { mainStyles } from "../components/mainStyles.js";
import ListDropdown from "../components/ListDropdown.js";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
const WORDS_TO_FETCH = 10;

const getShortDef = (word) =>
  data.find((el) => el.Word === word)?.Shortdef || "";

const generateLetterKey = () => {
  const alphabet = [...ALPHABET];
  const shuffledAlphabet = [...ALPHABET].sort(() => 0.5 - Math.random());
  const letterKey = {};

  while (alphabet.length > 0) {
    const letterOne = alphabet.pop();
    const letterTwo =
      shuffledAlphabet[0] === letterOne
        ? shuffledAlphabet.pop()
        : shuffledAlphabet.shift();

    letterKey[letterOne] = letterTwo;
  }

  const hasIdentityMapping = Object.entries(letterKey).some(
    ([key, value]) => key === value,
  );
  return hasIdentityMapping ? generateLetterKey() : letterKey;
};

const formatWordForGame = (word) => {
  const formattedShortdef = word.Shortdef.toLowerCase().replace(/[^a-z ]/g, "");
  const uniqueLetters = new Set(formattedShortdef.replace(/\s/g, "")).size;

  return {
    ...word,
    FormattedShortdef: formattedShortdef,
    uniqueLetters,
  };
};

const useGameList = (selectedList, gameRestart) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAndSetList = async () => {
      if (!selectedList) return;

      setIsLoading(true);
      setError(null);

      try {
        const userList = await getNLeastMastered(selectedList, WORDS_TO_FETCH);

        if (userList.length === 0) {
          setError(
            `${selectedList} is empty, add some words or use another list`,
          );
          setList([]);
        } else {
          const formattedList = userList.map((el) => ({
            Word: el.word,
            mastery: el.mastery,
            Shortdef: getShortDef(el.word),
          }));
          setList(formattedList);
        }
      } catch (err) {
        setError("Failed to load word list");
        setList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetList();
  }, [gameRestart, selectedList]);

  return { list, error, isLoading };
};

const useAnagramGame = (list) => {
  const [shownLetters, setShownLetters] = useState([]);
  const [selectedLetterAndIndex, setSelectedLetterAndIndex] = useState({
    letter: null,
    index: -1,
  });
  const [gameWon, setGameWon] = useState(false);

  const letterKeyRef = useRef(generateLetterKey());
  const chosenWordRef = useRef(null);

  useEffect(() => {
    if (list.length > 0) {
      const randomWord = list[Math.floor(Math.random() * list.length)];
      chosenWordRef.current = formatWordForGame(randomWord);

      const firstNonSpaceIndex = chosenWordRef.current.FormattedShortdef.split(
        "",
      ).findIndex((char) => char !== " ");

      if (firstNonSpaceIndex !== -1) {
        const firstLetter =
          chosenWordRef.current.FormattedShortdef[firstNonSpaceIndex];
        setSelectedLetterAndIndex({
          letter: letterKeyRef.current[firstLetter],
          index: firstNonSpaceIndex,
        });
      }
    }
  }, [list]);

  const handleBlankPress = useCallback((letter, index) => {
    setSelectedLetterAndIndex({ letter, index });
  }, []);

  const handleLetterButtonPress = useCallback(
    (letter) => {
      const { letter: selectedLetter } = selectedLetterAndIndex;
      const chosenWord = chosenWordRef.current;

      if (!chosenWord || letterKeyRef.current[letter] !== selectedLetter) {
        return;
      }

      setShownLetters((prev) => {
        if (prev.includes(letter)) return prev;

        const newShownLetters = [...prev, letter];

        if (newShownLetters.length === chosenWord.uniqueLetters) {
          setGameWon(true);
        }

        return newShownLetters;
      });

      const wordLetters = chosenWord.FormattedShortdef.split("");
      const currentNewShownLetters = [...shownLetters, letter];

      const nextUnguessedIndex = wordLetters.findIndex(
        (char, index) => char !== " " && !currentNewShownLetters.includes(char),
      );

      if (nextUnguessedIndex !== -1) {
        const nextLetter = wordLetters[nextUnguessedIndex];
        setSelectedLetterAndIndex({
          letter: letterKeyRef.current[nextLetter],
          index: nextUnguessedIndex,
        });
      } else {
        setSelectedLetterAndIndex({ letter: null, index: -1 });
      }
    },
    [selectedLetterAndIndex, shownLetters],
  );

  const resetGame = useCallback(() => {
    setShownLetters([]);
    setGameWon(false);
    letterKeyRef.current = generateLetterKey();

    if (list.length > 0) {
      const randomWord = list[Math.floor(Math.random() * list.length)];
      chosenWordRef.current = formatWordForGame(randomWord);

      const firstNonSpaceIndex = chosenWordRef.current.FormattedShortdef.split(
        "",
      ).findIndex((char) => char !== " ");

      if (firstNonSpaceIndex !== -1) {
        const firstLetter =
          chosenWordRef.current.FormattedShortdef[firstNonSpaceIndex];
        setSelectedLetterAndIndex({
          letter: letterKeyRef.current[firstLetter],
          index: firstNonSpaceIndex,
        });
      } else {
        setSelectedLetterAndIndex({ letter: null, index: -1 });
      }
    }
  }, [list]);

  return {
    shownLetters,
    selectedLetterAndIndex,
    gameWon,
    letterKey: letterKeyRef.current,
    chosenWord: chosenWordRef.current,
    handleBlankPress,
    handleLetterButtonPress,
    resetGame,
  };
};

const GameSetup = ({
  onStartGame,
  selectedList,
  setSelectedList,
  error,
  isLoading,
}) => (
  <LinearGradient
    colors={["#2a5298", "#121216"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={mainStyles.page}
  >
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <View style={[mainStyles.startGameContainer, mainStyles.screen]}>
          <Text style={mainStyles.header}>Anagram Fun</Text>
          <Text style={mainStyles.subheader}>
            Fix the jumbled word to increase your mastery
          </Text>

          {error && (
            <View style={[mainStyles.error, { marginVertical: 20 }]}>
              <Text>{error}</Text>
            </View>
          )}

          {isLoading && <Text style={mainStyles.text}>Loading...</Text>}

          <ListDropdown setParent={setSelectedList} />

          <AppButton
            onPress={onStartGame}
            title="Play Game"
            icon="sign-in"
            disabled={!selectedList || !!error || isLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
);

const LetterDisplay = ({
  letter,
  index,
  isShown,
  isSelected,
  encodedLetter,
  onPress,
}) => (
  <Pressable key={index} onPress={() => onPress(encodedLetter, index)}>
    <View style={styles.verticalPadding}>
      <Text style={[mainStyles.text, styles.centerText]}>
        {isShown ? letter : ""}
      </Text>

      {letter !== " " && (
        <View
          style={isSelected ? styles.selectedUnderline : styles.underline}
        />
      )}

      <Text style={[mainStyles.text, styles.centerText]}>{encodedLetter}</Text>
    </View>
  </Pressable>
);

const LetterButton = ({ letter, onPress }) => (
  <AppButton
    height={60}
    width={60}
    viewStyle={styles.appButtonView}
    style={styles.appButtonStyle}
    title={letter}
    onPress={() => onPress(letter)}
  />
);

const WinMessage = ({ onReset, onBackToMenu }) => (
  <View style={styles.winContainer}>
    <Text style={[mainStyles.header, styles.winText]}>Congratulations!</Text>
    <Text style={[mainStyles.text, styles.winText]}>
      You solved the anagram!
    </Text>

    <View style={styles.winButtons}>
      <AppButton onPress={onReset} title="Play Again" />
      <AppButton onPress={onBackToMenu} title="Back to Menu" />
    </View>
  </View>
);

const AnagramGame = ({
  list,
  onBackToMenu,
  shownLetters,
  selectedLetterAndIndex,
  gameWon,
  letterKey,
  chosenWord,
  onBlankPress,
  onLetterButtonPress,
  onResetGame,
}) => {
  const availableLetters = useMemo(
    () => ALPHABET.filter((letter) => !shownLetters.includes(letter)),
    [shownLetters],
  );

  const renderWordDisplay = () => {
    if (!chosenWord) return null;

    return chosenWord.FormattedShortdef.split("").map((letter, index) => (
      <LetterDisplay
        key={index}
        letter={letter}
        index={index}
        isShown={shownLetters.includes(letter)}
        isSelected={selectedLetterAndIndex.index === index}
        encodedLetter={letterKey[letter]}
        onPress={onBlankPress}
      />
    ));
  };

  const renderLetterButtons = () =>
    availableLetters.map((letter, index) => (
      <LetterButton
        key={`${letter}-${index}`}
        letter={letter}
        onPress={onLetterButtonPress}
      />
    ));

  if (gameWon) {
    return (
      <LinearGradient
        colors={["#6699FF", "#335C81"]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 0.5 }}
        style={styles.flexOne}
      >
        <WinMessage onReset={onResetGame} onBackToMenu={onBackToMenu} />
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      style={styles.flexOne}
    >
      <View style={styles.underlineLetterContainer}>{renderWordDisplay()}</View>

      <View style={styles.letterButtonContainer}>{renderLetterButtons()}</View>
    </LinearGradient>
  );
};

export default function AnagramFun() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameRestart, setGameRestart] = useState(false);
  const [selectedList, setSelectedList] = useState(null);

  const { list, error, isLoading } = useGameList(selectedList, gameRestart);

  const gameState = useAnagramGame(list);

  const handleStartGame = useCallback(() => {
    if (!error && selectedList && !isLoading) {
      setIsGameStarted(true);
    }
  }, [error, selectedList, isLoading]);

  const handleBackToMenu = useCallback(() => {
    setIsGameStarted(false);
    setGameRestart((prev) => !prev);
    gameState.resetGame();
  }, [gameState]);

  if (isGameStarted) {
    return (
      <AnagramGame
        list={list}
        onBackToMenu={handleBackToMenu}
        {...gameState}
        onBlankPress={gameState.handleBlankPress}
        onLetterButtonPress={gameState.handleLetterButtonPress}
        onResetGame={gameState.resetGame}
      />
    );
  }

  return (
    <GameSetup
      onStartGame={handleStartGame}
      selectedList={selectedList}
      setSelectedList={setSelectedList}
      error={error}
      isLoading={isLoading}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  letterButtonContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    justifyContent: "space-evenly",
    paddingTop: 100,
  },
  flexOne: {
    flex: 1,
  },
  underlineLetterContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    paddingTop: 100,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  underline: {
    borderBottomColor: "black",
    borderBottomWidth: 5,
    width: 20,
  },
  selectedUnderline: {
    borderBottomColor: "white",
    borderBottomWidth: 5,
    width: 20,
  },
  appButtonView: {
    height: 50,
    width: 50,
  },
  appButtonStyle: {
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  verticalPadding: {
    paddingVertical: 20,
  },
  centerText: {
    textAlign: "center",
  },
  winContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  winText: {
    textAlign: "center",
    marginBottom: 20,
  },
  winButtons: {
    flexDirection: "collumn",
    gap: 20,
  },
});
