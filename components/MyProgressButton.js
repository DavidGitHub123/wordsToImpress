import React from "react";
import { StyleSheet, Pressable } from "react-native";
import AppButton from "./AppButton";

function MyProgressButton({
  navigation,
  title,
  destination,
  icon = "line-chart",
}) {
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
        textColor={{ color: "#fff" }} // White text
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

export { MyProgressButton, navStyle };
