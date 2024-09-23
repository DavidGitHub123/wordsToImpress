import React from "react";
import { StyleSheet, Pressable } from "react-native";
import AppButton from "./AppButton";

export default function HomeButton({ navigation }) {
  return (
    <Pressable style={style.appButton}>
      <AppButton
        icon="home"
        title="Home"
        onPress={() => navigation.navigate("HomeScreen")}
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
