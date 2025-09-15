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
        backgroundColor="#E89020"
        borderColor="#fff"
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
