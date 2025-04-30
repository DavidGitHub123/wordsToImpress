import React from "react";
import { StyleSheet, Pressable } from "react-native";
import AppButton from "./AppButton";

function NavButtonWord({ navigation, title, destination, icon = "sign-in" }) {
  return (
    <Pressable style={navStyle.appButton}>
      <AppButton
        icon={icon}
        title={title}
        onPress={() =>
          navigation.navigate(destination, { selectedWord: title })
        }
        backgroundColor="transparent" // Transparent background
        borderColor="#BBC2CC" // Light border color
      />
    </Pressable>
  );
}

const navStyle = StyleSheet.create({
  appButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 80, // Adjust height if needed
  },
});

export { NavButtonWord, navStyle };
