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

export default function WS_GettingRaise({ navigation }) {
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

  const Aggrandize = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Aggrandize</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>uh-GRAND-ize</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Make to appear great.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>I don&apos;t want to appear to </Text>
            <Text style={style.bold}>aggrandize </Text>
            <Text style={mainStyles.text}>
              myself, but I did lead my sales team to triple sales.
            </Text>
          </Text>
        </View>
        <ListenButton word="Aggrandize" />
        <AddButton word="Aggrandize" />
        {hideButton}
      </View>
    );
  };

  const Benevolent = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Benevolent</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>be-NEV-i-lent</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Tendency to do well toward others.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>You are a </Text>
            <Text style={style.bold}>benevolent </Text>
            <Text style={mainStyles.text}>
              and generous person to have given me so many opportunities.
            </Text>
          </Text>
        </View>
        <ListenButton word="Benevolent" />
        <AddButton word="Benevolent" />
        {hideButton}
      </View>
    );
  };

  const Celerity = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Celerity</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>suh-LAIR-ih-tee</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Speed; swiftness of action or motion.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Right away! I will carry out your orders with{" "}
            </Text>
            <Text style={style.bold}>celerity.</Text>
          </Text>
        </View>
        <ListenButton word="Celerity" />
        <AddButton word="Celerity" />
        {hideButton}
      </View>
    );
  };

  const Debilitate = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Debilitate</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>dih-BILL-ih-tate</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>To enfeeble or weaken.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>The team has a </Text>
            <Text style={style.bold}>debilitating </Text>
            <Text style={mainStyles.text}>
              impact on our productivity, and sales are down.
            </Text>
          </Text>
        </View>
        <ListenButton word="Debilitate" />
        <AddButton word="Debilitate" />
        {hideButton}
      </View>
    );
  };

  const Effete = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Effete</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>uh-FEET</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Lacking vitality; without force.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The new department is lacking force with no results; they are{" "}
            </Text>
            <Text style={style.bold}>effete.</Text>
          </Text>
        </View>
        <ListenButton word="Effete" />
        <AddButton word="Effete" />
        {hideButton}
      </View>
    );
  };

  const Facetious = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Facetious</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>fuh-SEE-shuss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Playful talk; communicated in jest.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Serious, I was just being </Text>
            <Text style={style.bold}>facetious </Text>
            <Text style={mainStyles.text}>about your wife&apos;s dress.</Text>
          </Text>
        </View>
        <ListenButton word="Facetious" />
        <AddButton word="Facetious" />
        {hideButton}
      </View>
    );
  };

  const Garrulity = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Garrulity</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>guh-ROO-lih-tee</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Talkativeness.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Michael&apos;s </Text>
            <Text style={style.bold}>garrulity </Text>
            <Text style={mainStyles.text}>
              of non-stop talking gave him the reputation of a motor-mouth.
            </Text>
          </Text>
        </View>
        <ListenButton word="Garrulity" />
        <AddButton word="Garrulity" />
        {hideButton}
      </View>
    );
  };

  const Halcyon = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Halcyon</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>HAL-see-on</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Tranquil, peaceful.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>The company&apos;s </Text>
            <Text style={style.bold}>halcyon </Text>
            <Text style={mainStyles.text}>
              years as the leader were over; new competitors had moved into
              their markets.
            </Text>
          </Text>
        </View>
        <ListenButton word="Halcyon" />
        <AddButton word="Halcyon" />
        {hideButton}
      </View>
    );
  };

  const Iconoclastic = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Iconoclastic</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>I-kon-uh-KLASS-tik</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Attacking cherished institutions or beliefs.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Boss, your </Text>
            <Text style={style.bold}>iconoclastic </Text>
            <Text style={mainStyles.text}>
              approach has reignited success in this company, although the older
              executives resent you.
            </Text>
          </Text>
        </View>
        <ListenButton word="Iconoclastic" />
        <AddButton word="Iconoclastic" />
        {hideButton}
      </View>
    );
  };

  const Neplusultra = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Ne Plus Ultra</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>nay plooce OOL-truhk</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              The highest possible embodiment of something.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Boss, you are the </Text>
            <Text style={style.bold}>ne plus ultra </Text>
            <Text style={mainStyles.text}>
              of bosses; I can&apos;t imagine working for someone more capable.
            </Text>
          </Text>
        </View>
        <ListenButton word="Ne Plus Ultra" />
        <AddButton word="Ne Plus Ultra" />
        {hideButton}
      </View>
    );
  };

  return (
    <LinearGradient colors={["#2c3e50", "#34495e"]} style={mainStyles.page}>
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>Getting A Raise</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View style={mainStyles.centerContainer}>
              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Aggrandize"
                    onPress={() => setSelectedWord(<Aggrandize />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Benevolent"
                    onPress={() => setSelectedWord(<Benevolent />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Celerity"
                    onPress={() => setSelectedWord(<Celerity />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Debilitate"
                    onPress={() => setSelectedWord(<Debilitate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Effete"
                    onPress={() => setSelectedWord(<Effete />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Facetious"
                    onPress={() => setSelectedWord(<Facetious />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Garrulity"
                    onPress={() => setSelectedWord(<Garrulity />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Halcyon"
                    onPress={() => setSelectedWord(<Halcyon />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Iconoclastic"
                    onPress={() => setSelectedWord(<Iconoclastic />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Ne Plus Ultra"
                    onPress={() => setSelectedWord(<Neplusultra />)}
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
