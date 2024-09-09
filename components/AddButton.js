import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { addOneWordToList, defaultList } from "./listHelpers";

export default function AddButton(props) {
  const handleAddToList = async (word) => {
    // this function handles adding to list
    // it should pull up a modal that allows users to select each list
    // then add the word to that list
    // allows a user to make a new list as well, that'll probably be its own component

    // this is the mvp implementation i have at this moment
    console.log(word);
    addOneWordToList(defaultList, word);
  };
  console.log(props);
  console.log("---");
  console.log(props.word);

  const AppButton = ({ onPress, icon, title }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor="#FF8C00"
        borderRadius={40}
        borderWidth={3}
        borderColor="#BBC2CC"
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

  return (
    <Pressable style={style.appButton}>
      <AppButton
        icon="plus"
        title="Add to My List"
        onPress={() => handleAddToList(props.word)}
      />
    </Pressable>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },

  header: {
    fontSize: 30,
    color: "#f0f8ff",
    fontWeight: "800",
  },

  section: {
    paddingVertical: 30,
  },

  appButton: {
    paddingHorizontal: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },

  appButtonContainer: {
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
});
