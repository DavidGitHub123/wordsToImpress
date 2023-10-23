import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import { NavButtonWord } from '../../components/NavButtonWord';

export default function AWords({ navigation }) {

  const AppButton = ({ onPress, icon, title, backgroundColor }) => (
    <View style={style.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor={backgroundColor}
        onPress={onPress}
        style={style.appButton}
      >
        <Text style={style.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

  return (
    <SafeAreaView style={style.container}>
    <ScrollView alwaysBounceHorizontal={true}>
    <LinearGradient
          colors={["#4682B4", "#6699CC"]}
          start={[0.25, 0.25]}
          opacity={.95}
        >

      <View style={style.page}>

      <View>
        <Text style={style.header}>A Words</Text>
      </View>

      <View>
        <NavButtonWord navigation={navigation} title="Abate" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abdicate" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Aberration" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abet" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abhorrent" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abide" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abject" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abjure" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Ablution" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abnegate" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Aboriginal" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abortive" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abet" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abhorrent" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abide" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abject" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abrade" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abrogate" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abscond" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Absolve" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abstemious" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abstinence" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Abstruse" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Accede" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Accentuate" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Accolade" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Accord" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Accrue" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Acquiescence" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Acrid" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Acrimonious" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Acumen" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Acute" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Ad Infinitum" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Adage" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Adamant" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Adduce" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Adept" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Adherent" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Ad Hoc" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Adjudicate" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Adjure" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Adroit" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Adulation" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Adulterate" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Aesthetics" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Affinity" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Affirmative" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Affliction" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Agape" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Aggrandize" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Agnosticism" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Akin" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Alacrity" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Albatross" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Allay" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Allude" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Altruism" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Amalgamate" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Ambience" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Ambiguous" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Ambivalent" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Amble" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Ameliorate" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Amenable" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Amend" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Amenities" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Amiable" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Amoral" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Amorous" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Amorphous" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Amortize" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Anachronism" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Analogous" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Anarchy" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Anathema" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Ancillary" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Androgynous" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Anecdote" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Animosity" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Annunciate" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Anomaly" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Antecedent" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Antipathy" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Antiquity" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Antithesis" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Aphorism" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Aplomb" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Apocalyptic" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Apocryphal" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Appellation" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Apprise" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Apropos" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Arbiter" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Arbitrary" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Ardent" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Arduous" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Aromatic" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Ascetic" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Ascribe" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Aspersion" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Assertion" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Assiduously" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Audacious" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Augment" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Auspices" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Auspicious" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Austere" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Autonomous" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Avail" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Avant-garde" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Avarice" destination="Word"/>
        <NavButtonWord navigation={navigation} title="Avowal" destination="Word"/>
      </View>

        <View>
          <HomeButton navigation={navigation}/>
        </View>

        </View>

    </LinearGradient>
    </ScrollView>
    </SafeAreaView>
  );
}



const style = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,

  },

  header: {
    fontSize: 30,
    color: '#f0f8ff',
    fontWeight: '800',
  },

  appButton: {
    paddingHorizontal: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },

  appButtonText: {
    fontSize: 20,
    color: '#fff',
  },

  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    width: 300,
  },

})


