import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import { NavButtonWord } from '../../components/NavButtonWord';
import { navStyle } from '../../components/NavButton.js';

export default function PWords({ navigation }) {

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
          <Text style={style.header}>P Words</Text>
        </View>

        <View>
          <NavButtonWord navigation={navigation} title="Pacify" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Palatable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Palpable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pandemic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pandemonium" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pander" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Paradigm" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Paradox" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Paragon" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Paralysis" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Parameter" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Parenthetical" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Paroxysm" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Parsimonious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pathos" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Paucity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Peccadillo" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pecuniary" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pedagogue" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pedantic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pejorative" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Penultimate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Peremptory" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Perennial" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Perfidy" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Perfunctory" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Periphery" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Perjure" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Permeate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pernicious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Perpetuate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Perspicacity" destination="Word"/>
          {/* <NavButtonWord navigation={navigation} title="Perspicuity" destination="Word"/> */}
          <NavButtonWord navigation={navigation} title="Peruse" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pervasive" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Petulant" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Philander" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Picayune" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Picturesque" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Piety" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pinnacle" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pique" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Placate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Placid" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Platitude" destination="Word"/>
          {/* <NavButtonWord navigation={navigation} title="Platonic" destination="Word"/> */}
          <NavButtonWord navigation={navigation} title="Plaudit" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Plenitude" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Plethora" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Plight" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Poignant" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Polarize" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Polemics" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pontificate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Portend" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Posit" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pragmatic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Precarious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Precedent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Precipice" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Precocious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Preemptive" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Presage" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Prescience" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pretense" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Prevaricate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pristine" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Proclivity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Procure" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Prodigal" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Profilgate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Profundity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Prognosticate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Progressive" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Proliferate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Promulgate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Propagate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Propinquity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Propound" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Prosaic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Proscribe" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Protean" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Protégé" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Protocol" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Proverbial" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Providence" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Provocative" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Prudent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Prurient" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Puerile" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pugnacious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Pulchritude" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Punctilious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Puritanical" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Purlieus" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Purported" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Putative" destination="Word"/>
        </View>

        <View style={style.bottomButtons}>
          <Pressable style={navStyle.appButton}><AppButton title="Back" onPress={() => navigation.goBack()}></AppButton></Pressable>
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
    paddingTop: 50,
    paddingBottom: 100
  },

  header: {
    fontSize: 30,
    color: '#f0f8ff',
    fontWeight: '800',
    paddingBottom: 20,
  },

  bottomButtons: {
    paddingTop: 50,
  },

  appButton: {
    paddingHorizontal: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },

  appButtonText: {
    fontSize: 20,
    color: '#fff'
  },

  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    width: 300
  },

})


