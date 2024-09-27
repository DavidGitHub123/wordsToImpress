import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function IconButton(Props) {
  const { name, style, onPress } = Props;

  const containerStyle = { ...defaultStyle.containerStyle, ...style };

  return (
    <Pressable style={containerStyle} onPress={onPress}>
      <Icon style={defaultStyle.icon} size={20} name={name} onPress={onPress} />
    </Pressable>
  );
}

const defaultStyle = StyleSheet.create({
  containerStyle: {
    height: 40,
    width: 40,
    backgroundColor: 'transparent',
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },

  icon: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});
