import React from "react";
import { StyleSheet, Pressable, Platform } from "react-native";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";
import AppButton from "./AppButton";

export default function ListenButton({ audio }) {
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
    const { sound } = await Audio.Sound.createAsync(audio);
    console.log(sound);
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
      <AppButton icon="volume-up" title="Listen" onPress={playSound} />
    </Pressable>
  );
}

const style = StyleSheet.create({
  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
