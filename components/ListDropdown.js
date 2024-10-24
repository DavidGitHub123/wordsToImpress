import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { defaultList, getNamesOfLists } from "./listHelpers";

export default function ListDropdown(Props) {
  const { setParent, style } = Props;
  const [selectedList, setSelectedList] = useState(null);
  const [lists, setLists] = useState([{ label: "Loading...", value: "null" }]);

  const loadAndSetLists = async () => {
    const allLists = await getNamesOfLists();
    const userLists = allLists.map((el) => ({
      label: el,
      value: el,
    }));
    if (allLists.includes(defaultList)) {
      setParent(defaultList);
      setSelectedList(defaultList);
    } else {
      setParent(allLists[0]);
      setSelectedList(allLists[0]);
    }
    setLists(userLists);
  };
  useEffect(() => {
    loadAndSetLists();
  }, []);

  const handleDropdownChange = (list) => {
    if (!list.value) {
      return;
    }
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
    margin: "auto",
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
