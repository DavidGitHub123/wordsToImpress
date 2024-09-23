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
import boss3 from "../../assets/Backgrounds/boss3.jpg";
import AppButton from "../../components/AppButton";

export default function WS_Boss({ navigation }) {
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

  const Aberration = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Aberration</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>ab-uh-RAY-shun</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Diverging from an expected course</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              Sally&#39s poor work was hardly grounds for dismissal; it was an{" "}
            </Text>
            <Text style={style.bold}>aberration </Text>
            <Text style={style.text}>caused by problems at home.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Beleaguered = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Beleaguered</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>bee-LEEG-erd</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              Embattled; constantly confronted with obstacles.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>The </Text>
            <Text style={style.bold}>beleaguered </Text>
            <Text style={style.text}>
              marketing team even considered direct mail, but vowed to fight on.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Debacle = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Debacle</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>dih-BA-kull</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Utter collapse or rout.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              The initiative seemed promising, but turned out to be George&#39s{" "}
            </Text>
            <Text style={style.bold}>debacle.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Echelon = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Echelon</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>ESH-uh-lon</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>A level of command.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              Tom&#39s proposal eventually won the approval of the company&#39s
              upper{" "}
            </Text>
            <Text style={style.bold}>echelon </Text>
            <Text style={style.text}>of leaders.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Garner = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Garner</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>GAR-ner</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>To gather or accumulate.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>William </Text>
            <Text style={style.bold}>garnered </Text>
            <Text style={style.text}>
              much praise for his management skills.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Ignoble = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Ignoble</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>ig-NO-bull</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Dishonorable in nature.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Peter&#39s </Text>
            <Text style={style.bold}>ignoble </Text>
            <Text style={style.text}>
              aims were well known to the human resources department, which led
              to his firing.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Jettison = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Jettison</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>JET-ih-son</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>To cast off or overboard.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              The project seemed promising, but after research we{" "}
            </Text>
            <Text style={style.bold}>jettisoned </Text>
            <Text style={style.text}>the project.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Keynote = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Keynote</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>KEE-note</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>A prime theme; underlying element.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>The </Text>
            <Text style={style.bold}>keynote </Text>
            <Text style={style.text}>
              speaker addressed many problems related to productivity that faces
              our organization.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Laggard = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Laggard</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>LAG-urd</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>One who lags behind or loiters.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>We completed the project; it is the </Text>
            <Text style={style.bold}>laggards </Text>
            <Text style={style.text}>
              in accounting you should take to task.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Narcissistic = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Narcissistic</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>nar-sis-SIS-tik</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Extreme love of self.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              Self-promotion is one thing; but the{" "}
            </Text>
            <Text style={style.bold}>narcissistic </Text>
            <Text style={style.text}>
              zeal with which Gerald asserts himself is another.
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
          source={boss3}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>The Boss</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View>
              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Aberration"
                    onPress={() => setSelectedWord(<Aberration />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Beleaguered"
                    onPress={() => setSelectedWord(<Beleaguered />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Debacle"
                    onPress={() => setSelectedWord(<Debacle />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Echelon"
                    onPress={() => setSelectedWord(<Echelon />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Garner"
                    onPress={() => setSelectedWord(<Garner />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Ignoble"
                    onPress={() => setSelectedWord(<Ignoble />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Jettison"
                    onPress={() => setSelectedWord(<Jettison />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Keynote"
                    onPress={() => setSelectedWord(<Keynote />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Laggard"
                    onPress={() => setSelectedWord(<Laggard />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Narcissistic"
                    onPress={() => setSelectedWord(<Narcissistic />)}
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
