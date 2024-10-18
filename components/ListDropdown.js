import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { defaultList, getNamesOfLists } from "./listHelpers";

export default function ListDropdown(Props) {
  const { setParent, initialList } = Props;
  const [selectedList, setSelectedList] = useState(
    initialList ? initialList : defaultList,
  );
  const [lists, setLists] = useState([
    { label: defaultList, value: defaultList },
  ]);

  const loadAndSetLists = async () => {
    const userLists = (await getNamesOfLists()).map((el) => ({
      label: el,
      value: el,
    }));
    setLists(userLists);
  };
  useEffect(() => {
    loadAndSetLists();
  }, []);

  const handleDropdownChange = (list) => {
    setParent(list.value);
    setSelectedList(list.value);
  };

  return (
    <View>
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
    marginLeft: 40,
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    backgroundColor: "white",
    width: dimensions.width * 0.6,
    borderRadius: 10,
  },
  placeholderStyle: {
    fontSize: 24,
  },
  selectedTextStyle: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '600'
  },
  inputSearchStyle: {
    height: 30,
    fontSize: 20,
    fontWeight: '600'
  },
});
