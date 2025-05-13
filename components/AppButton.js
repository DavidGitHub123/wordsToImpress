import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function AppButton({
  onPress,
  icon,
  title,
  width = 225,
  height = 50,
  iconColor = "#fff",
  textColor = "#fff",
  backgroundColor = "#cc9600",
  borderColor = "#fff",
  fontWeight = "600",
  textSize = 15,
}) {
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
