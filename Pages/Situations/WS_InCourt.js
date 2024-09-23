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
import courthouse from "../../assets/Backgrounds/courthouse.jpg";
import AppButton from "../../components/AppButton";

export default function WS_InCourt({ navigation }) {
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

  const Adjudicate = () => (
    <View style={style.component}>
      <View style={style.screen}>
        <Text style={style.subHead}>Adjudicate</Text>
        <Text style={style.space}>
          <Text style={style.title}>Pron: </Text>
          <Text style={style.text}>ad-JOO-di-cate</Text>
        </Text>
        <Text style={style.space}>
          <Text style={style.title}>Def: </Text>
          <Text style={style.text}>Judicial procedure to settle a case.</Text>
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

  const Barrage = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Barrage</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>buh-ROZH</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Concentrated outpouring or volley.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              The defense attorney subjected the witness to a{" "}
            </Text>
            <Text style={style.bold}>barrage </Text>
            <Text style={style.text}>
              of questions about the events of that night.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Catch22 = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Catch-22</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>KATCH-twen-tee-too</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              Impossible situation with contradictory options.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              Judge Brown&#39s memo issued a playful{" "}
            </Text>
            <Text style={style.bold}>catch-22</Text>
            <Text style={style.text}>
              : he was only to be scheduled during the days he&#39d be out of
              town.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Defamation = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Defamation</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>def-uh-MAY-shun</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              False, baseless attacks on person&#39s reputation.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              After the article your honor, Ms. Smith decided she had enough{" "}
            </Text>
            <Text style={style.bold}>defamation </Text>
            <Text style={style.text}>of her character.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Elucidate = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Elucidate</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>ee-LOO-si-date</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              False, baseless attacks on person&#39s reputation.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              Your honor, what is behind my client&#39s bizarre work habits is
              something only he can{" "}
            </Text>
            <Text style={style.bold}>elucidate.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Fabulist = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Fabulist</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>FAB-yuh-list</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>
              Liar; someone who tells outrageously untrue stories.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>
              Your honor, the defendant is a notorious{" "}
            </Text>
            <Text style={style.bold}>fabulist </Text>
            <Text style={style.text}> and should not be believed.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Grandiloquence = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Grandiloquence</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>gran-DIL-uh-kwence</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Pompous speech or expression.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>I don&#39t have the </Text>
            <Text style={style.bold}>grandiloquence</Text>
            <Text style={style.text}>
              {" "}
              the prosecutor does with her smooth words.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Heinous = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Heinous</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>HAY-nuss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Evil; reprehensible.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Because of the </Text>
            <Text style={style.bold}>heinous</Text>
            <Text style={style.text}>
              {" "}
              nature of this crime, I sentence to life in prison.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Ignominious = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Ignominious</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>ig-no-MIN-ee-uss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Shameful or disgraceful.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Tyrone&#39s </Text>
            <Text style={style.bold}>ignominious</Text>
            <Text style={style.text}>
              {" "}
              defeat in court persuaded him to settle his other lawsuits.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Judicature = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Judicature</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>JOO-di-kuh-choor</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Authority of a court of law.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>This case is within my </Text>
            <Text style={style.bold}>judicature</Text>
            <Text style={style.text}>
              , despite counsel&#39s arguments to the contrary.
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
          source={courthouse}
          imageStyle={style.image}
          resizeMode="cover"
          style={style.page}
        >
          <View>
            <Text style={style.header}>In Court</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View>
              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Adjudicate"
                    onPress={() => setSelectedWord(<Adjudicate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Barrage"
                    onPress={() => setSelectedWord(<Barrage />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Catch-22"
                    onPress={() => setSelectedWord(<Catch22 />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Defamation"
                    onPress={() => setSelectedWord(<Defamation />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Elucidate"
                    onPress={() => setSelectedWord(<Elucidate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Fabulist"
                    onPress={() => setSelectedWord(<Fabulist />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Grandiloquence"
                    onPress={() => setSelectedWord(<Grandiloquence />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Heinous"
                    onPress={() => setSelectedWord(<Heinous />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Ignominious"
                    onPress={() => setSelectedWord(<Ignominious />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton}>
                  <AppButton
                    icon="sign-in"
                    title="Judicature"
                    onPress={() => setSelectedWord(<Judicature />)}
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
