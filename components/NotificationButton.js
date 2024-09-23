import React from "react";
import { StyleSheet, Pressable } from "react-native";
import AppButton from "./AppButton";

function NotificationButton({ navigation, title, destination, icon = "bell" }) {
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
    padding: 3,
  },

  appButtonText: {
    fontSize: 16,
    color: "#fff",
  },

  appButtonContainer: {
    width: 100,
  },
});

export { NotificationButton, navStyle };
