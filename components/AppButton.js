import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function AppButton(Props) {
  const {
    onPress,
    icon,
    title,
    backgroundColor,
    borderColor,
    style,
    size,
    viewStyle,
    textColor,
    textSize,
    fontWeight,
  } = Props;

  let height;
  let width;
  let styleSize = {};
  let containerStyleSize = {};
  if (size === "full-screen") {
    height = defaultStyle.fullScreen.height;
    width = defaultStyle.fullScreen.width;
    styleSize = defaultStyle.fullScreen;
    containerStyleSize = defaultStyle.fullScreen;
  } else if (size === "large") {
    styleSize = defaultStyle.large;
    containerStyleSize = defaultStyle.largeContainer;
  } else if (size === "medium") {
    styleSize = defaultStyle.medium;
  } else if (size === "small") {
    styleSize = defaultStyle.small;
  }
  const iconButtonStyle = {
    ...defaultStyle.appButton,
    ...styleSize,
    ...style,
  };

  const containerStyle = {
    ...defaultStyle.appButtonContainer,
    ...containerStyleSize,
    ...viewStyle,
  };

  const fontSize = { fontSize: textSize ? textSize : 16 };

  return (
    <View style={containerStyle}>
      <Icon.Button
        name={icon === "sign-in" ? "sign-in-alt" : icon}
        backgroundColor={backgroundColor ? backgroundColor : "#FF8C00"}
        borderRadius={10}
        borderWidth={3}
        borderColor={borderColor ? borderColor : "#BBC2CC"}
        onPress={onPress}
        height={height}
        width={width}
        style={iconButtonStyle}
      >
        <Text
          style={{
            ...defaultStyle.appButtonText,
            ...textColor,
            ...fontSize,
            fontWeight,
          }}
        >
          {title}
        </Text>
      </Icon.Button>
    </View>
  );
}

const defaultStyle = StyleSheet.create({
  appButton: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  appButtonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },

  appButtonContainer: {
    marginVertical: 5,
    width: 225,
  },
  large: {
    height: 50,
  },
  medium: {
    height: 60,
  },
  small: {
    height: 40,
  },
  fullScreen: {
    height: 75,
    width: 300,
  },
  largeContainer: {
    width: "45%",
  },
});
