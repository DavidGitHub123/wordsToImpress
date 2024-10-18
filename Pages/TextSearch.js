import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import HomeButton from "../components/HomeButton";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../components/AppButton";
import data from "../data";
import { addOneWordToList, defaultList } from "../components/listHelpers";
import { mainStyles } from "../components/mainStyles";

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
        <Text style={mainStyles.subText}>
          Add these words to your lists.
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
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View style={mainStyles.screen}>
            <Text style={mainStyles.header}>Text Search</Text>
            <Text style={mainStyles.subText}>
              Copy emails, proposals, fiction, etc. into this box. Our tools
              will analyze your communication patterns to suggest new vocabulary
              words that correspond to your speaking and writing style. Then add
              these words to your vocabulary list.
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
            <HomeButton navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  buttons: {
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    height: "auto",
    minHeight: 200,
    width: "80%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 30,
    fontSize: 18,
    padding: 10
  },
  centerChildren: {
    display: "flex",
    alignItems: "center",
  },
});
