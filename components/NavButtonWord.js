import React from "react";
import { StyleSheet, Pressable } from "react-native";
import AppButton from "./AppButton";

function NavButtonWord({
  navigation,
  title,
  destination,
  icon = "sign-in",
  textColor,
  backgroundColor,
}) {
  return (
    <Pressable style={navStyle.appButton}>
      <AppButton
        icon={icon}
        title={title}
        textColor={textColor}
        backgroundColor={backgroundColor}
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
  },
});

export { NavButtonWord, navStyle };
