import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import HomeButton from "../../components/HomeButton";
import AddButton from "../../components/AddButton";
import ListenButton from "../../components/ListenButton";
import AppButton from "../../components/AppButton";
import { mainStyles } from "../../components/mainStyles";
import { LinearGradient } from "expo-linear-gradient";

export default function WS_SpeedingTicket({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const hideButton = (
    <Pressable style={mainStyles.centerContainer}>
      <AppButton
        icon="sign-in"
        title="Hide"
        onPress={() => setSelectedWord(null)}
      />
    </Pressable>
  );

  const WordDetails = ({ word, pronunciation, definition, sentence }) => (
    <View style={style.component}>
      <View style={mainStyles.screen}>
        <Text style={mainStyles.header}>{word}</Text>
        <Text style={style.space}>
          <Text style={style.bold}>Pron: </Text>
          <Text style={mainStyles.text}>{pronunciation}</Text>
        </Text>
        <Text style={style.space}>
          <Text style={style.bold}>Def: </Text>
          <Text style={mainStyles.text}>{definition}</Text>
        </Text>
        <Text style={style.space}>
          <Text style={style.bold}>Sentence: </Text>
          <Text style={mainStyles.text}>{sentence}</Text>
        </Text>
      </View>
      <ListenButton word={word} />
      <AddButton word={word} />
      {hideButton}
    </View>
  );

  const words = [
    {
      word: "Adroit",
      pronunciation: "uh-DROIT",
      definition: "Skillful use of one’s hands or body.",
      sentence:
        "Officer, your adroit driving skills helped me to pull my car over safely.",
    },
    {
      word: "Befuddle",
      pronunciation: "bee-FUD-il",
      definition: "To confuse or perplex.",
      sentence:
        "I’m sorry officer that I appear befuddled, you won’t believe what happened.",
    },
    {
      word: "Canard",
      pronunciation: "kuh-NARD",
      definition: "A fabrication or unfounded story.",
      sentence:
        "Officer, I cannot tell a canard; I was speeding but let me tell you why.",
    },
    {
      word: "Disconcerting",
      pronunciation: "diss-kun-SERT-ing",
      definition: "Ruffled; upset.",
      sentence:
        "Officer, I too find it disconcerting I was driving 20 miles over the speed limit.",
    },
    {
      word: "Embodiment",
      pronunciation: "em-BOD-ee-ment",
      definition: "To possess a given thing or idea.",
      sentence: "Officer, you are the embodiment of a brave man of his duty.",
    },
    {
      word: "Fulminate",
      pronunciation: "FUL-mih-nate",
      definition: "To explode. Launch verbal attack.",
      sentence:
        "Officer, last time you pulled me over I spoke loudly, even fulminating in anger. I’m sorry.",
    },
    {
      word: "Imperative",
      pronunciation: "im-PAIR-uh-tive",
      definition: "Essential, obligatory, or mandatory.",
      sentence: "Officer, it’s imperative that I get to my meeting on time.",
    },
    {
      word: "Lucid",
      pronunciation: "LOO-sid",
      definition: "Intelligible; clear mental state.",
      sentence:
        "Officer, I was daydreaming and not in a lucid state when I passed that speed limit sign.",
    },
    {
      word: "Misconstrue",
      pronunciation: "miss-kun-STROO",
      definition: "To misinterpret; make an error in analyzing.",
      sentence:
        "Officer, I do not mean to misconstrue the situation; I’ll defer to your judgment.",
    },
    {
      word: "Upbraid",
      pronunciation: "miss-kun-STROO",
      definition: "To criticize a person.",
      sentence: "Officer, please don’t upbraid me; I am a good driver.",
    },
  ];

  return (
    <LinearGradient colors={["#2c3e50", "#34495e"]} style={mainStyles.page}>
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>Speeding Ticket</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View style={mainStyles.centerContainer}>
              {words.map((word, index) => (
                <View key={index}>
                  <Pressable>
                    <AppButton
                      icon="sign-in"
                      title={word.word}
                      onPress={() =>
                        setSelectedWord(
                          <WordDetails
                            word={word.word}
                            pronunciation={word.pronunciation}
                            definition={word.definition}
                            sentence={word.sentence}
                          />,
                        )
                      }
                    />
                  </Pressable>
                </View>
              ))}

              <View style={style.bottomButtons}>
                <HomeButton navigation={navigation} />
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingBottom: 200,
  },
  bold: {
    fontSize: 25,
    fontWeight: "600",
    color: "#FF8C00",
  },
  space: {
    paddingTop: 10,
  },
  bottomButtons: {
    paddingTop: 20,
  },
});
