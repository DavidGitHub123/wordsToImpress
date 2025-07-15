import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

<<<<<<< HEAD
export default function AppButton({
  onPress,
  icon,
  title,
  width = 225,
  height = 50,
  iconColor = "#fff",
  textColor = "#fff",
  backgroundColor = "#E89020",
  borderColor = "#fff",
  fontWeight = "600",
  textSize = 15,
}) {
=======
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

>>>>>>> 414b80b46849cd5f5652b2019cb2ad219aeb0a3e
  return (
    <Pressable onPress={onPress} style={[styles.wrapper, { width }]}>
      <View
        style={[
          styles.button,
          {
            width,
            height,
            backgroundColor,
            borderColor,
          },
        ]}
      >
        {icon && (
          <Icon
            name={icon === "sign-in" ? "sign-in-alt" : icon}
            size={18}
            color={iconColor}
            style={{ marginRight: 8 }}
          />
        )}
        <Text
          style={[
            styles.text,
            {
              color: textColor,
              fontSize: textSize,
              fontWeight,
            },
          ]}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginVertical: 6,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
  },
});
