import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AppButton(Props) {
  const { onPress, icon, title, backgroundColor, borderColor } = Props;

  console.log(icon);
  console.log(backgroundColor);

  return (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor={backgroundColor ? backgroundColor : "#FF8C00"}
        borderRadius={40}
        borderWidth={3}
        borderColor={borderColor ? borderColor : "#BBC2CC"}
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );
}

const style = StyleSheet.create({
  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
  },

  appButtonContainer: {
    paddingVertical: 5,
    width: 250,
  },
});
