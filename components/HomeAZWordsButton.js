import React from "react";
import { StyleSheet, Pressable } from "react-native";
import AppButton from "./AppButton";

function HomeAZWordsButton({ navigation, title, destination, icon = "book" }) {
  return (
    <Pressable style={navStyle.appButton}>
      <AppButton
        icon={icon}
        title={title}
        onPress={() =>
          navigation.navigate(destination, { selectedWord: title })
        }
      />
    </Pressable>
  );
}

const navStyle = StyleSheet.create({
  appButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },

  appButtonContainer: {
    width: 200,
    padding: 6,
  },
});

export { HomeAZWordsButton, navStyle };
