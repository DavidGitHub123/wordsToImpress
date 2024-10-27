import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import HomeButton from "../../components/HomeButton";
import AddButton from "../../components/AddButton";
import ListenButton from "../../components/ListenButton";
import { navStyle } from "../../components/NavButton.js";
import politics from "../../assets/Backgrounds/politics.jpg";
import AppButton from "../../components/AppButton";
import { mainStyles } from "../../components/mainStyles";

export default function WS_Politics({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const hideButton = (
    <Pressable style={mainStyles.centerContainer}>
      <AppButton
        icon="sign-in"
        title="Hide"
        onPress={() => setSelectedWord(null)}
      />
    </Pressable>
  );

  const Capitulate = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Capitulate</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>kuh-PIT-yoo-late</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Give up, surrender.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The ambassador had been instructed to show flexibility, but not to{" "}
            </Text>
            <Text style={style.bold}>capitulate </Text>
            <Text style={mainStyles.text}>on trade issues.</Text>
          </Text>
        </View>
        <ListenButton word="Capitulate" />
        <AddButton word="Capitulate" />
        {hideButton}
      </View>
    );
  };

  const Decorum = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Decorum</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>di-COR-um</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Social propriety; dignified conduct.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Though the delegates were frustrated at the chairman, strict{" "}
            </Text>
            <Text style={style.bold}>decorum</Text>
            <Text style={mainStyles.text}> was observed in the meeting.</Text>
          </Text>
        </View>
        <ListenButton word="Decorum" />
        <AddButton word="Decorum" />
        {hideButton}
      </View>
    );
  };

  const Gainsay = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Gainsay</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>GANE-say</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>To declare false.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The principles of the Bill of Rights admit no{" "}
            </Text>
            <Text style={style.bold}>gainsaying</Text>
            <Text style={mainStyles.text}>
              ; they have proven to have created a superior form of government.
            </Text>
          </Text>
        </View>
        <ListenButton word="Gainsay" />
        <AddButton word="Gainsay" />
        {hideButton}
      </View>
    );
  };

  const Hegemony = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Hegemony</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>he-JEM-uh-nee</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Predominant influence, especially in affairs of nations.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Our foe&apos;s </Text>
            <Text style={style.bold}>hegemony</Text>
            <Text style={mainStyles.text}>
              {" "}
              will not stop with his control of smaller nations.
            </Text>
          </Text>
        </View>
        <ListenButton word="Hegemony" />
        <AddButton word="Hegemony" />
        {hideButton}
      </View>
    );
  };

  const Imbroglio = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Imbroglio</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>im-BROA-lee-o</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              An entanglement or complicated misunderstanding.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>The recent </Text>
            <Text style={style.bold}>imbroglio</Text>
            <Text style={mainStyles.text}>
              {" "}
              over the conflict-of-interest violations has not improved the
              Mayor&apos;s standing.
            </Text>
          </Text>
        </View>
        <ListenButton word="Imbroglio" />
        <AddButton word="Imbroglio" />
        {hideButton}
      </View>
    );
  };

  const Jingoistic = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Jingoistic</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>jin-go-ISS-tik</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Aggressively and overbearingly patriotic.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Such </Text>
            <Text style={style.bold}>jingoistic</Text>
            <Text style={mainStyles.text}>
              {" "}
              babble can hardly be said to pass for descent advice to a head of
              state.
            </Text>
          </Text>
        </View>
        <ListenButton word="Jingoistic" />
        <AddButton word="Jingoistic" />
        {hideButton}
      </View>
    );
  };

  const Liaison = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Liaison</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>lee-ay-ZON</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              A communications channel or go-between.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Captain Morse was met by an Air Force{" "}
            </Text>
            <Text style={style.bold}>liaison</Text>
            <Text style={mainStyles.text}> within minutes of his arrival.</Text>
          </Text>
        </View>
        <ListenButton word="Liaison" />
        <AddButton word="Liaison" />
        {hideButton}
      </View>
    );
  };

  const Maleficence = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Maleficence</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>muh-LEF-ih-sence</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              The undertaking of evil or harmful acts.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>The long-ignored </Text>
            <Text style={style.bold}>maleficence</Text>
            <Text style={mainStyles.text}>
              {" "}
              of the corrupt prison system was finally exposed.
            </Text>
          </Text>
        </View>
        <ListenButton word="Maleficence" />
        <AddButton word="Maleficence" />
        {hideButton}
      </View>
    );
  };

  const Quagmire = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Quagmire</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>KWAG-mire</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              An entanglement that offers no means of escape.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The hostage situation threatens to be the worst{" "}
            </Text>
            <Text style={style.bold}>quagmire</Text>
            <Text style={mainStyles.text}> of this administration.</Text>
          </Text>
        </View>
        <ListenButton word="Quagmire" />
        <AddButton word="Quagmire" />
        {hideButton}
      </View>
    );
  };

  const Unilateral = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Unilateral</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>yoo-ni-Lat-ur-el</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Undertaken independently.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The allies resolved that no member country would take any{" "}
            </Text>
            <Text style={style.bold}>unilateral</Text>
            <Text style={mainStyles.text}>
              {" "}
              action to threaten mutual security.
            </Text>
          </Text>
        </View>
        <ListenButton word="Unilateral" />
        <AddButton word="Unilateral" />
        {hideButton}
      </View>
    );
  };

  return (
    <ImageBackground
      source={politics}
      imageStyle={style.image}
      resizeMode="cover"
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>Politics</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View style={mainStyles.centerContainer}>
              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Capitulate"
                    onPress={() => setSelectedWord(<Capitulate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Decorum"
                    onPress={() => setSelectedWord(<Decorum />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Gainsay"
                    onPress={() => setSelectedWord(<Gainsay />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Hegemony"
                    onPress={() => setSelectedWord(<Hegemony />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Imbroglio"
                    onPress={() => setSelectedWord(<Imbroglio />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Jingoistic"
                    onPress={() => setSelectedWord(<Jingoistic />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Liaison"
                    onPress={() => setSelectedWord(<Liaison />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Maleficence"
                    onPress={() => setSelectedWord(<Maleficence />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Quagmire"
                    onPress={() => setSelectedWord(<Quagmire />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Unilateral"
                    onPress={() => setSelectedWord(<Unilateral />)}
                  />
                </Pressable>
              </View>

              <View style={style.bottomButtons}>
                <Pressable style={navStyle.appButton}>
                  <AppButton
                    title="Back"
                    onPress={() => navigation.goBack()}
                  ></AppButton>
                </Pressable>
                <HomeButton navigation={navigation} />
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  image: {
    opacity: 0.9,
  },

  component: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingBottom: 200,
  },

  bold: {
    fontSize: 25,
    fontWeight: "600",
    color: "#FF8C00",
  },

  space: {
    paddingTop: 10,
  },

  bottomButtons: {
    paddingTop: 20,
  },
});
