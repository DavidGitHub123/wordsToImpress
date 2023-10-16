import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import NavButtonWord from '../../components/NavButtonWord';

export default function TWords({ navigation }) {

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
          <Text style={style.header}>T Words</Text>
        </View>

        <View>
          <NavButtonWord navigation={navigation} title="Taciturn" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Tandem" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Tantamount" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Tautology" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Technocracy" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Teetotaler" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Temerity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Tenable" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Tenacious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Tenuous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Tirade" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Titillate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Toothsome" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Trajectory" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Transcendental" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Translucent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Transpire" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Travail" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Travesty" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Trenchant" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Trepidation" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Trifling" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Tumultuous " destination="Word"/>
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


