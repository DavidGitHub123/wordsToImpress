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
    borderColor: "#BBC2CC", // Lighter border color to match design consistency
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent", // Transparent background
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#fff", // White color for selected inner circle
  },
});
