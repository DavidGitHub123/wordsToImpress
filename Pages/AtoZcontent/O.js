import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import { NavButtonWord } from '../../components/NavButtonWord';

export default function OWords({ navigation }) {

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
          <Text style={style.header}>O Words</Text>
        </View>
        
        <View>
          <NavButtonWord navigation={navigation} title="Obfuscate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Obligatory" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Oblique" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Oblivion" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Oblivious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Obsequious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Obstinate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Obtuse" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Obviate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Occlude" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Odious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Odyssey" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Officious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Omnious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Omniscient" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Onerus" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Onus" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Opaque" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Opine" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Opprobrium" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Optimal" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Opulent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ornate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Oscillate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Osmosis" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ostensibly" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ostentatious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ostracize" destination="Word"/>
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


