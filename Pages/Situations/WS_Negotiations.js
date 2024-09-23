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
import negotiation from "../../assets/Backgrounds/negotiation.jpg";
import AppButton from "../../components/AppButton";

export default function WS_Negotiations({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const hideButton = (
    <Pressable style={style.appButton}>
      <AppButton
        icon="sign-in"
        title="Hide"
        onPress={() => setSelectedWord(null)}
      />
    </Pressable>
  );

  const Accord = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Accord</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>uh-CORD</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Formal reaching of agreement.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              As the strike was resolved, the representatives reached an{" "}
            </Text>
            <Text style={style.bold}>accord</Text>
            <Text style={style.text}> acceptable to both sides.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Cessation = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Cessation</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>sess-SAY-shun</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Act of drawing to a close.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Negotiations may bring about a </Text>
            <Text style={style.bold}>cessation</Text>
            <Text style={style.text}>
              {" "}
              of the contracts and both parties will be happy.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Dialectic = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Dialectic</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>die-uh-LEK-tic</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Pertaining to logical arguments.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>His </Text>
            <Text style={style.bold}>dialectic</Text>
            <Text style={style.text}>
              {" "}
              thoroughness destroy his opponent&#39s argument.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Elusive = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Elusive</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>ee-LOO-siv</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Difficult to perceive or describe.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              Our goals are easily understood; the nature of the obstacles is
              somewhat more{" "}
            </Text>
            <Text style={style.bold}>elusive</Text>.
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Flux = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Flux </Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>fluks</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Ongoing flow or unceasing change.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>.{" "}
            <Text style={style.text}>
              Negotiations were difficult because the organization&#39s plans
              were in a state of continual{" "}
            </Text>
            <Text style={style.bold}>flux</Text>.
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Gauntlet = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Gauntlet</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>GONT-let</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              A challenge; in medieval times a duel.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              The negotiation deadline is not a goal; it is a{" "}
            </Text>
            <Text style={style.bold}>gauntlet</Text>
            <Text style={style.text}>
              {" "}
              that has been thrown down before us.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Holistic = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Holistic</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>ho-LISS-tik</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              Emphasizing cooperation of the parts.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>We need to take a </Text>
            <Text style={style.bold}>holistic</Text>
            <Text style={style.text}>
              {" "}
              approach to closing this deal to ensure all parties are satisfied.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Impasse = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Impasse</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>IM-pass</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              A situation that seems to offer no solution.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>The negotiations had reached an </Text>
            <Text style={style.bold}>impasse</Text>
            <Text style={style.text}>
              , both sides needed to make more compromises.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Mitigate = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Mitigate </Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>MIH-tih-gate</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>To moderate or lessen the impact.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              The situation had seemed tense until a number of{" "}
            </Text>
            <Text style={style.bold}>mitigating</Text>
            <Text style={style.text}> factors came into play.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Ultimatum = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Ultimatum</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>ul-tih-MAY-tum</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>One&#39s last set of demands.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              We agree to the 30% increase or we end the negotiations; that is
              the{" "}
            </Text>
            <Text style={style.bold}>ultimatum</Text>
            <Text style={style.text}> from my client.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={negotiation}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>Negotiations</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View>
              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Accord"
                    onPress={() => setSelectedWord(<Accord />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Cessation"
                    onPress={() => setSelectedWord(<Cessation />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Dialectic"
                    onPress={() => setSelectedWord(<Dialectic />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Elusive"
                    onPress={() => setSelectedWord(<Elusive />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Flux"
                    onPress={() => setSelectedWord(<Flux />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Gauntlet"
                    onPress={() => setSelectedWord(<Gauntlet />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Holistic"
                    onPress={() => setSelectedWord(<Holistic />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Impasse"
                    onPress={() => setSelectedWord(<Impasse />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Mitigate"
                    onPress={() => setSelectedWord(<Mitigate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Ultimatum"
                    onPress={() => setSelectedWord(<Ultimatum />)}
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
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
    paddingVertical: 30,
  },

  image: {
    opacity: 0.5,
  },

  header: {
    fontSize: 40,
    textShadowColor: "#000",
    textShadowRadius: 5,
    color: "#f0f8ff",
    fontWeight: "800",
    paddingVertical: 10,
    textAlign: "center",
  },

  appButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  component: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingBottom: 200,
  },

  screen: {
    opacity: 0.7,
    backgroundColor: "black",
    marginBottom: 40,
    padding: 20,
  },

  subHead: {
    fontSize: 40,
    color: "#FF8C00",
  },

  text: {
    fontSize: 25,
    color: "#fff",
  },

  title: {
    fontSize: 25,
    color: "#FF8C00",
  },

  bold: {
    fontSize: 25,
    fontWeight: 600,
    color: "#FF8C00",
  },

  space: {
    paddingTop: 10,
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },

  appButtonContainer: {
    width: 200,
    marginVertical: 2,
  },

  bottomButtons: {
    paddingTop: 20,
  },
});
