import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import NavButtonWord from '../../components/NavButtonWord';

export default function DWords({ navigation }) {

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
          <Text style={style.header}>D Words</Text>
        </View>
        
        <View>
          <NavButtonWord navigation={navigation} title="Dalliance" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dank" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Debacle" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Debauchery" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Debilitate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Debonair" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Decadence" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Decrepit" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Decorum" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Deduce" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Deescalate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Defamation" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Deference" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Degenerate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Deify" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Deign" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Delectable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Deleterious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Delineate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Delusion" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Demagogue" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Demarcate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Demure" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Denote" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Denunciation" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Deplorable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Depravity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Deprecate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dereliction" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Derision" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Derivation" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Desecrate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Desideratum" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Despondency" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Despotism" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Desultory" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dexterous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Diabolical" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Diagnostic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dialectic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Diatribe" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dichotomy" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Didactic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Diffident" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dilapidated" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dilatory" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dilettante" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Diminution" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Diplomacy" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Discombobulate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Discomfit" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Disconcerting" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Disdain" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Disgruntle" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Disingenuous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Disparage" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Disparate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Disparity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Disport" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Disseminate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dissipate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dissolution" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dissonance" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dissuade" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Diurnal" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Divergence" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Docile" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dogmatic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Domesticate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Droll" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Dubious" destination="Word"/>
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


