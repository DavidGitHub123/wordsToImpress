import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "../components/IconButton";
import { getNamesOfLists, removeList } from "../components/listHelpers";
import { mainStyles } from "../components/mainStyles";
import HomeButton from "../components/HomeButton";
import AppButton from "../components/AppButton";

export default function ManageLists({ navigation }) {
  const [lists, setLists] = useState(null);
  const [error, setError] = useState(null);

  const getAndSetLists = async () => setLists(await getNamesOfLists());

  useEffect(() => {
    getAndSetLists();
  }, []);

  const handleDelete = async (name) => {
    if (lists.length <= 1) {
      setError("Can't delete last list");
      return;
    }
    await removeList(name);
    await getAndSetLists();
  };
  const renderLists = () => {
    if (lists === null) {
      return <Text style={mainStyles.text}>Getting lists</Text>;
    }
    return lists.map((el, i) => (
      <View key={i} style={style.flex}>
        <AppButton
          title={el}
          onPress={() => navigation.navigate("MyList", { listParam: el })}
        />
        <IconButton name="trash" onPress={() => handleDelete(el)} />
      </View>
    ));
  };
  return (
    <LinearGradient
      colors={["#6699FF", "#335C81"]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 0.5, y: 0.5 }}
      opacity={1.0}
      style={mainStyles.page}
    >
      <SafeAreaView>
        <ScrollView alwaysBounceHorizontal={true}>
          <View style={mainStyles.centerContainer}>
            {error && (
              <View style={style.error}>
                <IconButton name="times" onPress={() => setError(null)} />
                <Text>{error}</Text>
              </View>
            )}
            {renderLists()}

            <View style={style.bottomButton}>
              <AppButton
                title="Back"
                onPress={() => navigation.goBack()}
              ></AppButton>
              <HomeButton />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  error: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5555",
    borderRadius: 20,
    height: 30,
    width: 200,
  },
  bottomButton: {
    marginTop: 30,
  },
});
