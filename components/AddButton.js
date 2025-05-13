import React, { useState, useEffect, useRef } from "react";
import AppButton from "./AppButton";
import IconButton from "./IconButton";
import { StyleSheet, Modal, View, Text } from "react-native";
import { mainStyles } from "./mainStyles";
import { addOneWordToList, defaultList, getNamesOfLists } from "./listHelpers";

export default function AddButton(props) {
  const [showModal, setShowModal] = useState(false);
  const wordRef = useRef(null);
  const [lists, setLists] = useState(null);
  const defaultListRef = useRef(null);

  const getAndSetLists = async () => {
    const allLists = await getNamesOfLists();

    defaultListRef.current = allLists.includes(defaultList)
      ? defaultList
      : allLists[0];

    setLists(allLists);
  };

  useEffect(() => {
    getAndSetLists();
  }, []);

  const handleAddToList = async (word) => {
    if (lists === null) return;

    if (lists.length > 1 || !defaultListRef.current) {
      setShowModal(true);
      wordRef.current = word;
      return;
    }

    addOneWordToList(defaultListRef.current, word);
  };

  const handleCloseModal = async (list) => {
    if (list) {
      await addOneWordToList(list, wordRef.current);
      wordRef.current = null;
    }
    setShowModal(false);
  };

  const renderLists = () => {
    if (lists === null) {
      return <Text style={mainStyles.text}>Loading lists...</Text>;
    }
    return lists.map((el, i) => (
      <AppButton
        key={i}
        title={el}
        onPress={() => handleCloseModal(el)}
        backgroundColor="rgba(255,255,255,0.05)"
        borderColor="rgba(255,255,255,0.12)"
        fontWeight="600"
        size="medium"
      />
    ));
  };

  return (
    <View style={style.container}>
      <Modal visible={showModal} onRequestClose={handleCloseModal} transparent>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View style={mainStyles.centerContainer}>{renderLists()}</View>
            <IconButton name="times" onPress={() => handleCloseModal()} />
          </View>
        </View>
      </Modal>

      <AppButton
        icon="plus"
        title="Add to My List"
        onPress={() => handleAddToList(props.word)}
        size="medium"
        backgroundColor="rgba(255,255,255,0.05)"
        borderColor="rgba(255,255,255,0.12)"
        fontWeight="700"
        style={{ width: 240 }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 15,
  },
});
