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

export default function WS_MeetingInLaws({ navigation }) {
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

  const Acquiescence = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Acquiescence</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>ak-wee-ESS-unce</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Act of passive agreement.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Hank, enchanted by grand-fatherhood, gave over to complete{" "}
            </Text>
            <Text style={style.bold}>acquiescence</Text>
            <Text style={mainStyles.text}> with little Laura.</Text>
          </Text>
        </View>
        <ListenButton word="Acquiescence" />
        <AddButton word="Acquiescence" />
        {hideButton}
      </View>
    );
  };

  const Belated = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Belated</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>bee-LAY-ted</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Late or tardy; delayed.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Jane sent a<Text style={style.bold}> belated </Text>
              <Text style={mainStyles.text}></Text>birthdaycard but still felt
              guilty about forgetting your birthday.
            </Text>
          </Text>
        </View>
        <ListenButton word="Belated" />
        <AddButton word="Belated" />
        {hideButton}
      </View>
    );
  };

  const Dilapidated = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Dilapidated</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>di-LAP-ih-dated</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>To fall into disrepair.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>The </Text>
            <Text style={style.bold}>dilapidated</Text>
            <Text style={mainStyles.text}>
              {" "}
              barn swayed and finally collapsed.
            </Text>
          </Text>
        </View>
        <ListenButton word="Dilapidated" />
        <AddButton word="Dilapidated" />
        {hideButton}
      </View>
    );
  };

  const Eccentric = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Eccentric</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>ek-SEN-trik</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Marked by unconventional behavior.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Lionel&apos;s </Text>
            <Text style={style.bold}>eccentric</Text>
            <Text style={mainStyles.text}>
              {" "}
              behavior led people avoiding him entirely.
            </Text>
          </Text>
        </View>
        <ListenButton word="Eccentric" />
        <AddButton word="Eccentric" />
        {hideButton}
      </View>
    );
  };

  const Fallacious = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Fallacious</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>fuh-LAY-shuss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              False; containing logical errors.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              McCarthy&apos;s accusations against the Army were totally{" "}
            </Text>
            <Text style={style.bold}>fallacious</Text>.
          </Text>
        </View>
        <ListenButton word="Fallacious" />
        <AddButton word="Fallacious" />
        {hideButton}
      </View>
    );
  };

  const Heretic = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Heretic</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>HARE-uh-tic</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Professing belief, but differing with parts of the belief system.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              His stand against the church&apos;s political stances branded
              Clint as a{" "}
            </Text>
            <Text style={style.bold}>heretic</Text>.
          </Text>
        </View>
        <ListenButton word="Heretic" />
        <AddButton word="Heretic" />
        {hideButton}
      </View>
    );
  };

  const Impeccable = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Impeccable</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>im-PECK-uh-bull</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Flawless; virtually perfect.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Roger, a man of </Text>
            <Text style={style.bold}>impeccable</Text>
            <Text style={mainStyles.text}>
              {" "}
              taste in clothes, wore a striking suit.
            </Text>
          </Text>
        </View>
        <ListenButton word="Impeccable" />
        <AddButton word="Impeccable" />
        {hideButton}
      </View>
    );
  };

  const Malady = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Malady</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>MAL-uh-dee</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              An illness or unwholesome condition.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Jason&apos;s </Text>
            <Text style={style.bold}>malady</Text>
            <Text style={mainStyles.text}>
              , if undiagnosed, could have taken his life.
            </Text>
          </Text>
        </View>
        <ListenButton word="Malady" />
        <AddButton word="Malady" />
        {hideButton}
      </View>
    );
  };

  const Ursine = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Ursine</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>UR-sin</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Bearlike; Latin word for bear.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              In his excitement, Harold gave her a fierce
            </Text>
            <Text style={style.bold}> ursine</Text>
            <Text style={mainStyles.text}> embrace.</Text>
          </Text>
        </View>
        <ListenButton word="Ursine" />
        <AddButton word="Ursine" />
        {hideButton}
      </View>
    );
  };

  const Wayfaring = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Wayfaring</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>WAY-fare-ing</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Tending to travel by foot.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              My grandfather, like many men of his generation, spent some time
              as a{" "}
            </Text>
            <Text style={style.bold}>wayfaring</Text>
            <Text style={mainStyles.text}> laborer.</Text>
          </Text>
        </View>
        <ListenButton word="Wayfaring" />
        <AddButton word="Wayfaring" />
        {hideButton}
      </View>
    );
  };

  return (
    <LinearGradient colors={["#2c3e50", "#34495e"]} style={mainStyles.page}>
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>Inlaws</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View style={mainStyles.centerContainer}>
              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Acquiescence"
                    onPress={() => setSelectedWord(<Acquiescence />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Belated"
                    onPress={() => setSelectedWord(<Belated />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Dilapidated"
                    onPress={() => setSelectedWord(<Dilapidated />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Eccentric"
                    onPress={() => setSelectedWord(<Eccentric />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Fallacious"
                    onPress={() => setSelectedWord(<Fallacious />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Heretic"
                    onPress={() => setSelectedWord(<Heretic />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Impeccable"
                    onPress={() => setSelectedWord(<Impeccable />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Malady"
                    onPress={() => setSelectedWord(<Malady />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Ursine"
                    onPress={() => setSelectedWord(<Ursine />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Wayfaring"
                    onPress={() => setSelectedWord(<Wayfaring />)}
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
