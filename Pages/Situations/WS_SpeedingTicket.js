import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Pressable,
} from "react-native";
import { useState } from "react";
import HomeButton from "../../components/HomeButton";
import AddButton from "../../components/AddButton";
import ListenButton from "../../components/ListenButton";
import { navStyle } from "../../components/NavButton.js";
import speedingticket from "../../assets/Backgrounds/speedingticket.jpg";
import AppButton from "../../components/AppButton";
import { mainStyles } from "../../components/mainStyles";

export default function WS_SpeedingTicket({ navigation }) {
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

  const Adroit = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Adroit</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>uh-DROIT</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Skillful use of one&apos;s hands or body.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Officer, your </Text>
            <Text style={style.bold}>adroit</Text>
            <Text style={mainStyles.text}>
              {" "}
              driving skills, helped me to pull my car over safely.
            </Text>
          </Text>
        </View>
        <ListenButton word="Adroit" />
        <AddButton word="Adroit" />
        {hideButton}
      </View>
    );
  };

  const Befuddle = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Befuddle</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>bee-FUD-il</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>To confuse or perplex.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              I&apos;m sorry officer that I appear{" "}
            </Text>
            <Text style={style.bold}>befuddled, </Text>
            <Text style={mainStyles.text}>
              you won&apos;t believe what happened.
            </Text>
          </Text>
        </View>
        <ListenButton word="Befuddle" />
        <AddButton word="Befuddle" />
        {hideButton}
      </View>
    );
  };

  const Canard = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Canard</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>kuh-NARD</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              A fabrication or unfounded story.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Officer, I cannot tell a </Text>
            <Text style={style.bold}>canard; </Text>
            <Text style={mainStyles.text}>
              I was speeding but let me tell you why.
            </Text>
          </Text>
        </View>
        <ListenButton word="Canard" />
        <AddButton word="Canard" />
        {hideButton}
      </View>
    );
  };

  const Disconcerting = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Disconcerting</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>diss-kun-SERT-ing</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Ruffled; upset.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Officer, I too find it </Text>
            <Text style={style.bold}>disconcerting</Text>
            <Text style={mainStyles.text}>
              {" "}
              I was driving 20 miles over the speed limit.
            </Text>
          </Text>
        </View>
        <ListenButton word="Disconcerting" />
        <AddButton word="Disconcerting" />
        {hideButton}
      </View>
    );
  };

  const Embodiment = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Embodiment</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>em-BOD-ee-ment</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              To possess a given thing or idea.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Officer, you are the </Text>
            <Text style={style.bold}>embodiment</Text>
            <Text style={mainStyles.text}> of a brave man of his duty.</Text>
          </Text>
        </View>
        <ListenButton word="Embodiment" />
        <AddButton word="Embodiment" />
        {hideButton}
      </View>
    );
  };

  const Fulminate = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Fulminate</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>FUL-mih-nate</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              To explode. Launch verbal attack.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Officer, last time you pulled me over I spoke loudly, even{" "}
            </Text>
            <Text style={style.bold}>fulminating</Text>
            <Text style={mainStyles.text}> in anger. I&apos;m sorry.</Text>
          </Text>
        </View>
        <ListenButton word="Fulminate" />
        <AddButton word="Fulminate" />
        {hideButton}
      </View>
    );
  };

  const Imperative = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Imperative</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>im-PAIR-uh-tive</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Essential, obligatory, or mandatory.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Officer, it&apos;s </Text>
            <Text style={style.bold}>imperative</Text>
            <Text style={mainStyles.text}>
              {" "}
              that I get to my meeting on time.
            </Text>
          </Text>
        </View>
        <ListenButton word="Imperative" />
        <AddButton word="Imperative" />
        {hideButton}
      </View>
    );
  };

  const Lucid = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Lucid</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>LOO-sid</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Intelligible; clear mental state.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Officer, I was daydreaming and not in a{" "}
            </Text>
            <Text style={style.bold}>lucid</Text>
            <Text style={mainStyles.text}>
              {" "}
              state when I passed that speed limit sign.
            </Text>
          </Text>
        </View>
        <ListenButton word="Lucid" />
        <AddButton word="Lucid" />
        {hideButton}
      </View>
    );
  };

  const Misconstrue = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Misconstrue</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>miss-kun-STROO</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              To misinterpret; make an error in analyzing.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Officer, I do not mean to </Text>
            <Text style={style.bold}>misconstrue</Text>
            <Text style={mainStyles.text}>
              {" "}
              the situation; I&apos;ll defer to your judgment.
            </Text>
          </Text>
        </View>
        <ListenButton word="Misconstrue" />
        <AddButton word="Misconstrue" />
        {hideButton}
      </View>
    );
  };

  const Upbraid = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Upbraid</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>miss-kun-STROO</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>To criticize a person.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Officer, please don&apos;t </Text>
            <Text style={style.bold}>upbraid</Text>
            <Text style={mainStyles.text}> me; I am a good driver.</Text>
          </Text>
        </View>
        <ListenButton word="Upbraid" />
        <AddButton word="Upbraid" />
        {hideButton}
      </View>
    );
  };

  return (
    <ImageBackground
      source={speedingticket}
      imageStyle={style.image}
      resizeMode="cover"
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>Speeding Ticket</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View style={mainStyles.centerContainer}>
              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Adroit"
                    onPress={() => setSelectedWord(<Adroit />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Befuddle"
                    onPress={() => setSelectedWord(<Befuddle />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Canard"
                    onPress={() => setSelectedWord(<Canard />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Disconcerting"
                    onPress={() => setSelectedWord(<Disconcerting />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Embodiment"
                    onPress={() => setSelectedWord(<Embodiment />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Fulminate"
                    onPress={() => setSelectedWord(<Fulminate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Imperative"
                    onPress={() => setSelectedWord(<Imperative />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Lucid"
                    onPress={() => setSelectedWord(<Lucid />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Misconstrue"
                    onPress={() => setSelectedWord(<Misconstrue />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Upbraid"
                    onPress={() => setSelectedWord(<Upbraid />)}
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
