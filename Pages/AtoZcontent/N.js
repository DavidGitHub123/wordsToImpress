import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';

import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function NWords() {
  const navigate = useNavigate()

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
     <SafeAreaView style={style.body}>
    <ScrollView alwaysBounceHorizontal={true}>

        <View>
          <Text style={style.header}>N Words</Text>
        </View>

        <View onPress={toWordScreen}>
        {/* onPress takes you to the corresponding word screen */}
        
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nabob"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Narcissistic"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Narcolepsy"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nascent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nebulous"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Ne Plus Ultra"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Necrology"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nefarious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nemesis"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Neolithic"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Neophyte"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nepotism"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nether"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nexus"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nirvana"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Noblesse Oblige"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nocturnal"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nom De Guerre"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nomenclature"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Non Sequitur"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nonchalance"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nonentity"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nonfeasance"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nonpareil"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nouveau Riche"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Noxious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nubile"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Nugatory"/>
        </Pressable>

        <View>
          <Pressable onPress={onPress=()=> {}}>
            <AppButton icon="sign-in" title="{Home}"/>
          </Pressable>
        </View>


        </View>
    </ScrollView>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  body: {
    backgroundColor: 'cmyk(5, 0, 0, 0)',
    fontFamily: 'Helvetica',
    color: '#000',
    display: 'flex',
  },

  flex: {
    display: 'flex',
    fontSize: 10
  },

  header: {
    backgroundColor: 'cmyk(92, 46, 0, 0)',
    display: 'flex',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 80,
    backgroundColor: "#555",
  },
  appButton: {
    padding: 12,
  },
  appButtonText: {
    fontSize: 17,
  },
  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

})







       