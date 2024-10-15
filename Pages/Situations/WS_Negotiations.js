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
import { mainStyles } from "../../components/mainStyles";

export default function WS_Negotiations({ navigation }) {
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

  const Accord = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Accord</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>uh-CORD</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>Formal reaching of agreement.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>
              As the strike was resolved, the representatives reached an{" "}
            </Text>
            <Text style={style.bold}>accord</Text>
            <Text style={mainStyles.text}> acceptable to both sides.</Text>
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
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Cessation</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>sess-SAY-shun</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>Act of drawing to a close.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>Negotiations may bring about a </Text>
            <Text style={style.bold}>cessation</Text>
            <Text style={mainStyles.text}>
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
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Dialectic</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>die-uh-LEK-tic</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              Pertaining to logical arguments.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>His </Text>
            <Text style={style.bold}>dialectic</Text>
            <Text style={mainStyles.text}>
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
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Elusive</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>ee-LOO-siv</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              Difficult to perceive or describe.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>
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
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Flux </Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>fluks</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              Ongoing flow or unceasing change.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>.{" "}
            <Text style={mainStyles.text}>
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
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Gauntlet</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>GONT-let</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              A challenge; in medieval times a duel.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The negotiation deadline is not a goal; it is a{" "}
            </Text>
            <Text style={style.bold}>gauntlet</Text>
            <Text style={mainStyles.text}>
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
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Holistic</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>ho-LISS-tik</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              Emphasizing cooperation of the parts.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>We need to take a </Text>
            <Text style={style.bold}>holistic</Text>
            <Text style={mainStyles.text}>
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
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Impasse</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>IM-pass</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              A situation that seems to offer no solution.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The negotiations had reached an{" "}
            </Text>
            <Text style={style.bold}>impasse</Text>
            <Text style={mainStyles.text}>
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
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Mitigate </Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>MIH-tih-gate</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>
              To moderate or lessen the impact.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The situation had seemed tense until a number of{" "}
            </Text>
            <Text style={style.bold}>mitigating</Text>
            <Text style={mainStyles.text}> factors came into play.</Text>
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
        <View style={mainStyles.screen}>
          <Text style={style.subHead}>Ultimatum</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={mainStyles.text}>ul-tih-MAY-tum</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={mainStyles.text}>One&#39s last set of demands.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={mainStyles.text}>
              We agree to the 30% increase or we end the negotiations; that is
              the{" "}
            </Text>
            <Text style={style.bold}>ultimatum</Text>
            <Text style={mainStyles.text}> from my client.</Text>
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
      source={negotiation}
      imageStyle={style.image}
      resizeMode="cover"
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>Negotiations</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View style={mainStyles.centerContainer}>
              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Accord"
                    onPress={() => setSelectedWord(<Accord />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Cessation"
                    onPress={() => setSelectedWord(<Cessation />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Dialectic"
                    onPress={() => setSelectedWord(<Dialectic />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Elusive"
                    onPress={() => setSelectedWord(<Elusive />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Flux"
                    onPress={() => setSelectedWord(<Flux />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Gauntlet"
                    onPress={() => setSelectedWord(<Gauntlet />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Holistic"
                    onPress={() => setSelectedWord(<Holistic />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Impasse"
                    onPress={() => setSelectedWord(<Impasse />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Mitigate"
                    onPress={() => setSelectedWord(<Mitigate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
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
