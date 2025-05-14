import React from "react";
import { StyleSheet, Pressable } from "react-native";
import AppButton from "./AppButton";

function NavButton({ navigation, title, destination, icon = "sign-in" }) {
  return (
    <Pressable style={navStyle.appButton}>
      <AppButton
        icon={icon}
        title={title}
        onPress={() =>
          navigation.navigate(destination, { selectedWord: title })
        }
                // backgroundColor="transparent" // Transparent background
        backgroundColor="#cc9600" // Transparent background
        borderColor="#BBC2CC" // Light border color

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

export { NavButton, navStyle };
