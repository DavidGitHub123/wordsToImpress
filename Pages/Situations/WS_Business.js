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
import business from "../../assets/Backgrounds/business.jpg";
import AppButton from "../../components/AppButton";
import { mainStyles } from "../../components/mainStyles";

export default function WS_Business({ navigation }) {
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

  const Accolade = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Accolade</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>AK-uh-lade</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Acknowledgement or expression of praise.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The president hung on his office wall many plaques, citations, and{" "}
            </Text>
            <Text style={style.bold}>accolades.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Bluster = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Bluster</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>BLUS-ter</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              To threaten or issue extravagant threat.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The CEO seems fierce at first because he{" "}
            </Text>
            <Text style={style.bold}>blusters </Text>
            <Text style={mainStyles.text}>to get his way.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Cartel = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Cartel</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>kar-TELL</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Group that establishes mutual control of prices and production.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>The oil </Text>
            <Text style={style.bold}>cartel </Text>
            <Text style={mainStyles.text}>
              succeeded in driving world energy prices up significantly.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Diminution = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Diminution</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>dim-ih-NOO-shen</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Reduction due to outside influences.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              The stock fell by 75%; not sure we can recover from such a{" "}
            </Text>
            <Text style={style.bold}>diminution.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Effrontery = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Effrontery</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>ih-FRON-ter-ee</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Impudent boldness.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>She had the </Text>
            <Text style={style.bold}>effrontery </Text>
            <Text style={mainStyles.text}>
              to ask for a raise after a dreadful performance.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Feckless = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Feckless</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>FEK-liss</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Ineffective or feeble.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              We had hoped for a well-trained consulting firm; we got a pack of{" "}
            </Text>
            <Text style={style.bold}>feckless</Text>
            <Text style={mainStyles.text}> hangers-on.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Gargantuan = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Gargantuan</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>gar-GAN-choo-un</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Enormous. From fictional king (Gargantua).
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>The </Text>
            <Text style={style.bold}>gargantuan </Text>
            <Text style={mainStyles.text}>
              scale of the budget deficit caught us by surprisehangers-on.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Harbinger = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Harbinger</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>HAR-bin-jur</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Forerunner. Something that comes before.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>These sales figures are a </Text>
            <Text style={style.bold}>harbinger </Text>
            <Text style={mainStyles.text}>of hard times ahead.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Impetuous = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Impetuous</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>im-PET-you-us</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>Impulsive; driven by emotion.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>Dirk's heated and </Text>
            <Text style={style.bold}>impetuous </Text>
            <Text style={mainStyles.text}>
              remark may well cost him his job.
            </Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  const Logistics = () => {
    return (
      <View style={style.component}>
        <View style={mainStyles.screen}>
          <Text style={mainStyles.header}>Logistics</Text>
          <Text style={style.space}>
            <Text style={style.bold}>Pron: </Text>
            <Text style={mainStyles.text}>loe-JIS-tiks</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Def: </Text>
            <Text style={mainStyles.text}>
              Essential details of how something is to be accomplished.
            </Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.bold}>Sentence: </Text>
            <Text style={mainStyles.text}>
              Jane knew the trip could not begin until the{" "}
            </Text>
            <Text style={style.bold}>logistics </Text>
            <Text style={mainStyles.text}>were worked out.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    );
  };

  return (
    <ImageBackground
      source={business}
      imageStyle={style.image}
      resizeMode="cover"
      style={mainStyles.page}
    >
      <SafeAreaView style={style.container}>
        <ScrollView alwaysBounceHorizontal={true}>
          <View>
            <Text style={mainStyles.header}>Business</Text>
          </View>

          {selectedWord ? (
            selectedWord
          ) : (
            <View style={mainStyles.centerContainer}>
              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Accolade"
                    onPress={() => setSelectedWord(<Accolade />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Bluster"
                    onPress={() => setSelectedWord(<Bluster />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Cartel"
                    onPress={() => setSelectedWord(<Cartel />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Diminution"
                    onPress={() => setSelectedWord(<Diminution />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Effrontery"
                    onPress={() => setSelectedWord(<Effrontery />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Feckless"
                    onPress={() => setSelectedWord(<Feckless />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Gargantuan"
                    onPress={() => setSelectedWord(<Gargantuan />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Harbinger"
                    onPress={() => setSelectedWord(<Harbinger />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Impetuous"
                    onPress={() => setSelectedWord(<Impetuous />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable>
                  <AppButton
                    icon="sign-in"
                    title="Logistics"
                    onPress={() => setSelectedWord(<Logistics />)}
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
