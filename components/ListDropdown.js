import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
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
    if (!list.value) return;
    setParent(list.value);
    setSelectedList(list.value);
  };

  const renderItem = (item) => {
    const isSelected = item.value === selectedList;

    return (
      <View style={[styles.item, isSelected ? styles.selectedItem : null]}>
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    );
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
        itemTextStyle={styles.itemTextStyle}
        containerStyle={styles.dropdownContainer}
        onChange={handleDropdownChange}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select a list"
        renderItem={renderItem}
        search
      />
    </View>
  );
}

const dimensions = Dimensions.get("screen");

const styles = StyleSheet.create({
  dropdown: {
    height: 48,
    width: dimensions.width * 0.7,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderColor: "rgba(255,255,255,0.15)",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  dropdownContainer: {
    backgroundColor: "rgba(40, 42, 54, 0.95)",
    borderRadius: 12,
    padding: 8,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textShadowColor: "#00ffaa",
    textShadowRadius: 4,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#aaa",
  },
  itemTextStyle: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 6,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: "#2e2e2e",
    color: "#fff",
    paddingHorizontal: 10,
  },
  item: {
    padding: 12,
    borderRadius: 8,
  },

  selectedItem: {
    backgroundColor: "#44475a", // darker highlight background
  },

  itemText: {
    color: "#fff",
    fontSize: 16,
  },
});
