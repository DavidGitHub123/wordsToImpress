import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import NavButtonWord from '../../components/NavButtonWord';

export default function FWords({ navigation }) {

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
        colors={["#0047ab", "#4169e1"]}
        start={[0.1, 1]}
        opacity={.95}
        >

      <View style={style.page}>

        <View>
          <Text style={style.header}>F Words</Text>
        </View>

        <View>
          <NavButtonWord navigation={navigation} title="Fabulist" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Facet" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Facetious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fait Accompli" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fallacious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fastidious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fatuous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fealty" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Febrile" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Feckless" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Felcity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Feral" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fervent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fetid" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fiasco" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fiat" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fidelity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Flaunt" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fledgling" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Flippant" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Flout" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Flux" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Foible" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Foist" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Foray" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Formidable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fractious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fratricide" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Frivolity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fruition" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Fulminate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Funereal" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Furtive" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Futility" destination="Word"/>
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
    color: '#fff'
  },

  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    width: 300
  },

})


