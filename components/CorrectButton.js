import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";

function CorrectButton({ navigation, title, destination, icon = "sign-in" }) {
  return (
    <View style={navStyle.container}>
      <AppButton
        icon={icon}
        title={title}
        onPress={() =>
          navigation.navigate(destination, { selectedWord: title })
        }
        size="medium"
        backgroundColor="rgba(255,255,255,0.05)"
        borderColor="rgba(255,255,255,0.12)"
        textColor={{
          color: "#fff",
          textShadowColor: "#00FFAA",
          textShadowRadius: 4,
        }}
        fontWeight="600"
        style={{ width: 240 }}
      />
    </View>
  );
}

const navStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
});

export { CorrectButton, navStyle };
