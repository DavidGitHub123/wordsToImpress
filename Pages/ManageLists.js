import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "../components/IconButton";
import { getNamesOfLists, removeList } from "../components/listHelpers";
import { mainStyles } from "../components/mainStyles";
import HomeButton from "../components/HomeButton";
import AppButton from "../components/AppButton";
import CreateListModal from "../components/CreateListModal";
import { NavButtonWord } from "../components/NavButtonWord";

export default function ManageLists({ navigation }) {
  const [lists, setLists] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showMasteredWords, setShowMasteredWords] = useState(false);
  

  const getAndSetLists = async () =>
    setLists((await getNamesOfLists()).sort((a, b) => a.localeCompare(b)));

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

  const renderList = () => {
    const selectedList = showMasteredWords ? masteredWords : listOrLoading;

    if (selectedList === null) {
      return [
        <Text key={0} style={mainStyles.text}>
          Loading...
        </Text>,
      ];
    }

    return selectedList.map((el, i) => (
      <View key={i} style={style.wordDeleteContainer}>
        <NavButtonWord
          navigation={navigation}
          title={el.word}
          destination="Word"
          backgroundColor={el.mastery >= 10 ? "#5ba653" : null}
        />
        {!showMasteredWords && (
          <IconButton
            name="trash"
            onPress={() => handleDelete(el.word)}
            style={style.deleteButton}
          />
        )}
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
          <CreateListModal
            showModal={showModal}
            setShowModal={setShowModal}
            lists={lists}
            updateLists={getAndSetLists}
          />
          <View style={mainStyles.screen}>
            <Text style={mainStyles.header}>My Vocab Lists</Text>
            <Text style={mainStyles.subText}>
            Most successful people have mastered 50 to 100 “big” words. 
            Build the right list for you with the Pre-Built List. 
            You can analyze your writing with Build My List and let the app suggest words.
            Or create your own list based on your particular interests. 
            {/* Build small lists to master a few words at a time. Or one master list. 
            How do you eat an elephant? One bite at a time. */}
            </Text>
          </View>

          <View style={mainStyles.centerContainer}>

            {error && (
              <View style={mainStyles.error}>
                <IconButton name="times" onPress={() => setError(null)} />
                <Text>{error}</Text>
              </View>
            )}
            {renderLists()}

            <View style={mainStyles.homeButton}>
              <AppButton
                title="Make a new list"
                icon="plus"
                onPress={() => setShowModal(true)}
              />
              <AppButton
                title="Mastered Words"
                icon="book"
                onPress={() => setShowMasteredWords(true)}
                backgroundColor="#5ba653"
              />
              {/* <AppButton
                title="Back"
                onPress={() => navigation.goBack()}
              ></AppButton> */}
              <HomeButton navigation={navigation} />
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
});
