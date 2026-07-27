import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function IconButton({ name, style, onPress }) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <View style={styles.inner}>
        <FontAwesome5 name={name} size={18} style={styles.icon} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#E89020",
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  inner: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#fff",
    textShadowColor: "#FFAF40",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
});
