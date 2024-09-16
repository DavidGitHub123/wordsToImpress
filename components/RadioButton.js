import React from "react";
import { StyleSheet, View } from "react-native";

export default function RadioButton(Props) {
  return (
    <View style={style.outerCircle}>
      {Props.selected ? <View style={style.innerCircle} /> : null}
    </View>
  );
}

const style = StyleSheet.create({
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#000",
  },
});
