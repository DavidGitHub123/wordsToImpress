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
import { mainStyles } from "../../components/mainStyles";

export default function WS_InCourt({ navigation }) {
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

  const Adjudicate = () => (
    <View style={style.component}>
      <View style={mainStyles.screen}>
        <Text style={mainStyles.header}>Adjudicate</Text>
        <Text style={style.space}>
          <Text style={style.bold}>Pron: </Text>
          <Text style={mainStyles.text}>ad-JOO-di-cate</Text>
        </Text>
        <Text style={style.space}>
          <Text style={style.bold}>Def: </Text>
          <Text style={mainStyles.text}>
            Judicial procedure to settle a case.
          </Text>
        </Text>
        <Text style={style.space}>
          <Text style={style.bold}>Sentence: </Text>
          <Text style={mainStyles.text}>
            The young lawyers were excited to be in the court house to finally{" "}
          </Text>
          <Text style={style.bold}>adjudicate </Text>
          <Text style={mainStyles.text}>their first cases.</Text>
        </Text>
      </View>
      <ListenButton word="Adjudicate" />
      <AddButton word="Adjudicate" />
      {hideButton}
    </View>
  );

  const Barrage = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Barrage</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>buh-ROZH</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Concentrated outpouring or volley.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The defense attorney subjected the witness to a{" "}
            </Text>
            <Text style={style.bold}>barrage </Text>
            <Text style={mainStyles.text}>
              of questions about the events of that night.
            </Text>
          </Text>
        </View>
        <ListenButton word="Barrage" />
        <AddButton word="Barrage" />
        {hideButton}
      </View>
    );
  };

  const Catch22 = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Catch-22</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>KATCH-twen-tee-too</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Impossible situation; contradictory options.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Judge Brown's memo issued a playful{" "}
            </Text>
            <Text style={style.bold}>catch-22</Text>
            <Text style={mainStyles.text}>
              : he was only to be scheduled during the days he'd be out of town.
            </Text>
          </Text>
        </View>
        <ListenButton word="Catch" />
        <AddButton word="Catch" />
        {hideButton}
      </View>
    );
  };

  const Defamation = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Defamation</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>def-uh-MAY-shun</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              False, baseless attacks on person's reputation.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              After the article your honor, Ms. Smith decided she had enough{" "}
            </Text>
            <Text style={style.bold}>defamation </Text>
            <Text style={mainStyles.text}>of her character.</Text>
          </Text>
        </View>
        <ListenButton word="Defamation" />
        <AddButton word="Defamation" />
        {hideButton}
      </View>
    );
  };

  const Elucidate = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Elucidate</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>ee-LOO-si-date</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              False, baseless attacks on person's reputation.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Your honor, what is behind my client's bizarre work habits is
              something only he can{" "}
            </Text>
            <Text style={style.bold}>elucidate.</Text>
          </Text>
        </View>
        <ListenButton word="Elucidate" />
        <AddButton word="Elucidate" />
        {hideButton}
      </View>
    );
  };

  const Fabulist = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Fabulist</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>FAB-yuh-list</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Liar; someone who tells outrageously untrue stories.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Your honor, the defendant is a notorious{" "}
            </Text>
            <Text style={style.bold}>fabulist </Text>
            <Text style={mainStyles.text}> and should not be believed.</Text>
          </Text>
        </View>
        <ListenButton word="Fabulist" />
        <AddButton word="Fabulist" />
        {hideButton}
      </View>
    );
  };

  const Grandiose = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Grandiose</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>GRAN-dee-oce</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Pompous in speech or expression.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>His </Text>
            <Text style={style.bold}>grandiose</Text>
            <Text style={mainStyles.text}>
              {" "}
              scheme for career advancement of appeasing upper management simply will not pan out.
            </Text>
          </Text>
        </View>
        <ListenButton word="Grandiose" />
        <AddButton word="Grandiose" />
        {hideButton}
      </View>
    );
  };

  const Heinous = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Heinous</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>HAY-nuss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Evil; reprehensible.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Because of the </Text>
            <Text style={style.bold}>heinous</Text>
            <Text style={mainStyles.text}>
              {" "}
              nature of this crime, I sentence to life in prison.
            </Text>
          </Text>
        </View>
        <ListenButton word="Heinous" />
        <AddButton word="Heinous" />
        {hideButton}
      </View>
    );
  };

  const Ignominious = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Ignominious</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>ig-no-MIN-ee-uss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Shameful or disgraceful.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Tyrone's </Text>
            <Text style={style.bold}>ignominious</Text>
            <Text style={mainStyles.text}>
              {" "}
              defeat in court persuaded him to settle his other lawsuits.
            </Text>
          </Text>
        </View>
        <ListenButton word="Ignominious" />
        <AddButton word="Ignominious" />
        {hideButton}
      </View>
    );
  };

  const Judicature = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Judicature</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>JOO-di-kuh-choor</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Authority of a court of law.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>This case is within my </Text>
            <Text style={style.bold}>judicature</Text>
            <Text style={mainStyles.text}>
              , despite counsel's arguments to the contrary.
            </Text>
          </Text>
        </View>
        <ListenButton word="Judicature" />
        <AddButton word="Judicature" />
        {hideButton}
      </View>
    );
  };

  return (
    <ImageBackground
      source={courthouse}
      imageStyle={style.image}
      resizeMode="cover"
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>In Court</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View style={mainStyles.centerContainer}>
              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Adjudicate"
                    onPress={() => setSelectedWord(<Adjudicate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Barrage"
                    onPress={() => setSelectedWord(<Barrage />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Catch-22"
                    onPress={() => setSelectedWord(<Catch22 />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Defamation"
                    onPress={() => setSelectedWord(<Defamation />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Elucidate"
                    onPress={() => setSelectedWord(<Elucidate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Fabulist"
                    onPress={() => setSelectedWord(<Fabulist />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Grandiose"
                    onPress={() => setSelectedWord(<Grandiose />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Heinous"
                    onPress={() => setSelectedWord(<Heinous />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Ignominious"
                    onPress={() => setSelectedWord(<Ignominious />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
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
