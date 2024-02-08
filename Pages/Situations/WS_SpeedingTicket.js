import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, ImageBackground, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeButton from '../../components/HomeButton';
import AddButton from '../../components/AddButton';
import ListenButton from '../../components/ListenButton';
import { navStyle } from '../../components/NavButton.js';
import speedingticket from '../../assets/Backgrounds/speedingticket.jpg'

const AppButton = ({ onPress, icon, title }) => (
  <View style={style.appButtonContainer}>
    <Icon.Button
      name={icon}
      backgroundColor='#FF8C00'
      borderRadius={40}
      borderWidth={3}
      borderColor='#BBC2CC'
      onPress={onPress}
      style={style.appButton}
    >
      <Text style={style.appButtonText}>{title}</Text>
    </Icon.Button>
  </View>
);

export default function WS_SpeedingTicket({ navigation }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const hideButton = (
    <Pressable style={style.appButton} >
      <AppButton icon="sign-in" title="Hide"
        onPress={() => setSelectedWord(null)}
      />
    </Pressable>)

  const Adroit = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Adroit</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>uh-DROIT</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Skillful use of one&#39s hands or body.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Officer, your </Text>
            <Text style={style.bold}>adroit</Text>
            <Text style={style.text}> driving skills, helped me to pull my car over safely.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    )
  }

  const Befuddle = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Befuddle</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>bee-FUD-il</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>To confuse or perplex.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>I&#39m sorry officer that I appear </Text>
            <Text style={style.bold}>befuddled</Text>
            <Text style={style.text}>, you won&#39t believe what happened.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    )
  }

  const Canard = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Canard</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>kuh-NARD</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>A fabrication or unfounded story.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Officer, I cannot tell a </Text>
            <Text style={style.bold}>canard</Text>
            <Text style={style.text}>; I was speeding but let me tell you why.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    )
  }

  const Disconcerting = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Disconcerting</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>diss-kun-SERT-ing</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Ruffled; upset.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Officer, I too find it </Text>
            <Text style={style.bold}>disconcerting</Text>
            <Text style={style.text}> I was driving 20 miles over the speed limit.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    )
  }

  const Embodiment = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Embodiment</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>em-BOD-ee-ment</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>To possess a given thing or idea.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Officer, you are the </Text>
            <Text style={style.bold}>embodiment</Text>
            <Text style={style.text}> of a brave man of his duty.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    )
  }

  const Fulminate = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Fulminate</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>FUL-mih-nate</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>To explode. Launch verbal attack.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Officer, last time you pulled me over I spoke loudly, even </Text>
            <Text style={style.bold}>fulminating</Text>
            <Text style={style.text}> in anger. I&#39m sorry.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    )
  }

  const Imperative = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Imperative</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>im-PAIR-uh-tive</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Essential, obligatory, or mandatory.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Officer, it&#39s </Text>
            <Text style={style.bold}>imperative</Text>
            <Text style={style.text}> that I get to my meeting on time.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    )
  }

  const Lucid = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Lucid</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>LOO-sid</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>Intelligible; clear mental state.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Officer, I was daydreaming and not in a </Text>
            <Text style={style.bold}>lucid</Text>
            <Text style={style.text}> state when I passed that speed limit sign.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    )
  }

  const Misconstrue = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Misconstrue</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>miss-kun-STROO</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>To misinterpret; make an error in analyzing.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Officer, I do not mean to </Text>
            <Text style={style.bold}>misconstrue</Text>
            <Text style={style.text}> the situation; I&#39ll defer to your judgment.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    )
  }

  const Upbraid = () => {
    return (
      <View style={style.component}>
        <View style={style.screen}>
          <Text style={style.subHead}>Upbraid</Text>
          <Text style={style.space}>
            <Text style={style.title}>Pron: </Text>
            <Text style={style.text}>miss-kun-STROO</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Def: </Text>
            <Text style={style.text}>To criticize a person.</Text>
          </Text>
          <Text style={style.space}>
            <Text style={style.title}>Sentence: </Text>
            <Text style={style.text}>Officer, please don&#39t </Text>
            <Text style={style.bold}>upbraid</Text>
            <Text style={style.text}> me; I am a good driver.</Text>
          </Text>
        </View>
        <ListenButton />
        <AddButton />
        {hideButton}
      </View>
    )
  }


  return (
    <SafeAreaView style={style.container}>
      <ScrollView alwaysBounceHorizontal={true}>
        <ImageBackground source={speedingticket} imageStyle={style.image} resizeMode="cover" style={style.page}>

          <View>
            <Text style={style.header}>Speeding Ticket</Text>
          </View>

          {selectedWord ?
            selectedWord :
            (<View>

              <View>
                <Pressable style={style.appButton} >
                  <AppButton icon="sign-in" title="Adroit"
                    onPress={() => setSelectedWord(<Adroit />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton} >
                  <AppButton icon="sign-in" title="Befuddle"
                    onPress={() => setSelectedWord(<Befuddle />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton} >
                  <AppButton icon="sign-in" title="Canard"
                    onPress={() => setSelectedWord(<Canard />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton} >
                  <AppButton icon="sign-in" title="Disconcerting"
                    onPress={() => setSelectedWord(<Disconcerting />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton} >
                  <AppButton icon="sign-in" title="Embodiment"
                    onPress={() => setSelectedWord(<Embodiment />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton} >
                  <AppButton icon="sign-in" title="Fulminate"
                    onPress={() => setSelectedWord(<Fulminate />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton} >
                  <AppButton icon="sign-in" title="Imperative"
                    onPress={() => setSelectedWord(<Imperative />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton} >
                  <AppButton icon="sign-in" title="Lucid"
                    onPress={() => setSelectedWord(<Lucid />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton} >
                  <AppButton icon="sign-in" title="Misconstrue"
                    onPress={() => setSelectedWord(<Misconstrue />)}
                  />
                </Pressable>
              </View>

              <View>
                <Pressable style={style.appButton} >
                  <AppButton icon="sign-in" title="Upbraid"
                    onPress={() => setSelectedWord(<Upbraid />)}
                  />
                </Pressable>
              </View>

              <View style={style.bottomButtons}>
                <Pressable style={navStyle.appButton}><AppButton title="Back" onPress={() => navigation.goBack()}></AppButton></Pressable>
                <HomeButton navigation={navigation} />
              </View>
            </View>)}

        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingVertical: 30,
  },

  image: {
    opacity: .5,
  },

  header: {
    fontSize: 40,
    textShadowColor: '#000',
    textShadowRadius: 5,
    color: '#f0f8ff',
    fontWeight: '800',
    paddingVertical: 10,
    textAlign: 'center',
  },

  appButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  component: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 200
  },

  screen: {
    opacity: .7,
    backgroundColor: 'black',
    marginBottom: 40,
    padding: 20
  },

  subHead: {
    fontSize: 40,
    color: '#FF8C00'
  },

  text: {
    fontSize: 25,
    color: '#fff'
  },

  title: {
    fontSize: 25,
    color: '#FF8C00'
  },

  bold: {
    fontSize: 25,
    fontWeight: 600,
    color: '#FF8C00'
  },

  space: {
    paddingTop: 10,
  },

  appButtonText: {
    fontSize: 20,
    color: '#fff'
  },

  appButtonContainer: {
    width: 200,
    marginVertical: 2
  },

  bottomButtons: {
    paddingTop: 20
  }

})
