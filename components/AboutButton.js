import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function AboutButton({ navigation, title, destination, icon = "table" }) {
  const AppButton = ({ onPress, icon, title }) => (
    <View style={navStyle.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="transparent"
        borderRadius={10}
        borderWidth={1}
        borderColor="#fff"
        onPress={onPress}
        style={navStyle.appButton}
      >
        <Text style={navStyle.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

  return (
    <Pressable style={navStyle.appButton}>
      <AppButton
        icon={icon}
        title={title}
        onPress={() =>
          navigation.navigate(destination, { selectedWord: title })
        }
      />
    </Pressable>
  );
}

const navStyle = StyleSheet.create({
  appButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    height: 40,
  },

  appButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },

  appButtonContainer: {
    width: 150,
    padding: 6,
  },
});

export { AboutButton, navStyle };
