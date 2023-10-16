import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import NavButtonWord from '../../components/NavButtonWord';

export default function NWords({ navigation }) {

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
          <Text style={style.header}>N Words</Text>
        </View>
        
        <View>
          <NavButtonWord navigation={navigation} title="Nabob" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Narcissistic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Narcolepsy" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nascent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nebulous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ne Plus Ultra" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Necrology" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nefarious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nemesis" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Neolithic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Neophyte" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nepotism" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nether" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nexus" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nirvana" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Noblesse Oblige" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nocturnal" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nom De Guerre" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nomenclature" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Non Sequitur" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nonchalance" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nonentity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nonfeasance" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nonpareil" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nouveau Riche" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Noxious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nubile" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Nugatory" destination="Word"/>
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


