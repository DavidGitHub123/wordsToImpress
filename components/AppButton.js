import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AppButton(Props) {
  const { onPress, icon, title, backgroundColor, borderColor, style, size } =
    Props;

  const styleSize =
    size === "large"
      ? defaultStyle.large
      : size === "medium"
        ? defaultStyle.medium
        : defaultStyle.small;

  const iconButtonStyle = {
    ...defaultStyle.appButton,
    ...styleSize,
    ...style,
  };

  const containerStyle = {
    ...defaultStyle.appButtonContainer,
    ...(size === "large" ? { width: 180 } : {}),
  };

  return (
    <View style={containerStyle}>
      <Icon.Button
        name={icon}
        backgroundColor={backgroundColor ? backgroundColor : "#FF8C00"}
        borderRadius={10}
        borderWidth={3}
        borderColor={borderColor ? borderColor : "#BBC2CC"}
        onPress={onPress}
        style={iconButtonStyle}
      >
        <Text style={defaultStyle.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );
}

const defaultStyle = StyleSheet.create({
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
  large: {
    height: 80,
  },
  medium: {
    height: 60,
  },
  small: {
    height: 40,
  },
});
