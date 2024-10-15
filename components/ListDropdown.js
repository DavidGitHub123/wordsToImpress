import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { defaultList, getNamesOfLists } from "./listHelpers";

export default function ListDropdown() {
  const [showModal, setShowModal] = useState(false);
  const [lists, setLists] = useState([
    { label: defaultList, value: defaultList },
  ]);
  const [selectedList, setSelectedList] = useState(defaultList);

  const ADD_LIST = "Add list";

  useEffect(() => {
    const asyncWrapper = async () => {
      const userLists = [await getNamesOfLists(), ADD_LIST]
        .flat()
        .map((el) => ({
          label: el,
          value: el,
        }));
      setLists(userLists);
    };
    asyncWrapper();
  }, []);

  const handleDropdownChange = (list) => {
    if (list === ADD_LIST) {
      console.log("true!!")
      setShowModal(true);
    }
    setSelectedList(list);
  };

  return (
    <View>
      {showModal && <ListModal />}
      <Dropdown
        data={lists}
        value={selectedList}
        style={style.dropdown}
        placeholderStyle={style.placeholderStyle}
        selectedTextStyle={style.selectedTextStyle}
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

function ListModal() {
  return (
    <View>
      <View></View>
    </View>
  );
}

const screenDimensions = Dimensions.get("screen");

const style = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    backgroundColor: "white",
    width: "90%",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  invisibleFullScreen: {
    height: screenDimensions.height,
    width: screenDimensions.width,
    backgroundColor: "green",
  },
});
