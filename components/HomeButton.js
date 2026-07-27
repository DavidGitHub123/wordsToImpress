import React from "react";
import AppButton from "./AppButton";

export default function HomeButton({ navigation, style }) {
  return (
    <AppButton
      icon="home"
      title="Home"
      size="small"
      backgroundColor="#E89020"
      borderColor="#fff"
      fontWeight="700"
      style={style}
      onPress={() => navigation.navigate("HomeScreen")}
    />
  );
}
