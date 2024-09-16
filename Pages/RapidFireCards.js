import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeButton from "../components/HomeButton";
// import { NavButton } from '../components/NavButton';
import { navStyle } from "../components/NavButton.js";
import blue8 from "../assets/blue8.jpg";
// import { useState } from 'react';
// import RapicFireCard from '../components/RapidFireCard.js'
import data from "../data";

export default function RapidFireCards(Props, { navigation }) {
  const AppButton = ({ onPress, icon, title }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="#FF8C00"
        borderRadius={40}
        borderWidth={3}
        borderColor="#BBC2CC"
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

  const { words, front, cardIndex } = Props;

  const getDef = () => data.find((el) => el.Word).Shortdef;

  const Cards = words.map((el, i) => {
    return {
      front: (
        <View key={i}>
          <Text>{el.word}</Text>
        </View>
      ),
      back: (
        <View key={i}>
          <Text>{getDef(el.word)}</Text>
        </View>
      ),
    };
  });

  return front ? Cards[cardIndex].front : Cards[cardIndex].back;
  /*
  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={blue8}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>RapidFire</Text>
            <Text style={style.text}>
              Select 10 words from your Vocab List and play the game.
            </Text>
          </View>

          <Text style={style.wordList}>Their word list with checkbox</Text>

          {/* Populate RapidFireCard.js one word/card at a time as the user clicks each card and reviews definition*/
}
{
  /*
      <View>
        {selectedList.map(wordDefinition => {
          return <RapicFireCard wordDefinition={wordDefinition} key={wordDefinition.id} />
        })}
      </View>
      }

          <View style={style.buttons}>
            <Pressable style={navStyle.appButton}>
              <AppButton
                title="Back"
                onPress={() => navigation.goBack()}
              ></AppButton>
            </Pressable>
            <HomeButton navigation={navigation} />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
  */
}

const style = StyleSheet.create({
  page: {
    paddingBottom: 350,
    // backgroundColor: '#000',
  },

  // image: {
  //   opacity: .5,
  // },

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
});
