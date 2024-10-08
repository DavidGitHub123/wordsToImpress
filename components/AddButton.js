import React from "react";
import AppButton from "./AppButton";
import { StyleSheet, Pressable } from "react-native";
import { addOneWordToList, defaultList } from "./listHelpers";

export default function AddButton(props) {
  const handleAddToList = async (word) => {
    // this function handles adding to list
    // it should pull up a modal that allows users to select each list
    // then add the word to that list
    // allows a user to make a new list as well, that'll probably be its own component

    // this is the mvp implementation i have at this moment
    addOneWordToList(defaultList, word);
  };

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
  appButton: {
    paddingHorizontal: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
