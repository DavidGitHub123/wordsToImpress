import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function HomeBuildMyListButton({ navigation, title, destination, icon = "wrench" }) {
  const AppButton = ({ onPress, icon, title }) => (
    <View style={navStyle.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="#FF8C00"
        borderRadius={10}
        borderWidth={3}
        borderColor="#fff"
            // borderColor="#BBC2CC"
        onPress={onPress}
        style={navStyle.appButton}
        // padding={15}
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
    height: 80,
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },

  appButtonContainer: {
    width: 200,
    padding: 6,
  },


});

export { HomeBuildMyListButton, navStyle };
