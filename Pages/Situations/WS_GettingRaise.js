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
import gettingraise3 from "../../assets/Backgrounds/gettingraise3.jpg";
import AppButton from "../../components/AppButton";

export default function WS_GettingRaise({ navigation }) {
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

  const Aggrandize = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Aggrandize</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>uh-GRAND-ize</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Make to appear great.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>I don&#39t want to appear to </Text>
            <Text style={style.bold}>aggrandize </Text>
            <Text style={style.text}>
              myself, but I did lead my sales team to triple sales.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Benevolent = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Benevolent</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>be-NEV-i-lent</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Tendency to do well toward others.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>You are a </Text>
            <Text style={style.bold}>benevolent </Text>
            <Text style={style.text}>
              and generous person to have given me so many opportunities.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Celerity = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Celerity</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>suh-LAIR-ih-tee</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              Speed; swiftness of action or motion.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              Right away! I will carry out your orders with{" "}
            </Text>
            <Text style={style.bold}>celerity.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Debilitate = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Debilitate</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>dih-BILL-ih-tate</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>To enfeeble or weaken.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>The team has a </Text>
            <Text style={style.bold}>debilitating </Text>
            <Text style={style.text}>
              impact on our productivity, and sales are down.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Effete = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Effete</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>uh-FEET</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Lacking vitality; without force.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              The new department is lacking force with no results; they are{" "}
            </Text>
            <Text style={style.bold}>effete.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Facetious = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Facetious</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>fuh-SEE-shuss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Playful talk; communicated in jest.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Serious, I was just being </Text>
            <Text style={style.bold}>facetious </Text>
            <Text style={style.text}>about your wife&#39s dress.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Garrulity = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Garrulity</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>guh-ROO-lih-tee</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Talkativeness.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Michael&#39s </Text>
            <Text style={style.bold}>garrulity </Text>
            <Text style={style.text}>
              of non-stop talking gave him the reputation of a motor-mouth.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Halcyon = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Halcyon</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>HAL-see-on</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Tranquil, peaceful.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>The company&#39s </Text>
            <Text style={style.bold}>halcyon </Text>
            <Text style={style.text}>
              years as the leader were over; new competitors had moved into
              their markets.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Iconoclastic = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Iconoclastic</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>I-kon-uh-KLASS-tik</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              Attacking cherished institutions or beliefs.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Boss, your </Text>
            <Text style={style.bold}>iconoclastic </Text>
            <Text style={style.text}>
              approach has reignited success in this company, although the older
              executives resent you.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Neplusultra = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Ne Plus Ultra</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>nay plooce OOL-truhk</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              The highest possible embodiment of something.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Boss, you are the </Text>
            <Text style={style.bold}>ne plus ultra </Text>
            <Text style={style.text}>
              of bosses; I can&#39t imagine working for someone more capable.
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
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground
          source={gettingraise3}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>Getting A Raise</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View>
              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Aggrandize"
                    onPress={() => setSelectedWord(<Aggrandize />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Benevolent"
                    onPress={() => setSelectedWord(<Benevolent />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Celerity"
                    onPress={() => setSelectedWord(<Celerity />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Debilitate"
                    onPress={() => setSelectedWord(<Debilitate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Effete"
                    onPress={() => setSelectedWord(<Effete />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Facetious"
                    onPress={() => setSelectedWord(<Facetious />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Garrulity"
                    onPress={() => setSelectedWord(<Garrulity />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Halcyon"
                    onPress={() => setSelectedWord(<Halcyon />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Iconoclastic"
                    onPress={() => setSelectedWord(<Iconoclastic />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Ne Plus Ultra"
                    onPress={() => setSelectedWord(<Neplusultra />)}
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
