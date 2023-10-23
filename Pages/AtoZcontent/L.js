import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import { NavButtonWord } from '../../components/NavButtonWord';

export default function LWords({ navigation }) {

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
          <Text style={style.header}>L Words</Text>
        </View>
        
        <View>
          <NavButtonWord navigation={navigation} title="Laconic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Laggard" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Lambaste" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Lamentation" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Languid" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Largess" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Latent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Laudatory" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Laureate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Lethargic" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Levity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Liaison" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Libation" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Litany" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Litigious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Livid" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Logistics" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Loquacious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Lothario" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Lucid" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Ludicrous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="KeynotLurid" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Lustrous" destination="Word"/>
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


