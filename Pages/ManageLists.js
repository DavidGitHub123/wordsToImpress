import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "../components/IconButton";
import { getNamesOfLists, removeList } from "../components/listHelpers";
import { mainStyles } from "../components/mainStyles";
import HomeButton from "../components/HomeButton";
import AppButton from "../components/AppButton";
import CreateListModal from "../components/CreateListModal";

export const MASTERED_WORD_LIST =
  "(o:&A2S5Fsux > DNq ^:/$;I<vKBK_<'9>h*|qqC@k8fKD+WNg7Vxkj!+R7~70F0V;'kDWV&;{2m,91V{aOBO3)0dJB`%(c3fkSH2T,d03<3@d[rOw4n#c.$B+?E3'v.${";

export default function ManageLists({ navigation }) {
  const [lists, setLists] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
      <View key={i} style={style.listContainer}>
        <AppButton
          title={el}
          onPress={() => navigation.navigate("MyList", { listParam: el })}
          style={style.listButton}
        />
        <IconButton
          name="trash"
          onPress={() => handleDelete(el)}
          style={style.deleteButton}
        />
      </View>
    ));
  };

  return (
    <LinearGradient
      colors={["#2a5298", "#121216"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
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
              Most successful people have mastered 50 to 100 “big” words. Build
              the right list for you. The Pre-Built List is a fast way to build
              a list. Or you can analyze your writing with Build My List and let
              the app suggest words. You can also create your own list based on
              your particular interests.
            </Text>
          </View>

          <View style={mainStyles.centerContainer}>
            {error && (
              <View style={mainStyles.error}>
                <IconButton name="times" onPress={() => setError(null)} />
                <Text style={mainStyles.errorText}>{error}</Text>
              </View>
            )}
            {renderLists()}

            <View style={mainStyles.homeButton}>
              <AppButton
                title="Make a new list"
                icon="plus"
                onPress={() => setShowModal(true)}
                style={style.createButton}
              />
              <AppButton
                title="Mastered Words"
                icon="book"
                onPress={() =>
                  navigation.navigate("MyList", {
                    listParam: MASTERED_WORD_LIST,
                  })
                }
                backgroundColor="#5ba653"
                style={style.masteredButton}
              />
              <HomeButton navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  listContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  listButton: {
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    marginLeft: 10,
  },
  createButton: {
    marginTop: 20,
  },
  masteredButton: {
    backgroundColor: "#5ba653",
    marginTop: 10,
  },
});
