import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";
import AppButton from "./AppButton";

export default function ListenButton({ audio }) {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(audio);
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
      <AppButton icon="volume-off" title="Listen" onPress={playSound} />
    </Pressable>
  );
}

const style = StyleSheet.create({
  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
