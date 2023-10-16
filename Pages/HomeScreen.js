import { useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable, Button, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import NavButton from '../components/NavButton';

export default function HomeScreen({ navigation }) {

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
      <SafeAreaView >
      <ScrollView alwaysBounceHorizontal={true}>
      <LinearGradient
        colors={["#0047ab", "#4169e1"]}
        start={[0.1, 1]}
        opacity={.95}
      >

      <View style={style.page}>

        <Image source={require('../assets/logo_sm.png')}
        style={style.image}/>

      <View style={style.section}>
        <NavButton navigation={navigation} title="My Vocab List" destination="MyList"/>
        <NavButton navigation={navigation} title="A-Z Words" destination="AtoZButtons"/>
        <NavButton navigation={navigation} title="Vocab Mastery" destination="VocabMastery"/>
        <NavButton navigation={navigation} title="Word of Day" destination="WordOfDay"/>   
        <NavButton navigation={navigation} title="Word Situations" destination="WordSituations"/>   
        <NavButton navigation={navigation} title="Pre-Built List" destination="PreBuiltList"/>   
        <NavButton navigation={navigation} title="Build My List" destination="BuildMyList"/> 
        <NavButton navigation={navigation} title="Learning System" destination="System"/> 
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
      justifyContent: 'center'
    },

  image: {
    width: 0,
    height: 0,
    paddingVertical: 100,
    paddingHorizontal: 200,
  },

  section: {
    paddingVertical: 30,
  },

  appButton: {
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  appButtonText: {
    fontSize: 20,
    color: '#fff'
  },

  appButtonContainer: {
    width: 250,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },

})

