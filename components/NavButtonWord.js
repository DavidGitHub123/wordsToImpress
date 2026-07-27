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
        backgroundColor="#E89020" // Transparent background
        borderColor="#fff" // Light border color
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
