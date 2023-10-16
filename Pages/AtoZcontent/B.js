import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import HomeButton from '../../components/HomeButton';
import NavButtonWord from '../../components/NavButtonWord';

export default function BWords({ navigation }) {

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
          <Text style={style.header}>B Words</Text>
        </View>
        
        <View>
          <NavButtonWord navigation={navigation} title="Babbitt" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Baccalaureate" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Balderdash" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bandy" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Baneful" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Barbarous" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Barrage" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bedraggled" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Befuddle" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Belated" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Beleaguered" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Belie" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Belligerent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bemused" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Benevolent" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Benighted" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bequeath" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bereaved" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Beseech" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bestial" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bestow" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bête Noire" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bilateral" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bilk" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Binary" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Biogenesis" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bipolar" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Blasé" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Blather" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Blithe" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bludgeon" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bluster" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bohemian" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bombast" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bona Fide" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Boorish" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bovine" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Braggadocio" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Brandish" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Brash" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bravado" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Brevity" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Brunt" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Brusk" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bugaboo" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bumptious" destination="Word"/>
          <NavButtonWord navigation={navigation} title="Bygone" destination="Word"/>
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
    width: 300,
  },

})


