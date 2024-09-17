import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function WordSituationButton({
  navigation,
  title,
  destination,
//   icon = "line-chart",
}) {
  const AppButton = ({ onPress, icon, title }) => (
    <View style={navStyle.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="#4682B4"
        borderRadius={10}
        borderWidth={1}
        borderColor='#fff'
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
        // icon={icon}
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
    width: 220,
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
      fontWeight: 'bold',
  },

  appButtonContainer: {
    paddingVertical: 20,
  },
});

export { WordSituationButton, navStyle };
