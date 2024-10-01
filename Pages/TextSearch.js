import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import HomeButton from "../components/HomeButton";
import { navStyle } from "../components/NavButton.js";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../components/AppButton";
import data from "../data";
import { addOneWordToList, defaultList } from "../components/listHelpers";

export default function TextSearch({ navigation }) {
  const [text, setText] = useState("Input text here!");
  const [suggestions, setSuggestions] = useState(null);

  const handleSubmit = () => {
    const words = text.match(/([a-zA-Z]+\b)/gm).map((el) => el.toLowerCase());

    const foundSuggestions = data
      .filter((el) => el.syn.filter((s) => words.includes(s)).length > 0)
      .map((el) => el.Word);

    setSuggestions(foundSuggestions);
  };

  const handleAddToList = async (suggestedWord) => {
    await addOneWordToList(defaultList, suggestedWord);
    setSuggestions((prev) => prev.filter((el) => el !== suggestedWord));
  };

  const handleClear = async () => setText("");

  const formatSuggestions = () => {
    if (!suggestions) {
      return;
    }

    return (
      <View style={style.centerChildren}>
        <Text style={style.textInstructions}>
          Add these words to your list to improve your vocab.
        </Text>
        {suggestions.map((el, i) => (
          <AppButton
            key={i}
            title={el}
            icon="plus"
            onPress={() => handleAddToList(el)}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <LinearGradient
          colors={["#6699FF", "#335C81"]}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 0.5 }}
          opacity={1.0}
          style={style.page}
        >
          <View>
            <Text style={style.header}>Text Search</Text>
            <Text style={style.text}>
              Copy emails, communications, proposals, etc. into this box and
              analyze your communication patterns to suggest new vocabulary
              words that correspond to your speaking style and context. Then add
              these words to My Vocab List.
            </Text>
          </View>
          <View style={style.centerChildren}>
            <TextInput
              editable
              multiline
              onChangeText={(t) => setText(t)}
              value={text}
              style={style.textBox}
            />
          </View>
          {formatSuggestions()}
          <View style={style.buttons}>
            <AppButton title="Clear" onPress={handleClear} />
            <AppButton title="Analyze" onPress={handleSubmit} />
            <Pressable style={navStyle.appButton}>
              <AppButton
                title="Back"
                onPress={() => navigation.goBack()}
              ></AppButton>
            </Pressable>
            <HomeButton navigation={navigation} />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 450,
  },

  header: {
    fontSize: 40,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingBottom: 10,
    textAlign: "center",
  },

  text: {
    fontSize: 20,
    color: "#f0f8ff",
    paddingHorizontal: 40,
    margin: 5,
    paddingBottom: 40,
  },

  textInstructions: {
    fontSize: 20,
    color: "#f0f8ff",
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 20,
  },

  buttons: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
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
    width: 300,
  },

  textBox: {
    height: 300,
    width: 300,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    // padding: 20,
    backgroundColor: "#fff",
    // margin: 20,
    // margin: "auto",
  },
  centerChildren: {
    display: "flex",
    alignItems: "center",
  },
  center: {
    margin: "auto",
  },
});
