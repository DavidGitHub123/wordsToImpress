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
import AppButton from "../../components/AppButton";
import HomeButton from "../../components/HomeButton";
import AddButton from "../../components/AddButton";
import ListenButton from "../../components/ListenButton";
import { navStyle } from "../../components/NavButton.js";
import jobinterview from "../../assets/Backgrounds/jobinterview.jpg";
import { mainStyles } from "../../components/mainStyles";

export default function WS_JobInterview({ navigation }) {
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

  const Baccalaureate = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Baccalaureate</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>bak-uh-LOR-ee-it</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Degree awarded upon completion of an undergraduate program.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>I received my </Text>
            <Text style={style.bold}>baccalaureate</Text>
            <Text style={mainStyles.text}>
              {" "}
              in 2020 from Brandeis University.
            </Text>
          </Text>
        </View>
        <ListenButton word="Baccalaureate" />
        <AddButton word="Baccalaureate" />
        {hideButton}
      </View>
    );
  };

  const Cavalier = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Cavalier</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>KAV-uh-leer</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Degree awarded upon completion of an undergraduate program.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>I warned the CEO about his </Text>
            <Text style={style.bold}>cavalier</Text>
            <Text style={mainStyles.text}>
              {" "}
              attitude towards financial management and company suffered.
            </Text>
          </Text>
        </View>
        <ListenButton word="Cavalier" />
        <AddButton word="Cavalier" />
        {hideButton}
      </View>
    );
  };

  const Deprecate = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Deprecate</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>DEP-ri-cate</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              To belittle; disapproval of something.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Jean insisted her report contained not a single{" "}
            </Text>
            <Text style={style.bold}>deprecating</Text>
            <Text style={mainStyles.text}>
              {" "}
              word, but I could read between the lines.
            </Text>
          </Text>
        </View>
        <ListenButton word="Deprecate" />
        <AddButton word="Deprecate" />
        {hideButton}
      </View>
    );
  };

  const Ebullience = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Ebullience</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>ih-BOLL-yunce</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              To belittle; disapproval of something.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Sharon&apos;s </Text>
            <Text style={style.bold}>ebullience</Text>
            <Text style={mainStyles.text}>
              {" "}
              as she delivered the presentation set her apart.
            </Text>
          </Text>
        </View>
        <ListenButton word="Ebullience" />
        <AddButton word="Ebullience" />
        {hideButton}
      </View>
    );
  };

  const FaitAccompli = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Fait Accompli</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>FATE uh-com-PLEE</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Something undertaken and already concluded.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              I did sign the contract without the CEO&apos;s consent as it was a{" "}
            </Text>
            <Text style={style.bold}>fait accompli</Text>
            <Text style={mainStyles.text}>
              , and he promoted me to vice president.
            </Text>
          </Text>
        </View>
        <ListenButton word="Fait" />
        <AddButton word="Fait" />
        {hideButton}
      </View>
    );
  };

  const Galvanize = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Galvanize</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>GAL-vuh-nize</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>To arouse or summon to action.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>The letter had a </Text>
            <Text style={style.bold}>galvanizing</Text>
            <Text style={mainStyles.text}>
              {" "}
              effect on Madge, and she started working harder.
            </Text>
          </Text>
        </View>
        <ListenButton word="Galvanize" />
        <AddButton word="Galvanize" />
        {hideButton}
      </View>
    );
  };

  const Imbue = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Imbue</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>im-BYOO</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              To saturate or flow throughout by absorption.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>My philosophy on management is </Text>
            <Text style={style.bold}>imbued</Text>
            <Text style={mainStyles.text}>
              {" "}
              with ideas from Wharton Business School.
            </Text>
          </Text>
        </View>
        <ListenButton word="Imbue" />
        <AddButton word="Imbue" />
        {hideButton}
      </View>
    );
  };

  const Jejune = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Jejune</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>ji-JUNE</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Dull or lackluster.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              I find your advertising campaign{" "}
            </Text>
            <Text style={style.bold}>jejune</Text>
            <Text style={mainStyles.text}>, slow, and off message.</Text>
          </Text>
        </View>
        <ListenButton word="Jejune" />
        <AddButton word="Jejune" />
        {hideButton}
      </View>
    );
  };

  const Kudos = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Kudos</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>KOO_dos</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Dull or lackluster.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Big </Text>
            <Text style={style.bold}>Kudos</Text>
            <Text style={mainStyles.text}>
              {" "}
              to you for such a profitable fourth quarter.
            </Text>
          </Text>
        </View>
        <ListenButton word="Kudos" />
        <AddButton word="Kudos" />
        {hideButton}
      </View>
    );
  };

  const Utilitarian = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Utilitarian</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>yoo-til-ih-TARE-ee-un</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Concern for the practical or useful.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Take the </Text>
            <Text style={style.bold}>utilitarian</Text>
            <Text style={mainStyles.text}>
              {" "}
              approach and scrap the old focus on efficiencies.
            </Text>
          </Text>
        </View>
        <ListenButton word="Utilitarian" />
        <AddButton word="Utilitarian" />
        {hideButton}
      </View>
    );
  };

  return (
    <ImageBackground
      source={jobinterview}
      imageStyle={style.image}
      resizeMode="cover"
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>Job Interview</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View style={mainStyles.centerContainer}>
              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Baccalaureate"
                    onPress={() => setSelectedWord(<Baccalaureate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Cavalier"
                    onPress={() => setSelectedWord(<Cavalier />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Deprecate"
                    onPress={() => setSelectedWord(<Deprecate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Ebullience"
                    onPress={() => setSelectedWord(<Ebullience />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Fait Accompli"
                    onPress={() => setSelectedWord(<FaitAccompli />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Galvanize"
                    onPress={() => setSelectedWord(<Galvanize />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Imbue"
                    onPress={() => setSelectedWord(<Imbue />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Jejune"
                    onPress={() => setSelectedWord(<Jejune />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Kudos"
                    onPress={() => setSelectedWord(<Kudos />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Utilitarian"
                    onPress={() => setSelectedWord(<Utilitarian />)}
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
