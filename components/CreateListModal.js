import React, { useState } from "react";
import { Modal, View, TextInput, Text, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import AppButton from "./AppButton";
import { makeNewList } from "./listHelpers";

export default function CreateListModal(Props) {
  const [alert, setAlert] = useState(null);
  const [inputText, setInputText] = useState("");
  const { showModal, setShowModal, lists, updateLists } = Props;

  const handleCloseModal = async (name) => {
    if (name) {
      if (lists.some((el) => el.value === name)) {
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
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.xButton}>
            <IconButton name="times" onPress={() => handleCloseModal()} />
          </View>

          {alert && (
            <View style={styles.alert}>
              <Text style={styles.alertText}>{alert}</Text>
            </View>
          )}

          <Text style={styles.subheader}>Name your new list</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInputText}
            value={inputText}
            placeholder="My New List"
            placeholderTextColor="#fff"
          />
          <AppButton
            title="Make list"
            onPress={() => handleCloseModal(inputText)}
            size="medium"
            backgroundColor="#E89020"
            borderColor="#fff"
            textColor={{
              color: "#fff",
              textShadowColor: "#00FFAA",
              textShadowRadius: 4,
            }}
            fontWeight="600"
            style={{ width: 240 }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#2a5298",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    width: 320,
  },
  xButton: {
    alignSelf: "flex-end",
  },
  input: {
    height: 44,
    width: 260,
    marginVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#E89020",
    borderColor: "#fff",
    borderWidth: 1,
    color: "#fff",
    fontSize: 16,
  },
  subheader: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    textShadowColor: "#00FFAA",
    textShadowRadius: 4,
  },
  alert: {
    backgroundColor: "#ff5555",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  alertText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
