import React from "react";
import { StyleSheet, Pressable } from "react-native";
import AppButton from "./AppButton";

export default function HomeButton({ navigation, style }) {
  return (
    <Pressable style={{ ...styles.appButton, ...style }}>
      <AppButton
        style={styles.appButton}
        icon="home"
        title="Home"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
