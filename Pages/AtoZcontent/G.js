import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import { NavButtonWord } from '../../components/NavButtonWord';

export default function GWords({ navigation }) {

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
          <Text style={style.header}>G Words</Text>
        </View>
        
        <View>
          <NavButtonWord navigation={navigation} title="Gainsay" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Gallantry" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Galvanize" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Gamut" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Gargantuan" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Garner" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Garrulity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Gauche" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Gaudy" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Gauntlet" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Genial" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Genteel" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Gestation" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Globular" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Goad" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Gormandize" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Gradation" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Graft" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Grandeur" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Grandiloquence" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Grandiose" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Gratuitous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Gregarious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Grimace" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Grope" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Grovel" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Guile" destination="Word"/> 
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


