import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useState } from "react";
import HomeButton from "../../components/HomeButton";
import AddButton from "../../components/AddButton";
import ListenButton from "../../components/ListenButton";
import AppButton from "../../components/AppButton";
import { mainStyles } from "../../components/mainStyles";
import { LinearGradient } from "expo-linear-gradient";

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
          <Text style={mainStyles.header}>Clamorous</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>KLAM-uhr-uss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Loud; expressively vehement.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Throngs in the street roared with{" "}
            </Text>
            <Text style={style.bold}>clamorous </Text>
            <Text style={mainStyles.text}>applause.</Text>
          </Text>
        </View>
        <ListenButton word="Clamorous" />
        <AddButton word="Clamorous" />
        {hideButton}
      </View>
    );
  };

  const Diffident = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Diffident</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>DEFF-ih-dent</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Unassertive; lacking in self-worth.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>She was perhaps too </Text>
            <Text style={style.bold}>diffident </Text>
            <Text style={mainStyles.text}>
              to work comfortably in an outgoing office environment.
            </Text>
          </Text>
        </View>
        <ListenButton word="Diffident" />
        <AddButton word="Diffident" />
        {hideButton}
      </View>
    );
  };

  const Educe = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Educe</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>ee-DYOOCE</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              To bring out the potential of something.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Myron&apos;s attempt to </Text>
            <Text style={style.bold}>educe </Text>
            <Text style={mainStyles.text}>
              his sister&apos;s talents as a painter were futile.
            </Text>
          </Text>
        </View>
        <ListenButton word="Educe" />
        <AddButton word="Educe" />
        {hideButton}
      </View>
    );
  };

  const Fatuous = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Fatuous</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>FAR-yoo-uss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Stupid or foolish.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>She made so many </Text>
            <Text style={style.bold}>fatuous </Text>
            <Text style={mainStyles.text}>
              remarks at the party that I stopped apologizing for her.
            </Text>
          </Text>
        </View>
        <ListenButton word="Fatuous" />
        <AddButton word="Fatuous" />
        {hideButton}
      </View>
    );
  };

  const Gauche = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Gauche</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>gosh</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Tactless; lacking in social refinement.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              David&apos;s constant praise of his first wife was considered
            </Text>
            <Text style={style.bold}> gauche </Text>
            <Text style={mainStyles.text}>by his new mother-in-law.</Text>
          </Text>
        </View>
        <ListenButton word="Gauche" />
        <AddButton word="Gauche" />
        {hideButton}
      </View>
    );
  };

  const Harangue = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Harangue</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>huh-RANG</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>A scolding delivered in public.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Mike&apos;s </Text>
            <Text style={style.bold}>harangue </Text>
            <Text style={mainStyles.text}>
              of his team left everyone feeling uncomfortable.
            </Text>
          </Text>
        </View>
        <ListenButton word="Harangue" />
        <AddButton word="Harangue" />
        {hideButton}
      </View>
    );
  };

  const Imbibe = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Imbibe</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>im-BIBE</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>To drink alcoholic beverages.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Donald once had a drinking problem, but he no longer
            </Text>
            <Text style={style.bold}> imbibes.</Text>
          </Text>
        </View>
        <ListenButton word="Imbibe" />
        <AddButton word="Imbibe" />
        {hideButton}
      </View>
    );
  };

  const Juxtapose = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Juxtapose</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>JUK-stuh-pose</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              To place side by side for comparison.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>He </Text>
            <Text style={style.bold}>juxtaposed </Text>
            <Text style={mainStyles.text}>
              the two paragraphs in the essay and found evidence of plagiarism.
            </Text>
          </Text>
        </View>
        <ListenButton word="Juxtapose" />
        <AddButton word="Juxtapose" />
        {hideButton}
      </View>
    );
  };

  const Largess = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Largess</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>lar-ZHESS</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Generously bestowed gifts.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Her father&apos;s </Text>
            <Text style={style.bold}>largess </Text>
            <Text style={mainStyles.text}>
              was the only thing standing between Barbara and bankruptcy.
            </Text>
          </Text>
        </View>
        <ListenButton word="Largess" />
        <AddButton word="Largess" />
        {hideButton}
      </View>
    );
  };

  const Melodious = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Melodious</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>muh-LOW-dee-us</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Pleasant or agreeable to the ear.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>The </Text>
            <Text style={style.bold}>melodious </Text>
            <Text style={mainStyles.text}>
              tones of his mother&apos;s voice reminded Wayne of his childhood.
            </Text>
          </Text>
        </View>
        <ListenButton word="Melodious" />
        <AddButton word="Melodious" />
        {hideButton}
      </View>
    );
  };

  return (
    <LinearGradient colors={["#2c3e50", "#34495e"]} style={mainStyles.page}>
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
                <HomeButton navigation={navigation} />
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
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
