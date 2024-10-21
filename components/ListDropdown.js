import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { defaultList, getNamesOfLists } from "./listHelpers";

export default function ListDropdown(Props) {
  const { setParent, initialList, style } = Props;
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
    <View style={style}>
      <Dropdown
        data={lists}
        value={selectedList}
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        inputSearchStyle={styles.inputSearchStyle}
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

const styles = StyleSheet.create({
  dropdown: {
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
    fontWeight: "600",
  },
  inputSearchStyle: {
    height: 30,
    fontSize: 20,
    fontWeight: "600",
  },
});
