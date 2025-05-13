import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function IconButton({ name, style, onPress }) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <View style={styles.inner}>
        <Icon name={name} size={18} style={styles.icon} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderColor: "rgba(255, 255, 255, 0.12)",
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
