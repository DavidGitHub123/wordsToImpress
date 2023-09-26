import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';

import { useState, useEffect, Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function SWords() {
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
         <Text style={style.header}>S Words</Text>
        </View>

        <View onPress={toWordScreen}>
        {/* onPress takes you to the corresponding word screen */}
        
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Salacious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Salient"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Salutary"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sanguine"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sardonic"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Saturnine"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Savoir Faire"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Scapegoat"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Scathing"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Scrutinize"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sequester"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Serendipity"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sine Qua Non"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Skittish"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Smattering"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sobriquet"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Solace"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Solicitious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sophistry"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sordid"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sovereignty"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Spurious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Stalemate"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Stipulation"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Strident"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Stringent"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Stultify"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Stymie"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sublime"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Subservient"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sully"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sumptuous"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Sundry"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Supercilious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Superfluous"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Superlative"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Supersede"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Supine"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Surcease"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Surreptitious"/>
        </Pressable>
        <Pressable onPress={onPress=()=>{}}>
          <AppButton icon="sign-in" title="Symbiotic"/>
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



       







        