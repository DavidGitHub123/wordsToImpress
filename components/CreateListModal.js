import React, { useState } from "react";
import { Modal, View, TextInput, Text, StyleSheet } from "react-native";
import { mainStyles } from "./mainStyles";
import IconButton from "./IconButton";
import AppButton from "./AppButton";
import { makeNewList } from "./listHelpers";

export default function CreateListModal(Props) {
  const [alert, setAlert] = useState(null);
  const [inputText, setInputText] = useState("");
  const { showModal, setShowModal, lists, updateLists } = Props;

  // Name is an optional variable, name will be empty if the modal
  // is closed without making a new list.
  const handleCloseModal = async (name) => {
    if (name) {
      if (lists.filter((el) => el.value === name).length > 0) {
        setAlert("Name already exists.");
        return;
      }
      await makeNewList(name);
      await updateLists(name);
    }

    setShowModal(false);
    setInputText("");
    setAlert(null);
  };

  return (
    <Modal
      visible={showModal}
      onRequestClose={handleCloseModal}
      transparent={true}
    >
      <View style={style.centeredView}>
        <View style={style.modalView}>
          <View style={style.xButton}>
            <IconButton name="times" onPress={() => handleCloseModal()} />
          </View>
          {alert && (
            <View style={style.alert}>
              <Text style={mainStyles.text}>{alert}</Text>
            </View>
          )}
          <Text style={mainStyles.subheader}>Name your new list</Text>
          <TextInput
            style={style.input}
            onChangeText={setInputText}
            value={inputText}
          />
          <AppButton
            title="Make list"
            onPress={() => handleCloseModal(inputText)}
          />
        </View>
      </View>
    </Modal>
  );
}
const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#282a36",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "#fff",
    width: 300,
    padding: 10,
  },
  xButton: {
    alignSelf: "flex-end",
  },
  alert: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff8c00",
    borderRadius: 20,
    height: 30,
    width: 200,
  },
});
