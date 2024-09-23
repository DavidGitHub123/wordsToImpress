import React from "react";
import { StyleSheet, Pressable } from "react-native";
import AppButton from "./AppButton";

function AboutButton({ navigation, title, destination, icon = "table" }) {
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
    paddingHorizontal: 30,
    height: 40,
  },

  appButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },

  appButtonContainer: {
    width: 150,
    padding: 6,
  },
});

export { AboutButton, navStyle };
