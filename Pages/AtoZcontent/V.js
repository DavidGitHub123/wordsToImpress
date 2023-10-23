import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import { NavButtonWord } from '../../components/NavButtonWord';

export default function VWords({ navigation }) {

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
  )

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
          <Text style={style.header}>V Words</Text>
        </View>

        <View>
          <NavButtonWord navigation={navigation} title="Vacillate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vacuous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vagary" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vanguard" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vehement" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Venerable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Verbose" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Veritable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vestige" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vicarious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vindictive" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Virile" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Visceral" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vivacious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Vociferous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Volatile" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Voracious" destination="Word"/>
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


