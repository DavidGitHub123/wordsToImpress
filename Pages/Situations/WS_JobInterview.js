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

export default function WS_JobInterview({ navigation }) {
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

  const Baccalaureate = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Baccalaureate</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>bak-uh-LOR-ee-it</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              Degree awarded upon completion of an undergraduate program.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>I received my </Text>
            <Text style={style.bold}>baccalaureate</Text>
            <Text style={style.text}> in 2020 from Brandeis University.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Cavalier = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Cavalier</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>KAV-uh-leer</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              Degree awarded upon completion of an undergraduate program.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>I warned the CEO about his </Text>
            <Text style={style.bold}>cavalier</Text>
            <Text style={style.text}>
              {" "}
              attitude towards financial management and company suffered.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Deprecate = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Deprecate</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>DEP-ri-cate</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              To belittle; disapproval of something.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              Jean insisted her report contained not a single{" "}
            </Text>
            <Text style={style.bold}>deprecating</Text>
            <Text style={style.text}>
              {" "}
              word, but I could read between the lines.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Ebullience = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Ebullience</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>ih-BOLL-yunce</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              To belittle; disapproval of something.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Sharon&#39s</Text>
            <Text style={style.bold}>ebullience</Text>
            <Text style={style.text}>
              {" "}
              as she delivered the presentation set her apart.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const FaitAccompli = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Fait Accompli</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>FATE uh-com-PLEE</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              Something undertaken and already concluded.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              I did sign the contract without the CEO&#39s consent as it was a{" "}
            </Text>
            <Text style={style.bold}>fait accompli</Text>
            <Text style={style.text}>
              , and he promoted me to vice president.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Galvanize = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Galvanize</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>GAL-vuh-nize</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>To arouse or summon to action.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>The letter had a </Text>
            <Text style={style.bold}>galvanizing</Text>
            <Text style={style.text}>
              {" "}
              effect on Madge, and she started working harder.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Imbue = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Imbue</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>im-BYOO</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              To saturate or flow throughout by absorption.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>My philosophy on management is </Text>
            <Text style={style.bold}>imbued</Text>
            <Text style={style.text}>
              {" "}
              with ideas from Wharton Business School.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Jejune = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Jejune</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>ji-JUNE</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Dull or lackluster.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>I find your advertising campaign </Text>
            <Text style={style.bold}>jejune</Text>
            <Text style={style.text}>, slow, and off message.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Kudos = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Kudos</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>KOO_dos</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Dull or lackluster.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Big</Text>
            <Text style={style.bold}>Kudos</Text>
            <Text style={style.text}>
              {" "}
              to you for such a profitable fourth quarter.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Utilitarian = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Utilitarian</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>yoo-til-ih-TARE-ee-un</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Concern for the practical or useful.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Take the </Text>
            <Text style={style.bold}>utilitarian</Text>
            <Text style={style.text}>
              {" "}
              approach and scrap the old focus on efficiencies.
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
          source={jobinterview}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>Job Interview</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View>
              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Baccalaureate"
                    onPress={() => setSelectedWord(<Baccalaureate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Cavalier"
                    onPress={() => setSelectedWord(<Cavalier />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Deprecate"
                    onPress={() => setSelectedWord(<Deprecate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Ebullience"
                    onPress={() => setSelectedWord(<Ebullience />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Fait Accompli"
                    onPress={() => setSelectedWord(<FaitAccompli />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Galvanize"
                    onPress={() => setSelectedWord(<Galvanize />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Imbue"
                    onPress={() => setSelectedWord(<Imbue />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Jejune"
                    onPress={() => setSelectedWord(<Jejune />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Kudos"
                    onPress={() => setSelectedWord(<Kudos />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Utilitarian"
                    onPress={() => setSelectedWord(<Utilitarian />)}
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
