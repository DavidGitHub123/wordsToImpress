import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';

import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function KWords() {
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
          <Text style={style.header}>T Words</Text>
        </View>

        <View onPress={toWordScreen}>
        {/* onPress takes you to the corresponding word screen */}
        
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Taciturn"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Tandem"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Tantamount"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Tautology"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Technocracy"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Teetotaler"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Temerity"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Tenable"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Tenacious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Tenuous"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Tirade"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Titillate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Toothsome"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Trajectory"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Transcendental"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Translucent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Transpire"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Travail"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Travesty"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Trenchant"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Trepidation"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Trifling"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Tumultuous   "/>
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


     
