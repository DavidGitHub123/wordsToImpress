import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function MyProgressButton({
  navigation,
  title,
  destination,
  icon = "line-chart",
}) {
  const AppButton = ({ onPress, icon, title }) => (
    <View style={navStyle.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="#FF8C00"
        borderRadius={10}
        borderWidth={3}
        borderColor="#BBC2CC"
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
  },

  appButtonText: {
    fontSize: 16,
    color: "#fff",
    //   fontWeight: 'bold',
  },

  appButtonContainer: {
    width: 150,
    marginVertical: 2,
  },
});

export { MyProgressButton, navStyle };
