import React, { useState } from "react";
import { View, Modal, StyleSheet, Dimensions } from "react-native";
import AppButton from "../components/AppButton";
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";

export default function StackIt() {
  const [showModal, setShowModal] = useState(false);

  const { width, height } = Dimensions.get("screen")
  const boxSize = Math.trunc(Math.max(width, height) * 0.075)

  const engine = Matter.Engine.create({ enableSleeping: true })
  const world = engine.world;

  const rectangle = Matter.Bodies.rectangle(0, 0, 100, 200)

  return (
    <GameEngine>
      <View>
        <Modal animationType="slide" visible={showModal} transparent>
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <AppButton title="Close" onPress={() => setShowModal(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </GameEngine>
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
  },
});
