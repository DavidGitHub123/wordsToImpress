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

export default function WS_Boss({ navigation }) {
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

  const Aberration = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Aberration</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>ab-uh-RAY-shun</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Diverging from an expected course
            </Text>
          </Text>

          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Sally&apos;s poor work was hardly grounds for dismissal; it was an{" "}
            </Text>
            <Text style={style.bold}>aberration </Text>
            <Text style={mainStyles.text}>caused by problems at home.</Text>
          </Text>
        </View>
        <ListenButton word="Aberration" />
        <AddButton word="Aberration" />
        {hideButton}
      </View>
    );
  };

  const Beleaguered = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Beleaguered</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>bee-LEEG-erd</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Embattled; constantly confronted with obstacles.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>The </Text>
            <Text style={style.bold}>beleaguered </Text>
            <Text style={mainStyles.text}>
              marketing team even considered direct mail, but vowed to fight on.
            </Text>
          </Text>
        </View>
        <ListenButton word="Beleaguered" />
        <AddButton word="Beleaguered" />
        {hideButton}
      </View>
    );
  };

  const Debacle = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Debacle</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>dih-BA-kull</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Utter collapse or rout.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The initiative seemed promising, but turned out to be
              George&apos;s{" "}
            </Text>
            <Text style={style.bold}>debacle.</Text>
          </Text>
        </View>
        <ListenButton word="Debacle" />
        <AddButton word="Debacle" />
        {hideButton}
      </View>
    );
  };

  const Echelon = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Echelon</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>ESH-uh-lon</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>A level of command.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Tom&apos;s proposal eventually won the approval of the
              company&apos;s upper{" "}
            </Text>
            <Text style={style.bold}>echelon </Text>
            <Text style={mainStyles.text}>of leaders.</Text>
          </Text>
        </View>
        <ListenButton word="Echelon" />
        <AddButton word="Echelon" />
        {hideButton}
      </View>
    );
  };

  const Garner = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Garner</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>GAR-ner</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>To gather or accumulate.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>William </Text>
            <Text style={style.bold}>garnered </Text>
            <Text style={mainStyles.text}>
              much praise for his management skills.
            </Text>
          </Text>
        </View>
        <ListenButton word="Garner" />
        <AddButton word="Garner" />
        {hideButton}
      </View>
    );
  };

  const Ignoble = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Ignoble</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>ig-NO-bull</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Dishonorable in nature.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Peter&apos;s </Text>
            <Text style={style.bold}>ignoble </Text>
            <Text style={mainStyles.text}>
              aims were well known to the human resources department, which led
              to his firing.
            </Text>
          </Text>
        </View>
        <ListenButton word="Ignoble" />
        <AddButton word="Ignoble" />
        {hideButton}
      </View>
    );
  };

  const Jettison = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Jettison</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>JET-ih-son</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>To cast off or overboard.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The project seemed promising, but after research we{" "}
            </Text>
            <Text style={style.bold}>jettisoned </Text>
            <Text style={mainStyles.text}>the project.</Text>
          </Text>
        </View>
        <ListenButton word="Jettison" />
        <AddButton word="Jettison" />
        {hideButton}
      </View>
    );
  };

  const Keynote = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Keynote</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>KEE-note</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              A prime theme; underlying element.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>The </Text>
            <Text style={style.bold}>keynote </Text>
            <Text style={mainStyles.text}>
              speaker addressed many problems related to productivity that faces
              our organization.
            </Text>
          </Text>
        </View>
        <ListenButton word="Keynote" />
        <AddButton word="Keynote" />
        {hideButton}
      </View>
    );
  };

  const Laggard = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Laggard</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>LAG-urd</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>One who lags behind or loiters.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              We completed the project; it is the{" "}
            </Text>
            <Text style={style.bold}>laggards </Text>
            <Text style={mainStyles.text}>
              in accounting you should take to task.
            </Text>
          </Text>
        </View>
        <ListenButton word="Laggard" />
        <AddButton word="Laggard" />
        {hideButton}
      </View>
    );
  };

  const Narcissistic = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Narcissistic</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>nar-sis-SIS-tik</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Extreme love of self.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Self-promotion is one thing; but the{" "}
            </Text>
            <Text style={style.bold}>narcissistic </Text>
            <Text style={mainStyles.text}>
              zeal with which Gerald asserts himself is another.
            </Text>
          </Text>
        </View>
        <ListenButton word="Narcissistic" />
        <AddButton word="Narcissistic" />
        {hideButton}
      </View>
    );
  };

  return (
    <LinearGradient colors={["#2a5298", "#121216"]} style={mainStyles.page}>
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>The Boss</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View style={mainStyles.centerContainer}>
              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Aberration"
                    onPress={() => setSelectedWord(<Aberration />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Beleaguered"
                    onPress={() => setSelectedWord(<Beleaguered />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Debacle"
                    onPress={() => setSelectedWord(<Debacle />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Echelon"
                    onPress={() => setSelectedWord(<Echelon />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Garner"
                    onPress={() => setSelectedWord(<Garner />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Ignoble"
                    onPress={() => setSelectedWord(<Ignoble />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Jettison"
                    onPress={() => setSelectedWord(<Jettison />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Keynote"
                    onPress={() => setSelectedWord(<Keynote />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Laggard"
                    onPress={() => setSelectedWord(<Laggard />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Narcissistic"
                    onPress={() => setSelectedWord(<Narcissistic />)}
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
