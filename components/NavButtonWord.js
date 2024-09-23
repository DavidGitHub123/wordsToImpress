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
      // Once at Word Screen, populate fields
      />
    </Pressable>
  );
}

const navStyle = StyleSheet.create({
  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },

  appButtonContainer: {
    width: 270,
    marginVertical: 2,
  },

  bottomButtons: {
    paddingTop: 20,
  },
});

export { NavButtonWord, navStyle };
