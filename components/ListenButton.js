import React from "react";
import { StyleSheet, Pressable, Platform } from "react-native";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";
import AppButton from "./AppButton";
import data from "../data";

export default function ListenButton({ audio, word }) {
  const [sound, setSound] = useState();

  useEffect(() => {
    const asyncWrapper = async () => {
      if (Platform.OS === "ios") {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
        });
      }
    };
    asyncWrapper();
  }, []);

  async function playSound() {
    let selectedAudio = audio;
    if (!selectedAudio && word) {
      selectedAudio = data.find((w) => w.Word === word).Audio;
    }

    const { sound } = await Audio.Sound.createAsync(selectedAudio);
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Pressable style={style.appButton}>
      <AppButton
        icon="volume-up"
        title="Listen"
        onPress={playSound}
        backgroundColor="rgba(255,255,255,0.05)"
        borderColor="rgba(255,255,255,0.12)"
        fontWeight="600"
        size="medium"
      />
    </Pressable>
  );
}

const style = StyleSheet.create({
  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
