import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TextInput,
  Dimensions,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AppButton from "./AppButton";
import IconButton from "./IconButton";
import { defaultList, getNamesOfLists, makeNewList } from "./listHelpers";
import { mainStyles } from "./mainStyles";

export default function ListDropdown(Props) {
  const { setParent, initialList } = Props;
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState(null);
  const [selectedList, setSelectedList] = useState(
    initialList ? initialList : defaultList,
  );
  const [inputText, setInputText] = useState("");
  const [lists, setLists] = useState([
    { label: defaultList, value: defaultList },
  ]);

  const ADD_LIST = "Add list";

  const loadAndSetLists = async () => {
    const userLists = [await getNamesOfLists(), ADD_LIST].flat().map((el) => ({
      label: el,
      value: el,
    }));
    setLists(userLists);
  };
  useEffect(() => {
    loadAndSetLists();
  }, []);

  const handleDropdownChange = (list) => {
    if (list.value === ADD_LIST) {
      setShowModal(true);
    } else {
      setParent(list.value);
      setSelectedList(list.value);
    }
  };

  // Name is an optional variable, name will be empty if the modal
  // is closed without making a new list.
  const handleCloseModal = async (name) => {
    if (name) {
      if (lists.filter((el) => el.value === name).length > 0) {
        setAlert("Name already exists.");
        return;
      }
      await makeNewList(name);
      setParent(name);
    }
    setShowModal(false);
    setInputText("");
    setAlert(null);
    await loadAndSetLists();
    setSelectedList(name);
  };

  return (
    <View>
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
            <Text style={mainStyles.text2}>Name your new list</Text>
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
      <Dropdown
        data={lists}
        value={selectedList}
        style={style.dropdown}
        selectedTextStyle={style.selectedTextStyle}
        placeholderStyle={style.placeholderStyle}
        inputSearchStyle={style.inputSearchStyle}
        onChange={handleDropdownChange}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select a list"
      />
    </View>
  );
}

const dimensions = Dimensions.get("screen");

const style = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    backgroundColor: "white",
    width: dimensions.width * 0.9,
  },
  placeholderStyle: {
    fontSize: 24,
  },
  selectedTextStyle: {
    fontSize: 24,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
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
    backgroundColor: "#ff5555",
    borderRadius: 20,
    height: 30,
    width: 200,
  },
});
