import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
} from "react-native";
import HomeButton from "../components/HomeButton";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../components/AppButton";
import data from "../data";
import { addOneWordToList, defaultList } from "../components/listHelpers";
import { mainStyles } from "../components/mainStyles";

export default function TextSearch({ navigation }) {
  const defaultText = "Input text here!";
  const [text, setText] = useState(defaultText);
  const [suggestions, setSuggestions] = useState(null);

  const handleSubmit = () => {
    const words =
      text.match(/([a-zA-Z]+\b)/gm)?.map((el) => el.toLowerCase()) || [];

    const foundSuggestions = data
      .filter((el) => el.syn.filter((s) => words.includes(s)).length > 0)
      .map((el) => el.Word);

    setSuggestions(foundSuggestions);
  };

  const handleAddToList = async (suggestedWord) => {
    await addOneWordToList(defaultList, suggestedWord);
    setSuggestions((prev) => prev.filter((el) => el !== suggestedWord));
  };

  const handleClear = () => setText("");

  const handleFocus = () => {
    if (text === defaultText) {
      setText("");
    }
  };

  const formatSuggestions = () => {
    if (!suggestions) return;

    return (
      <View style={style.centerChildren}>
        <Text style={mainStyles.subText}>Add these words to your lists.</Text>
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
      colors={["#1e1e2f", "#121216"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={mainStyles.flexOne}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={style.container}>
        <ScrollView contentContainerStyle={style.scrollView}>
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
              onChangeText={setText}
              onFocus={handleFocus}
              value={text}
              placeholderTextColor="#aaa"
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
  container: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 40,
  },
  centerChildren: {
    alignItems: "center",
    paddingVertical: 20,
  },
  textBox: {
    minHeight: 200,
    width: "85%",
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 12,
    backgroundColor: "#1f1f2e",
    color: "#fff",
    fontSize: 18,
    padding: 12,
    marginBottom: 30,
  },
  buttons: {
    alignItems: "center",
    gap: 10,
  },
});
