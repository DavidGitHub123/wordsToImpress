import React from "react";
import AppButton from "./AppButton";

export default function HomeButton({ navigation, style }) {
  return (
    <AppButton
      icon="home"
      title="Home"
      size="small"
      backgroundColor="rgba(255,255,255,0.05)"
      borderColor="rgba(255,255,255,0.12)"
      fontWeight="700"
      style={style}
      onPress={() => navigation.navigate("HomeScreen")}
    />
  );
}
