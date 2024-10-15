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
import dinnerparty from "../../assets/Backgrounds/dinnerparty.jpg";
import AppButton from "../../components/AppButton";
import { mainStyles } from "../../components/mainStyles";

export default function WS_DinnerParty({ navigation }) {
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

  const Clamorous = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Clamorous</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>KLAM-uhr-uss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>Loud; expressively vehement.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Throngs in the street roared with{" "}
            </Text>
            <Text style={style.bold}>clamorous </Text>
            <Text style={mainStyles.text}>applause.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Diffident = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Diffident</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>DEFF-ih-dent</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              Unassertive; lacking in self-worth.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>She was perhaps too </Text>
            <Text style={style.bold}>diffident </Text>
            <Text style={mainStyles.text}>
              to work comfortably in an outgoing office environment.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Educe = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Educe</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>ee-DYOOCE</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              To bring out the potential of something.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>Myron&#39s attempt to </Text>
            <Text style={style.bold}>educe </Text>
            <Text style={mainStyles.text}>
              his sister&#39s talents as a painter were futile.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Fatuous = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Fatuous</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>FAR-yoo-uss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>Stupid or foolish.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>She made so many </Text>
            <Text style={style.bold}>fatuous </Text>
            <Text style={mainStyles.text}>
              remarks at the party that I stopped apologizing for her.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Gauche = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Gauche</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>gosh</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              Tactless; lacking in social refinement.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>
              David&#39s constant praise of his first wife was considered
            </Text>
            <Text style={style.bold}>gauche </Text>
            <Text style={mainStyles.text}>by his new mother-in-law.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Harangue = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Harangue</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>huh-RANG</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>A scolding delivered in public.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>Mike&#39s </Text>
            <Text style={style.bold}>harangue </Text>
            <Text style={mainStyles.text}>
              of his team left everyone feeling uncomfortable.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Imbibe = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Imbibe</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>im-BIBE</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>To drink alcoholic beverages.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Donald once had a drinking problem, but he no longer
            </Text>
            <Text style={style.bold}>imbibes.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Juxtapose = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Juxtapose</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>JUK-stuh-pose</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              To place side by side for comparison.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>He </Text>
            <Text style={style.bold}>juxtaposed </Text>
            <Text style={mainStyles.text}>
              the two paragraphs in the essay and found evidence of plagiarism.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Largess = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Largess</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>lar-ZHESS</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>Generously bestowed gifts.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>Her father&#39s </Text>
            <Text style={style.bold}>largess </Text>
            <Text style={mainStyles.text}>
              was the only thing standing between Barbara and bankruptcy.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Melodious = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Melodious</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>muh-LOW-dee-us</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              Pleasant or agreeable to the ear.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>The </Text>
            <Text style={style.bold}>melodious </Text>
            <Text style={mainStyles.text}>
              tones of his mother&#39s voice reminded Wayne of his childhood.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  return (
    <ImageBackground
      source={dinnerparty}
      imageStyle={style.image}
      resizeMode="cover"
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>Dinner Party</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View style={mainStyles.centerContainer}>
              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Clamorous"
                    onPress={() => setSelectedWord(<Clamorous />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Diffident"
                    onPress={() => setSelectedWord(<Diffident />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Educe"
                    onPress={() => setSelectedWord(<Educe />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Fatuous"
                    onPress={() => setSelectedWord(<Fatuous />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Gauche"
                    onPress={() => setSelectedWord(<Gauche />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Harangue"
                    onPress={() => setSelectedWord(<Harangue />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Imbibe"
                    onPress={() => setSelectedWord(<Imbibe />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Juxtapose"
                    onPress={() => setSelectedWord(<Juxtapose />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Largess"
                    onPress={() => setSelectedWord(<Largess />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Melodious"
                    onPress={() => setSelectedWord(<Melodious />)}
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

  screen: {
    opacity: 0.9,
    backgroundColor: "black",
    marginBottom: 40,
    padding: 20,
  },

  subHead: {
    fontSize: 40,
    color: "#FF8C00",
  },

  title: {
    fontSize: 25,
    color: "#FF8C00",
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
